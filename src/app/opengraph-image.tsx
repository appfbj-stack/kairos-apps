import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site.config";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
            background:
              "radial-gradient(circle at 20% 30%, rgba(30,109,255,0.35) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,255,163,0.25) 0%, transparent 50%)",
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
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #1e6dff, #0b3fa3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 28,
              color: "white",
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{siteConfig.name}</div>
            <div style={{ fontSize: 16, color: "#94a3b8" }}>
              {siteConfig.tagline}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-1px",
              backgroundImage:
                "linear-gradient(135deg, #f8fafc 0%, #93c5fd 50%, #00ffa3 100%)",
              backgroundClip: "text",
              color: "transparent",
              maxWidth: 900,
            }}
          >
            Soluções simples para problemas reais.
          </div>
          <div style={{ fontSize: 22, color: "#cbd5e1", maxWidth: 900 }}>
            Aplicativos criados para empresas, profissionais, igrejas e
            organizações.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "relative",
            color: "#94a3b8",
            fontSize: 16,
          }}
        >
          <span>
            CRM · Igreja · Dental · Salão · Engenharia · Ponto · Leitor · Teologia
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}