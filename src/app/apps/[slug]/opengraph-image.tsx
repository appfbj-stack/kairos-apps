import { ImageResponse } from "next/og";
import { apps, getAppBySlug } from "@/lib/apps.config";
import { siteConfig } from "@/lib/site.config";

export const runtime = "nodejs";
export const alt = "App Kairós";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const app = getAppBySlug(params.slug);
  if (!app) return new ImageResponse(<div />, { ...size });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #04081a 0%, #0a1230 60%, #0e1d4d 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 80% 30%, rgba(30,109,255,0.35) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,255,163,0.25) 0%, transparent 50%)`,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
          }}
        >
          <div style={{ fontSize: 56, lineHeight: 1 }}>{app.icon}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#94a3b8" }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 22, color: "#cbd5e1" }}>{app.name}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-1px",
              backgroundImage:
                "linear-gradient(135deg, #f8fafc 0%, #93c5fd 50%, #00ffa3 100%)",
              backgroundClip: "text",
              color: "transparent",
              maxWidth: 950,
            }}
          >
            {app.tagline}
          </div>
          <div style={{ fontSize: 20, color: "#cbd5e1", maxWidth: 950 }}>
            {app.description.slice(0, 140)}
            {app.description.length > 140 ? "…" : ""}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
            color: "#94a3b8",
            fontSize: 16,
          }}
        >
          <span>{app.target}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}