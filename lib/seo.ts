import type { Metadata } from "next";
import { siteConfig } from "./site";
import type { Locale } from "./i18n";
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  sample = false,
  availableLocales: Locale[] = ["en", "zh"],
): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          availableLocales.map((l) => [
            l === "zh" ? "zh-CN" : l,
            `${siteConfig.url}/${l}${path}`,
          ]),
        ),
        "x-default": `${siteConfig.url}/${availableLocales[0]}${path}`,
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
