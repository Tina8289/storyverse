import type { Metadata } from "next";
import { siteConfig } from "./site";
import type { Locale } from "./i18n";
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  sample = false,
): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/en${path}`,
        "zh-CN": `${siteConfig.url}/zh${path}`,
        "x-default": `${siteConfig.url}/en${path}`,
      },
    },
    openGraph: {
      title: `${title} · StoryVerse`,
      description,
      url,
      siteName: "StoryVerse",
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      images: [
        {
          url: "/og",
          width: 1200,
          height: 630,
          alt: "StoryVerse — Build Worlds.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · StoryVerse`,
      description,
      images: ["/og"],
    },
    robots: sample ? { index: false, follow: true } : undefined,
  };
}
