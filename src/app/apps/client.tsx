"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Screenshot } from "@/components/screenshot";
import { cn } from "@/lib/cn";

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

type SafeCat = { slug: string; nome: string; icon: string; descricao: string };

export function AppsIndexClient({
  apps,
  categories,
}: {
  apps: SafeApp[];
  categories: SafeCat[];
}) {
  const [cat, setCat] = useState<string | "todos">("todos");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return apps.filter((a) => {
      if (cat !== "todos" && a.category !== cat) return false;
      if (q) {
        const needle = q.toLowerCase();
        const hay = `${a.name} ${a.tagline} ${a.description} ${a.target}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [apps, cat, q]);

  return (
    <>
      {/* Filtros */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="relative">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar aplicativo…"
            className="w-full sm:max-w-md px-4 py-3 rounded-xl glass text-sm text-white placeholder-white/40 focus:outline-none focus:border-[var(--accent)]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterPill
            active={cat === "todos"}
            onClick={() => setCat("todos")}
            label="Todos"
          />
          {categories.map((c) => (
            <FilterPill
              key={c.slug}
              active={cat === c.slug}
              onClick={() => setCat(c.slug)}
              label={`${c.icon} ${c.nome}`}
            />
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/apps/${a.slug}`}
            className="group relative overflow-hidden rounded-3xl glass glass-hover transition-all"
          >
            <div className="p-5 sm:p-6">
              <div className="relative mx-auto max-w-[230px]">
                <div
                  className={cn(
                    "absolute inset-0 -z-10 blur-3xl opacity-50 rounded-full bg-gradient-to-br",
                    a.accent.from,
                    a.accent.to
                  )}
                />
                <Screenshot screenshot={a.screenshots[0]} frame="phone" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-lg">{a.icon}</span>
                <h3 className="font-bold tracking-tight">{a.name}</h3>
              </div>
              <p className="mt-2 text-sm text-white/65">{a.tagline}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] group-hover:gap-2 transition-all">
                Conhecer solução <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-white/60">
          Nenhum app encontrado com esse filtro.
        </div>
      )}
    </>
  );
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3.5 py-2 rounded-full text-sm transition-colors border",
        active
          ? "bg-[var(--accent)] text-black border-[var(--accent)] font-semibold"
          : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
      )}
    >
      {label}
    </button>
  );
}