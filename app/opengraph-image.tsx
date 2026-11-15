import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101C2C",
          padding: "64px 72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 640,
            height: 640,
            display: "flex",
            border: "1px solid rgba(233,162,59,0.35)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -60,
            top: -60,
            width: 440,
            height: 440,
            display: "flex",
            border: "1px solid rgba(233,162,59,0.18)",
            borderRadius: "50%",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#E9A23B",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 18,
              letterSpacing: 5,
              color: "#E9A23B",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Prime Projects International
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.94,
              letterSpacing: -4,
              fontWeight: 700,
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              textTransform: "uppercase",
            }}
          >
            <span>Engineering Protection.</span>
            <span style={{ display: "flex" }}>
              Building the Future
              <span style={{ color: "#E9A23B" }}>.</span>
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              letterSpacing: 2,
              color: "#A7ADB4",
              display: "flex",
            }}
          >
            Waterproofing · Insulation · Concrete Repair · Infrastructure
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 22,
            position: "relative",
          }}
        >
          <div style={{ fontSize: 16, letterSpacing: 3, color: "#6D747D", display: "flex" }}>
            KINGDOM OF SAUDI ARABIA
          </div>
          <div style={{ fontSize: 16, letterSpacing: 3, color: "#6D747D", display: "flex" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
