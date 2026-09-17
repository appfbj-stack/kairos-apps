import { siteConfig } from "./site.config";

/**
 * Gera um link wa.me com mensagem pré-preenchida.
 *
 * Uso:
 *   whatsappLink()                                    // mensagem padrão do site
 *   whatsappLink("Tenho interesse no Kairós Igreja")  // mensagem custom
 *   whatsappLink({ app: "igreja", intent: "test" })     // mensagem contextual
 */
export function whatsappLink(message?: string): string {
  const phone = siteConfig.whatsapp.number;
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Mensagens contextuais pré-prontas por intenção.
 * Use no WhatsAppFloat e nos CTAs dos cards/páginas de produto.
 */
export const whatsappMessages = {
  geral: () =>
    `Olá! Vim pelo site da ${siteConfig.name} e gostaria de conhecer as soluções.`,
  interesse: (appNome: string) =>
    `Olá! Tenho interesse no ${appNome} e gostaria de conhecer o sistema.`,
  teste: (appNome: string) =>
    `Olá! Gostaria de testar o ${appNome} antes de contratar.`,
  orcamento: (appNome: string) =>
    `Olá! Gostaria de um orçamento do ${appNome}.`,
} as const;