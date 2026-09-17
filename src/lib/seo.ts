import type { Metadata } from "next";
import { siteConfig } from "./site.config";
import type { KairoApp } from "./apps.config";

const SITE_URL = siteConfig.seo.siteUrl;

function abs(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Metadata padrão do site (home).
 */
export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${siteConfig.name} — ${siteConfig.tagline}`,
      template: `%s · ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.seo.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: SITE_URL,
      siteName: siteConfig.name,
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
      images: [
        {
          url: abs("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
      images: [abs("/og/cover.png")],
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Metadata para página individual de um app.
 */
export function buildAppMetadata(app: KairoApp): Metadata {
  const title = app.seo?.title ?? `${app.name} — ${app.tagline}`;
  const description =
    app.seo?.description ??
    `${app.name}: ${app.description}`;
  const keywords = app.seo?.keywords ?? [];
  const url = abs(`/apps/${app.slug}`);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: abs(`/apps/${app.slug}/opengraph-image`),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [abs(`/og/${app.slug}.png`)],
    },
    robots: { index: true, follow: true },
  };
}