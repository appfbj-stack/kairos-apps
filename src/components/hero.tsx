"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/button";
import { whatsappLink } from "@/lib/whatsapp";
import { getHighlightApps } from "@/lib/apps.config";
import { Screenshot } from "@/components/screenshot";
import { siteConfig } from "@/lib/site.config";

export function Hero() {
  const highlights = getHighlightApps().slice(0, 4);

  return (
    <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              {siteConfig.tagline}
            </div>

            <h1 className="mt-6 text-[40px] sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-gradient">Seu negócio</span>{" "}
              <span className="text-white">pode funcionar de um jeito</span>{" "}
              <span className="text-gradient">mais simples.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/65 max-w-xl">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href="#solucoes" size="lg" variant="primary">
                Conheça nossas soluções
                <ArrowRight size={18} />
              </LinkButton>
              <LinkButton
                href={whatsappLink()}
                external
                size="lg"
                variant="whatsapp"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </LinkButton>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-white/50">
              <span className="inline-flex items-center gap-1.5">
                <Check /> Sem cartão
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check /> Demonstração guiada
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check /> Resposta em até 1 dia útil
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mosaic */}
        <div className="lg:col-span-5">
          <Mosaic
            apps={highlights.map((a) => ({
              slug: a.slug,
              accent: a.accent,
              screenshot: a.screenshots[0],
              name: a.name,
            }))}
          />
        </div>
      </div>
    </section>
  );
}

function Mosaic({
  apps,
}: {
  apps: {
    slug: string;
    accent: { from: string; to: string; ring: string };
    screenshot: import("@/lib/apps.config").Screenshot;
    name: string;
  }[];
}) {
  // Layout responsivo: empilhado no mobile, mosaico no desktop
  return (
    <div className="relative">
      {/* Mobile: carousel horizontal */}
      <div className="lg:hidden -mx-5 px-5 overflow-x-auto pb-2 flex gap-4 snap-x snap-mandatory">
        {apps.map((a, i) => (
          <div
            key={a.slug}
            className="shrink-0 w-[68%] snap-center"
            style={{ transform: `translateY(${i % 2 === 0 ? "0" : "16"}px)` }}
          >
            <Screenshot screenshot={a.screenshot} frame="phone" />
          </div>
        ))}
      </div>

      {/* Desktop: mosaic com profundidade */}
      <div className="hidden lg:block relative h-[520px]">
        {apps.map((a, i) => {
          const positions = [
            { top: "0%", left: "0%", rotate: -4, scale: 1, z: 10 },
            { top: "8%", left: "55%", rotate: 6, scale: 1, z: 20 },
            { top: "55%", left: "5%", rotate: 5, scale: 1, z: 30 },
            { top: "62%", left: "62%", rotate: -6, scale: 1, z: 40 },
          ];
          const pos = positions[i] ?? positions[0];
          return (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 30, rotate: pos.rotate }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="absolute w-[210px]"
              style={{
                top: pos.top,
                left: pos.left,
                transform: `rotate(${pos.rotate}deg)`,
                zIndex: pos.z,
              }}
            >
              <div className="animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                <Screenshot screenshot={a.screenshot} frame="phone" />
              </div>
            </motion.div>
          );
        })}
        {/* Glow central */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-50 bg-[radial-gradient(circle_at_50%_50%,rgba(30,109,255,0.4),transparent_60%)]" />
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4L19 6" stroke="#00ffa3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}