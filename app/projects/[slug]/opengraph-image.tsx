import { ImageResponse } from "next/og";
import { PROJECT_SLUGS, projects } from "@/app/lib/constants";
import { SITE_NAME, SITE_URL } from "@/app/lib/seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const slug = (await params).slug;
  const project = projects[slug];

  if (!project) {
    return new ImageResponse(
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Project not found
      </div>,
      { ...size },
    );
  }

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
      {/* Project specific gradient background accent */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          background:
            project.gradient || "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          filter: "blur(120px)",
          opacity: 0.15,
          borderRadius: "50%",
        }}
      />

      {/* Gradient Top Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background:
            project.gradient || "linear-gradient(90deg, #3b82f6, #8b5cf6)",
        }}
      />

      {/* Pre-title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
          fontSize: "24px",
          fontWeight: 600,
          color: project.accent || "#3b82f6",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Case Study
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: "72px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          marginBottom: "24px",
          lineHeight: 1.1,
          color: "white",
          maxWidth: "900px",
        }}
      >
        {project.title}
      </div>

      {/* Description/Tagline */}
      <div
        style={{
          fontSize: "36px",
          fontWeight: 400,
          color: "#a1a1aa",
          lineHeight: 1.4,
          maxWidth: "900px",
        }}
      >
        {project.tagline}
      </div>

      {/* Chips/Tags */}
      <div style={{ display: "flex", gap: "16px", marginTop: "40px" }}>
        {project.tags.slice(0, 3).map((tag, i) => (
          <div
            key={i}
            style={{
              padding: "8px 20px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "99px",
              fontSize: "20px",
              color: "#e4e4e7",
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Brand */}
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
            fontSize: "24px",
            fontWeight: 600,
            color: "#71717a",
          }}
        >
          {SITE_NAME}.
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
