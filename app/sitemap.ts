import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales, navigation } from "@/lib/i18n";
import { stories, chapterLocales } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    ...navigation.map((item) => ({ path: item.path, languages: [...locales] })),
    ...stories
      .filter((s) => !s.sample)
      .flatMap((s) => [
        {
          path: `/stories/${s.slug}`,
          languages: s.availableLocales ?? [...locales],
        },
        ...(s.format === "serial"
          ? s.chapters.map((c) => ({
              path: `/stories/${s.slug}/chapters/${c.slug}`,
              languages: chapterLocales(s, c),
            }))
          : []),
      ]),
  ];
  return entries.flatMap(({ path, languages }) =>
    languages.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(
          languages.map((l) => [
            l === "zh" ? "zh-CN" : l,
            `${siteConfig.url}/${l}${path}`,
          ]),
        ),
      },
    })),
  );
}
