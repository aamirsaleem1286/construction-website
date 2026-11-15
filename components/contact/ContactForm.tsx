"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactSchema, contactServiceOptions, type ContactValues } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const labelClass = "font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark";
const fieldClass =
  "mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-concrete/70 focus:border-accent-deep";

type Status = "idle" | "error" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState("");
  const successRef = useRef<HTMLHeadingElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
      website: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  const onSubmit = async (values: ContactValues) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setServerError(
          data.error ??
            "The enquiry could not be sent. Please try again, or use the direct contact details on this page."
        );
        return;
      }

      setSubmittedName(values.name.trim().split(/\s+/)[0] ?? "");
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setServerError(
        "The enquiry could not be sent. Please check your connection and try again, or use the direct contact details on this page."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border border-ink/12 bg-white p-8 md:p-10" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ink">
          <Check className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        </span>
        <h3
          ref={successRef}
          tabIndex={-1}
          className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink outline-none md:text-3xl"
        >
          Thank you{submittedName ? `, ${submittedName}` : ""}.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-concrete-dark">
          Your enquiry has been received. The team will review the details you provided and
          respond using the contact information supplied.
        </p>
        <p className="mt-4 text-xs leading-relaxed text-concrete-dark">
          For urgent matters, use the direct contact details shown on this page.
        </p>
        <Button
          type="button"
          variant="outlineDark"
          className="mt-7"
          onClick={() => {
            setStatus("idle");
            setServerError(null);
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative border border-ink/12 bg-white p-6 md:p-8"
    >
      <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
        <div>
          <p className="label-mono text-accent-deep">Project enquiry</p>
          <p className="mt-1 text-xs text-concrete-dark">
            Fields marked with an asterisk are required.
          </p>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-concrete-dark">
          Confidential
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span className="text-accent-deep">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(fieldClass, errors.name && "border-red-700/60")}
            {...register("name")}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-800">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            placeholder="Company or organisation"
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            className={cn(fieldClass, errors.company && "border-red-700/60")}
            {...register("company")}
          />
          {errors.company ? (
            <p id="contact-company-error" className="mt-1.5 text-xs text-red-800">
              {errors.company.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span className="text-accent-deep">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@company.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(fieldClass, errors.email && "border-red-700/60")}
            {...register("email")}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-800">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+966"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={cn(fieldClass, errors.phone && "border-red-700/60")}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="mt-1.5 text-xs text-red-800">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-service" className={labelClass}>
            Service of interest
          </label>
          <select
            id="contact-service"
            className={cn(fieldClass, "appearance-none")}
            aria-invalid={errors.service ? true : undefined}
            {...register("service")}
          >
            <option value="">Select a service</option>
            {contactServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="mt-1.5 text-xs text-red-800">{errors.service.message}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            Project details <span className="text-accent-deep">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Asset type, location, current condition and what you need to achieve."
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={cn(fieldClass, "resize-y", errors.message && "border-red-700/60")}
            {...register("message")}
          />
          {errors.message ? (
            <p id="contact-message-error" className="mt-1.5 text-xs text-red-800">
              {errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="contact-consent" className="flex cursor-pointer items-start gap-3">
          <input
            id="contact-consent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 accent-accent-deep"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "contact-consent-error" : undefined}
            {...register("consent")}
          />
          <span className="text-xs leading-relaxed text-concrete-dark">
            I consent to Prime Projects International using the details provided to respond to
            this enquiry. <span className="text-accent-deep">*</span>
          </span>
        </label>
        {errors.consent ? (
          <p id="contact-consent-error" className="mt-1.5 text-xs text-red-800">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      {status === "error" && serverError ? (
        <div
          role="alert"
          className="mt-5 border border-red-700/25 bg-red-800/[0.04] p-4 text-xs leading-relaxed text-red-900"
        >
          {serverError}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[10px] leading-relaxed text-concrete-dark">
          Your details are used only to respond to this enquiry. Do not include sensitive
          commercial information in this form.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}
