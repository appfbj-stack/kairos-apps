# Kairós Apps — Landing Page

Landing page premium e catálogo de aplicativos da **Kairós Apps**.

Stack: **Next.js 16 (App Router) + React 19 + Tailwind 4 + TypeScript + Framer Motion**.

---

## 🚀 Rodar local

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de produção:

```bash
npm run build
npm run start
```

---

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx              # Root layout: nav + footer + WhatsApp flutuante
│   ├── page.tsx                # Home (Hero + Categorias + Catálogo + Preço + CTA)
│   ├── globals.css             # Identidade Kairós (paleta + utilitários premium)
│   ├── opengraph-image.tsx     # OG image da home (auto-gerada)
│   ├── apps/
│   │   ├── page.tsx            # Catálogo completo com filtro por categoria
│   │   └── [slug]/
│   │       ├── page.tsx        # Página individual de cada app
│   │       └── opengraph-image.tsx  # OG image por app
│   ├── robots.ts               # /robots.txt
│   └── sitemap.ts              # /sitemap.xml
├── components/
│   ├── nav.tsx                 # Nav com menu mobile
│   ├── footer.tsx              # Rodapé com redes sociais
│   ├── hero.tsx                # Hero com mosaico animado
│   ├── categories.tsx          # "Qual problema você resolve?"
│   ├── catalog.tsx             # Grid de apps na home
│   ├── app-card.tsx            # Card premium reutilizável
│   ├── pricing.tsx             # Seção de preço
│   ├── final-cta.tsx           # CTA WhatsApp no fim da home
│   ├── whatsapp-float.tsx      # Botão WhatsApp fixo
│   ├── button.tsx              # Button + LinkButton (variants)
│   ├── mockup-frame.tsx        # Frame "celular" para mockups
│   ├── screenshot.tsx          # Resolve SVG mockup ou imagem real
│   └── mockups.tsx             # 16 mockups SVG dos apps
└── lib/
    ├── site.config.ts          # ⭐ CONFIG CENTRAL (WhatsApp, redes, preço)
    ├── apps.config.ts          # ⭐ CATÁLOGO DE APPS (data-driven)
    ├── whatsapp.ts             # Gerador de link wa.me + mensagens
    ├── seo.ts                  # Metadata + Open Graph
    └── cn.ts                   # Helper de classes Tailwind
```

---

## ➕ Como adicionar um novo aplicativo

### 1. Adicione o app em `src/lib/apps.config.ts`

Edite o array `apps` (próximo do final do arquivo):

```ts
{
  slug: "oficina",                // vira /apps/oficina
  name: "Kairós Oficina",
  tagline: "Organize sua oficina em um só lugar.",
  description: "Aplicativo para oficinas mecânicas...",
  category: "oficina",            // precisa existir em `categories`
  target: "Oficinas mecânicas e funilarias.",
  features: [
    "Cadastro de clientes e veículos",
    "Ordem de serviço",
    "Controle de pagamentos",
  ],
  benefits: [
    "Menos papel",
    "Histórico organizado",
    "Atendimento mais rápido",
  ],
  howItWorks: [
    "Cadastre clientes",
    "Abra a ordem de serviço",
    "Acompanhe o status",
  ],
  status: "available",            // "available" | "beta" | "coming"
  highlight: true,                // aparece no hero mosaico
  price: "Consulte",              // ou "R$ 397/ano"
  url: "https://oficina.fbautomacao.space", // opcional
  screenshots: [
    { kind: "svg", component: "oficina", alt: "Dashboard" },
    { kind: "svg", component: "oficina-os", alt: "Ordem de serviço" },
  ],
  accent: { from: "from-orange-500", to: "to-amber-600", ring: "ring-orange-400/40" },
  icon: "🔧",
  seo: {
    title: "Kairós Oficina — Gestão para oficinas",
    description: "Sistema para oficinas mecânicas.",
    keywords: ["gestão oficina", "software oficina mecânica"],
  },
}
```

### 2. Categoria

Se for uma categoria nova, adicione em `categories`:

```ts
{
  slug: "oficina",
  nome: "Oficina",
  icon: "🔧",
  descricao: "Oficinas mecânicas, funilarias e prestadores de serviço.",
},
```

### 3. Mockup SVG (placeholder)

Em `src/components/mockups.tsx`, adicione um novo componente:

```tsx
export function OficinaMockup() {
  return (
    <svg viewBox="0 0 360 720" className="w-full h-full">
      {/* sua arte aqui */}
    </svg>
  );
}

