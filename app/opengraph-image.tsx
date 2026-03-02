import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "./lib/seo";

export const runtime = "edge";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f0f11 0%, #1a1a1e 100%)",
        color: "white",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Gradient Top Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
        }}
      />

      {/* Brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            background: "linear-gradient(90deg, #ffffff, #a1a1aa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {SITE_NAME}.
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "42px",
          fontWeight: 400,
          color: "#e4e4e7",
          lineHeight: 1.2,
          maxWidth: "900px",
        }}
      >
        {SITE_TAGLINE}
      </div>

      {/* Footer / URL */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "80px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          }}
        />
        <div
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: "#a1a1aa",
          }}
        >
          {new URL(SITE_URL).host}
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
