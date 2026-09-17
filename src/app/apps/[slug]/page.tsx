import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  PlayCircle,
} from "lucide-react";
import { apps, getAppBySlug } from "@/lib/apps.config";
import { Screenshot } from "@/components/screenshot";
import { LinkButton } from "@/components/button";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site.config";
import { buildAppMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};
  return buildAppMetadata(app);
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  const otherApps = apps.filter((a) => a.slug !== app.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-10 sm:pt-16 pb-12 overflow-hidden">
        <div
          className={`absolute inset-0 -z-10 opacity-40 blur-3xl bg-gradient-to-br ${app.accent.from} ${app.accent.to}`}
        />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft size={14} />
            Todos os apps
          </Link>

          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                <span className="text-base">{app.icon}</span>
                {app.name}
              </div>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                {app.tagline}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/65 max-w-xl">
                {app.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <LinkButton
                  href={whatsappLink(whatsappMessages.interesse(app.name))}
                  external
                  variant="whatsapp"
                  size="lg"
                >
                  <MessageCircle size={18} />
                  Tenho interesse
                </LinkButton>
                <LinkButton
                  href={whatsappLink(whatsappMessages.teste(app.name))}
                  external
                  variant="secondary"
                  size="lg"
                >
                  <PlayCircle size={18} />
                  Quero testar
                </LinkButton>
              </div>

              <div className="mt-6 text-xs text-white/50">
                Público: {app.target}
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-[280px]">
                <Screenshot screenshot={app.screenshots[0]} frame="phone" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ CONSEGUE FAZER */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            O que você{" "}
            <span className="text-gradient">consegue fazer</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl">
            Funcionalidades existentes no {app.name}. Esta lista reflete o que o
            aplicativo oferece hoje.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {app.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 p-4 rounded-xl glass"
              >
                <Check
                  size={18}
                  className="text-[var(--accent)] mt-0.5 shrink-0"
                />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Como <span className="text-gradient">funciona?</span>
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {app.howItWorks.map((step, i) => (
              <div
                key={step}
                className="relative p-5 rounded-2xl glass overflow-hidden"
              >
                <div className="text-[var(--accent)] text-xs font-bold tracking-wider">
                  ETAPA {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Veja o aplicativo{" "}
            <span className="text-gradient">funcionando</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl">
            Algumas telas representativas do {app.name}. Em breve adicionaremos
            vídeos de demonstração.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {app.screenshots.map((shot, i) => (
              <div key={i} className="relative">
                <Screenshot screenshot={shot} frame="phone" />
                {shot.caption && (
                  <div className="mt-2 text-xs text-white/50 text-center">
                    {shot.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS + PREÇO */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl glass p-7">
              <div className="text-xs uppercase tracking-wider text-white/60">
                Benefícios
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {app.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-[var(--accent)] mt-0.5 shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-3xl glass p-7 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
              <div className="text-xs uppercase tracking-wider text-white/60">
                Licença anual
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-xl text-white/60">
                  {siteConfig.pricing.currency}
                </span>
                <span className="text-5xl font-extrabold text-gradient">
                  {app.price}
                </span>
                <span className="text-white/60">/ ano</span>
              </div>
              <p className="mt-4 text-sm text-white/60">
                Entre em contato para saber valores e condições específicas
                deste aplicativo.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <LinkButton
                  href={whatsappLink(whatsappMessages.orcamento(app.name))}
                  external
                  variant="whatsapp"
                  size="md"
                >
                  <MessageCircle size={18} />
                  Pedir orçamento
                </LinkButton>
                <LinkButton
                  href={whatsappLink(whatsappMessages.teste(app.name))}
                  external
                  variant="secondary"
                  size="md"
                >
                  Quero testar
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTROS APPS */}
      {otherApps.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Outras{" "}
                <span className="text-gradient">soluções Kairós</span>
              </h2>
              <Link
                href="/apps"
                className="text-sm text-white/60 hover:text-white inline-flex items-center gap-1"
              >
                Ver todos <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherApps.map((a) => (
                <Link
                  key={a.slug}
                  href={`/apps/${a.slug}`}
                  className="group p-5 rounded-2xl glass glass-hover transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{a.icon}</span>
                    <div className="font-bold">{a.name}</div>
                  </div>
                  <div className="mt-2 text-sm text-white/65">{a.tagline}</div>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)]">
                    Conhecer <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}