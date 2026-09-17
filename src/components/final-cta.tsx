import { MessageCircle } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { LinkButton } from "@/components/button";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-14">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[var(--primary)]/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[var(--accent)]/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Vamos colocar seu{" "}
              <span className="text-gradient">app funcionando?</span>
            </h2>
            <p className="mt-4 text-white/65 max-w-2xl">
              Mande uma mensagem no WhatsApp com o nome do aplicativo que te
              interessou. Respondemos rapidamente com uma demonstração guiada.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <LinkButton
                href={whatsappLink(whatsappMessages.geral())}
                external
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </LinkButton>
              <LinkButton href="/apps" variant="secondary" size="lg">
                Ver aplicativos
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}