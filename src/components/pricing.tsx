import { Check, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { LinkButton } from "@/components/button";

export function Pricing() {
  return (
    <section id="preco" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Preço
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Licença anual.{" "}
            <span className="text-gradient">Sem fidelidade surpresa.</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Enquanto os valores definitivos não estão definidos no projeto, a
            exibição abaixo permanece configurável em{" "}
            <code className="text-[var(--accent)]">lib/site.config.ts</code>.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="relative rounded-3xl glass overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
            <div className="p-7">
              <div className="text-xs uppercase tracking-wider text-white/60">
                Licença anual
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl text-white/60">
                  {siteConfig.pricing.currency}
                </span>
                <span className="text-5xl font-extrabold text-gradient">
                  {siteConfig.pricing.annual}
                </span>
                <span className="text-white/60">/ ano</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {siteConfig.pricing.benefits.map((b) => (
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
          </div>

          <div className="relative rounded-3xl glass overflow-hidden p-7 flex flex-col">
            <div className="text-xs uppercase tracking-wider text-white/60">
              Teste antes de contratar
            </div>
            <h3 className="mt-4 text-2xl font-bold">
              Prefere experimentar primeiro?
            </h3>
            <p className="mt-3 text-sm text-white/60">
              Quando o aplicativo oferecer ambiente de teste, você será
              direcionado diretamente. Enquanto isso, fale com a gente no
              WhatsApp e a gente te mostra como funciona.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <LinkButton
                href={whatsappLink(whatsappMessages.teste("Kairós Apps"))}
                external
                variant="whatsapp"
                size="md"
              >
                <MessageCircle size={18} />
                Quero testar
              </LinkButton>
              <LinkButton
                href={whatsappLink(whatsappMessages.geral())}
                external
                variant="secondary"
                size="md"
              >
                Falar no WhatsApp
              </LinkButton>
            </div>

            <div className="mt-auto pt-6 text-xs text-white/40">
              * Preços e disponibilidade variam por aplicativo. Cada solução
              tem página própria com as condições específicas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}