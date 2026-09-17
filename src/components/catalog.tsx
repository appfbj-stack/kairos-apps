import { apps } from "@/lib/apps.config";
import { AppCard } from "@/components/app-card";
import { LinkButton } from "@/components/button";

export function Catalog() {
  return (
    <section id="solucoes" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Catálogo
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Conheça{" "}
              <span className="text-gradient">nossas soluções</span>
            </h2>
            <p className="mt-4 text-white/60">
              Aplicativos prontos para resolver um problema específico. Cada um
              tem página própria com funcionalidades reais e contato direto.
            </p>
          </div>
          <LinkButton href="/apps" variant="secondary" size="md">
            Ver todos
          </LinkButton>
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}