import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Home Barber Service in ${siteConfig.address.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at top, #1a1408 0%, #0a0a0a 60%)",
          color: "#f5ecd2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#e2c06b",
          }}
        >
          The Good Barber
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.05,
            backgroundImage:
              "linear-gradient(135deg, #f5ecd2 0%, #e2c06b 45%, #c8912b 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Grooming At Your Doorstep
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#b8b2a4" }}>
          Home barber service across Coimbatore · Book on WhatsApp
        </div>
      </div>
    ),
    { ...size }
  );
}
