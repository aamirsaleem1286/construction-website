import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/data/site";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const record = attempts.get(key);

  if (!record || record.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  record.count += 1;

  if (attempts.size > 500) {
    for (const [entryKey, entry] of attempts) {
      if (entry.resetAt <= now) attempts.delete(entryKey);
    }
  }

  return record.count > MAX_REQUESTS;
}

async function sendWithResend(payload: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) return { configured: false as const, ok: true as const };

  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Prime Projects International <onboarding@resend.dev>";

  const lines = [
    `Name: ${payload.name}`,
    `Company: ${payload.company || "Not provided"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Service: ${payload.service || "Not specified"}`,
    "",
    "Project details:",
    payload.message,
    "",
    `Source: ${siteConfig.url}/contact`,
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((address) => address.trim()).filter(Boolean),
      reply_to: payload.email,
      subject: `Website enquiry — ${payload.service || "General"}`,
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    return { configured: true as const, ok: false as const };
  }

  return { configured: true as const, ok: true as const };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Unsupported request format." },
      { status: 415 }
    );
  }

  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many enquiries have been sent from this connection. Please try again later.",
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "The request could not be read." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error:
          parsed.error.issues[0]?.message ??
          "Please check the details submitted and try again.",
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    const result = await sendWithResend({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
    });

    if (!result.configured) {
      console.info(
        "[contact] Enquiry validated. Email delivery is not configured; set RESEND_API_KEY and CONTACT_TO_EMAIL to enable it."
      );
    } else if (!result.ok) {
      console.error("[contact] The email provider rejected the enquiry.");
      return NextResponse.json(
        {
          ok: false,
          error:
            "The enquiry could not be delivered. Please try again, or use the direct contact details shown on the contact page.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    console.error("[contact] Unexpected error while sending the enquiry.");
    return NextResponse.json(
      {
        ok: false,
        error:
          "The enquiry could not be sent. Please try again, or use the direct contact details shown on the contact page.",
      },
      { status: 500 }
    );
  }
}
