import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales, navigation } from "@/lib/i18n";
import { stories } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...navigation.map((item) => item.path),
    ...stories
      .filter((story) => !story.sample)
      .flatMap((story) => [
        `/stories/${story.slug}`,
        ...(story.format === "serial"
          ? story.chapters.map(
              (chapter) => `/stories/${story.slug}/chapters/${chapter.slug}`,
            )
          : []),
      ]),
  ];
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en${path}`,
          "zh-CN": `${siteConfig.url}/zh${path}`,
        },
      },
    })),
  );
}
