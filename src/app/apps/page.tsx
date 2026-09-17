import type { Metadata } from "next";
import { AppsIndexClient } from "./client";
import { buildSiteMetadata } from "@/lib/seo";
import { apps, categories, type Screenshot } from "@/lib/apps.config";

export const metadata: Metadata = {
  ...buildSiteMetadata(),
  title: "Aplicativos",
  description:
    "Catálogo de aplicativos da Kairós Apps: CRM, Igreja, Dental, Salão, Engenharia, Ponto, Leitor e Teologia.",
  alternates: { canonical: "/apps" },
};

type SafeScreenshot =
  | { kind: "svg"; component: string; alt?: string; caption?: string }
  | { kind: "image"; src: string; alt?: string; caption?: string };

type SafeApp = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  target: string;
  features: string[];
  benefits: string[];
  status: "available" | "beta" | "coming";
  highlight: boolean;
  price: string;
  icon: string;
  accent: { from: string; to: string; ring: string };
  screenshots: SafeScreenshot[];
};

export default function AppsIndex() {
  // Serializa para o client (alguns campos têm classes Tailwind — mandamos só os dados)
  const safeApps: SafeApp[] = apps.map((a) => ({
    slug: a.slug,
    name: a.name,
    tagline: a.tagline,
    description: a.description,
    category: a.category,
    target: a.target,
    features: [...a.features],
    benefits: [...a.benefits],
    status: a.status,
    highlight: Boolean(a.highlight),
    price: a.price,
    icon: a.icon,
    accent: a.accent,
    screenshots: a.screenshots.map((s): SafeScreenshot => {
      if (s.kind === "image") {
        return { kind: "image", src: s.src, alt: s.alt, caption: s.caption };
      }
      return {
        kind: "svg",
        component: s.component,
        alt: s.alt,
        caption: s.caption,
      };
    }),
  }));
  const safeCategories = categories.map((c) => ({
    slug: c.slug,
    nome: c.nome,
    icon: c.icon,
    descricao: c.descricao,
  }));

  return (
    <section className="pt-12 sm:pt-16 pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Catálogo
          </div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Todos os{" "}
            <span className="text-gradient">aplicativos Kairós</span>
          </h1>
          <p className="mt-4 text-white/60">
            Filtre por categoria para encontrar a solução certa para o seu
            negócio, profissão ou organização.
          </p>
        </div>

        <AppsIndexClient apps={safeApps} categories={safeCategories} />
      </div>
    </section>
  );
}