// CONFIGURAÇÃO CENTRAL DO SITE
//
// Tudo que você precisa ajustar com frequência fica aqui:
// - WhatsApp (número + mensagem padrão)
// - Redes sociais
// - Preço base
// - Contatos e identidade da marca
//
// Para trocar o número do WhatsApp, edite apenas `whatsapp.number`.
// Para mudar links do Instagram/Facebook, edite `social.instagram` / `social.facebook`.

export const siteConfig = {
  // Identidade
  name: "Kairós Apps",
  tagline: "Soluções simples para problemas reais.",
  description:
    "Aplicativos criados para resolver problemas reais de empresas, profissionais, igrejas e organizações.",

  // Contato principal
  contact: {
    email: "contato@kairosapps.com.br",
    phone: "+55 00 00000-0000",
  },

  // WhatsApp - PONTO ÚNICO DE CONFIGURAÇÃO
  // number: DDI + DDD + número, somente dígitos
  // Para mensagens contextuais use a função whatsappLink() em lib/whatsapp.ts
  whatsapp: {
    number: "5500000000000", // <-- troque aqui
    defaultMessage:
      "Olá! Vim pelo site da Kairós Apps e gostaria de conhecer as soluções.",
  },

  // Redes sociais
  social: {
    instagram: "https://instagram.com/kairosapps", // <-- troque aqui
    facebook: "https://facebook.com/kairosapps", // <-- troque aqui
    youtube: "", // opcional
    linkedin: "", // opcional
  },

  // Preço base (licença anual) - usado como default nas páginas de produto
  pricing: {
    currency: "R$",
    annual: "Consulte", // <-- troque aqui. Mantém "Consulte" até você definir valores
    benefits: [
      "Licença por 12 meses",
      "Atualizações incluídas no período",
      "Hospedagem (quando aplicável)",
      "Suporte conforme o plano contratado",
      "Sistema disponível enquanto a licença estiver ativa",
    ],
  },

  // SEO
  seo: {
    siteUrl: "https://apps.fbautomacao.space", // publicado em 2026-09-17
    keywords: [
      "aplicativos para empresas",
      "sistemas para pequenos negócios",
      "aplicativos de gestão",
      "sistemas simples",
      "automação de negócios",
      "software para pequenos negócios",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;