import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/ui";
import {
  Inspiration,
  FeaturedStory,
  WorldSeries,
  AuthorIntro,
  CreativeJourney,
  JourneyBanner,
} from "@/components/HomeSections";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const locale = getLocale((await params).locale);
  return pageMetadata(
    locale,
    "",
    text(locale, "StoryVerse — Build Worlds.", "StoryVerse — 让世界从故事开始"),
    text(
      locale,
      "StoryVerse is an independent home for original stories, imagined worlds, and the creative journey. Explore stories and writing notes in English and Chinese.",
      "StoryVerse 是原创故事、想象世界与创作过程的独立空间。探索中英文故事与写作手记。",
    ),
  );
}
export default async function Home({ params }: Props) {
  const locale = getLocale((await params).locale);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "StoryVerse",
          url: `${siteConfig.url}/${locale}`,
          inLanguage: locale === "zh" ? "zh-CN" : "en",
          description: text(
            locale,
            "An independent platform for original stories and creative journals.",
            "原创故事与创作手记的独立平台。",
          ),
        }}
      />
      <Hero locale={locale} />
      <div id="discover" className="home-surface">
        <div className="container home-content">
          <Inspiration locale={locale} />
          <FeaturedStory locale={locale} />
          <WorldSeries locale={locale} />
          <AuthorIntro locale={locale} />
          <CreativeJourney locale={locale} />
          <JourneyBanner locale={locale} />
        </div>
      </div>
    </>
  );
}
