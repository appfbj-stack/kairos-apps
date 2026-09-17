import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer
      id="contato"
      className="mt-32 border-t border-white/5 bg-[rgba(4,8,26,0.6)] backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-bold">{siteConfig.name}</div>
          <p className="mt-2 text-sm text-white/60 max-w-md">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <SocialLink
              href={siteConfig.social.instagram}
              label="Instagram"
              icon={<InstagramGlyph />}
            />
            <SocialLink
              href={siteConfig.social.facebook}
              label="Facebook"
              icon={<FacebookGlyph />}
            />
            <SocialLink
              href={whatsappLink()}
              label="WhatsApp"
              icon={<MessageCircle size={18} />}
            />
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Aplicativos</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <a href="/apps" className="hover:text-white">
                Ver todos os apps →
              </a>
            </li>
            <li>
              <a href="/#categorias" className="hover:text-white">
                Categorias
              </a>
            </li>
            <li>
              <a href="/#preco" className="hover:text-white">
                Preço
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Contato</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </div>
          <div>{siteConfig.tagline}</div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors"
    >
      {icon}
    </a>
  );
}

function InstagramGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}