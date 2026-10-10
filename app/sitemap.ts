import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales, navigation } from "@/lib/i18n";
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    navigation.map((item) => ({
      url: `${siteConfig.url}/${locale}${item.path}`,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en${item.path}`,
          "zh-CN": `${siteConfig.url}/zh${item.path}`,
        },
      },
    })),
  );
}
