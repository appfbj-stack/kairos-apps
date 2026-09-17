import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { KairoApp } from "@/lib/apps.config";
import { Screenshot } from "@/components/screenshot";
import { cn } from "@/lib/cn";

export function AppCard({ app, compact = false }: { app: KairoApp; compact?: boolean }) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl glass glass-hover",
        "transition-all duration-300"
      )}
    >
      <Link
        href={`/apps/${app.slug}`}
        className="absolute inset-0"
        aria-label={`Conheça o ${app.name}`}
      />
      <div className={cn("relative", compact ? "p-4" : "p-5 sm:p-7")}>
        {/* Mockup */}
        <div
          className={cn(
            "relative mx-auto",
            compact ? "max-w-[180px]" : "max-w-[240px]"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 -z-10 blur-3xl opacity-50 rounded-full",
              "bg-gradient-to-br",
              app.accent.from,
              app.accent.to
            )}
          />
          <Screenshot
            screenshot={app.screenshots[0]}
            frame="phone"
            className="ring-1 ring-white/10"
          />
        </div>

        {/* Texto */}
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <span className="text-lg">{app.icon}</span>
            <h3
              className={cn(
                "font-bold tracking-tight",
                compact ? "text-base" : "text-lg sm:text-xl"
              )}
            >
              {app.name}
            </h3>
          </div>
          <p
            className={cn(
              "mt-2 text-white/65",
              compact ? "text-xs" : "text-sm"
            )}
          >
            {app.tagline}
          </p>

          {!compact && (
            <ul className="mt-4 space-y-1.5 text-sm text-white/60">
              {app.benefits.slice(0, 3).map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center gap-1 text-sm font-semibold",
              "text-[var(--accent)] group-hover:gap-2 transition-all"
            )}
          >
            Conhecer solução
            <ArrowRight size={16} />
          </span>
          {app.status !== "available" && (
            <span className="text-[10px] uppercase tracking-wider text-white/40 px-2 py-1 rounded-full bg-white/5 border border-white/10">
              {app.status === "coming" ? "Em breve" : "Beta"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}