// E registre no registry:
export const mockupRegistry: Record<string, React.FC> = {
  // ...
  oficina: OficinaMockup,
};
```

### 4. (Opcional) Substituir mockup por screenshot real

Coloque PNG/JPG em `public/apps/<slug>/01.png`, depois troque em `apps.config.ts`:

```ts
screenshots: [
  { kind: "image", src: "/apps/oficina/01.png", alt: "Dashboard" },
]
```

---

## 🔧 Configurações que você troca em **1 arquivo**

Edite `src/lib/site.config.ts`:

| Campo                | O que faz                                       |
| -------------------- | ----------------------------------------------- |
| `whatsapp.number`    | Número que recebe todas as conversas            |
| `whatsapp.defaultMessage` | Mensagem padrão enviada nos CTAs            |
| `social.instagram`   | Link do Instagram no rodapé                     |
| `social.facebook`    | Link do Facebook no rodapé                      |
| `social.youtube`     | Opcional                                        |
| `pricing.annual`     | Valor "R$ XXX / ano" mostrado no preço          |
| `pricing.benefits`   | Lista de benefícios da licença                  |
| `seo.siteUrl`        | URL canônica (mude quando publicar)             |
| `contact.email` / `phone` | Contato no rodapé                          |

Mensagens contextuais por intenção de WhatsApp ficam em `src/lib/whatsapp.ts`:

```ts
whatsappMessages.interesse("Kairós Oficina")
whatsappMessages.teste("Kairós Igreja")
whatsappMessages.orcamento("Kairós CRM")
```

---

## 🎨 Identidade visual

- **Fundo**: navy profundo `#04081a` com gradiente sutil + grid técnico
- **Primária**: azul tecnológico `#1e6dff`
- **Acento**: verde neon `#00ffa3`
- **Tipografia**: Geist Sans (via `next/font`)
- **Cards**: glass morphism (blur + borda translúcida)
- **Animações**: Framer Motion + `animate-float` no mosaico
- **Responsivo**: mobile-first; mosaico vira carrossel horizontal no celular

Para mudar a paleta, edite `src/app/globals.css` (seção `:root`).

---

## 📦 Build estático (PWA-ready)

```bash
npm run build
```

Gera 24 páginas estáticas:
- `/` (home)
- `/apps` (catálogo)
- `/apps/<slug>` × 8 (uma por app)
- `/opengraph-image` (OG da home)
- `/apps/<slug>/opengraph-image` × 8 (OG por app)
- `/robots.txt`, `/sitemap.xml`

---

## 🚢 Deploy no Dokploy (VPS)

A landing page é 100% estática (sem DB). Para deploy:

1. Suba o repo `kairos-apps/` para o GitHub
2. No Dokploy, crie um app **Node.js** ou use o template estático
3. Build command: `npm install && npm run build`
4. Start command: `npm run start`
5. Porta: `3000`
6. Configure o domínio `kairosapps.com.br` (ou wildcard) no Caddy
7. Após publicado, troque `seo.siteUrl` em `site.config.ts` e faça rebuild

---

## ✅ O que já está pronto

- ✅ Hero com mosaico animado e CTAs
- ✅ Seção "Qual problema você resolve?" (categorias)
- ✅ Catálogo premium de apps (data-driven)
- ✅ Página `/apps` com busca + filtro por categoria
- ✅ Página `/apps/[slug]` por app (hero, funcionalidades, "como funciona", galeria, preço, relacionados)
- ✅ Preço (licença anual configurável)
- ✅ WhatsApp flutuante + CTAs contextuais (interesse / teste / orçamento)
- ✅ Open Graph dinâmico por app (preview bonito em WhatsApp/Facebook/Telegram)
- ✅ SEO: title, description, keywords, sitemap.xml, robots.txt
- ✅ Mobile-first responsivo
- ✅ Dark theme premium (azul + verde neon)
- ✅ 16 mockups SVG (placeholders claros pra você trocar)

## 🔜 Próximos passos sugeridos

1. **Trocar mockups por screenshots reais** dos apps rodando (substitua em `apps.config.ts` apontando `screenshots.kind` para `"image"` e `src` para `/apps/<slug>/01.png`)
2. **Definir o número real do WhatsApp** em `site.config.ts`
3. **Definir valores de preço** (atualmente `"Consulte"`)
4. **Publicar** no Dokploy e atualizar `seo.siteUrl`
5. (Futuro) Adicionar `/painel` para gerenciar apps via banco de dados