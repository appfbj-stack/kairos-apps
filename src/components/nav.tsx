"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, LinkButton } from "@/components/button";
import { siteConfig } from "@/lib/site.config";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#categorias", label: "Categorias" },
  { href: "/apps", label: "Aplicativos" },
  { href: "/#preco", label: "Preço" },
  { href: "/#contato", label: "Contato" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[rgba(4,8,26,0.75)] backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo />
          <div className="leading-tight">
            <div className="font-bold text-[15px] tracking-tight">
              {siteConfig.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]/80">
              {siteConfig.tagline.split(" ")[0]} {siteConfig.tagline.split(" ")[2]}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-white/75">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LinkButton
            href={whatsappLink()}
            external
            variant="whatsapp"
            size="sm"
          >
            Falar no WhatsApp
          </LinkButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-white/80"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[rgba(4,8,26,0.95)] backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white/80 hover:text-white border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-black font-semibold"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[#0b3fa3] grid place-items-center shadow-[0_8px_20px_-6px_rgba(30,109,255,0.7)]">
      <span className="text-white font-black text-base tracking-tight">K</span>
      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] ring-2 ring-[var(--background)]" />
    </div>
  );
}