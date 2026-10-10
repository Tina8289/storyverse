import { stories, chapterLocales } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { locales, text } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "../globals.css";
import "../home.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "StoryVerse · Build Worlds.", template: "%s · StoryVerse" },
  icons: { icon: "/icon.svg" },
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = getLocale((await params).locale);
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <body>
        <a className="skip-link" href="#main">
          {text(locale, "Skip to content", "跳转到正文")}
        </a>
        <Header
          locale={locale}
          unavailable={stories.flatMap((s) =>
            s.format === "serial"
              ? s.chapters
                  .filter(
                    (c) =>
                      !chapterLocales(s, c).includes(
                        locale === "en" ? "zh" : "en",
                      ),
                  )
                  .map((c) => `/${locale}/stories/${s.slug}/chapters/${c.slug}`)
              : [],
          )}
        />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
