import { Hero } from "@/components/Hero";
import { StoryCard } from "@/components/StoryCard";
import { JournalList } from "@/components/JournalList";
import { SectionHeading, JourneyCTA, JsonLd } from "@/components/ui";
import { stories } from "@/lib/content";
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
    text(locale, "Build Worlds.", "让世界从故事开始"),
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
      <section className="container section">
        <SectionHeading
          eyebrow={text(locale, "The reading room", "故事阅览室")}
          title={text(
            locale,
            "A world for every wonder.",
            "每一份好奇，都有一个世界。",
          )}
          href={`/${locale}/stories`}
          linkText={text(locale, "All stories", "全部故事")}
        />
        <p className="section-note">
          {text(
            locale,
            "A first look at the reading experience. These short stories are illustrative samples.",
            "先体验一段阅读时光。以下短篇均为网站展示示例。",
          )}
        </p>
        <div className="grid-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} locale={locale} />
          ))}
        </div>
      </section>
      <section className="manifesto">
        <div className="container manifesto-inner">
          <p className="eyebrow">
            {text(locale, "Why we are here", "为什么出发")}
          </p>
          <h2>
            {text(
              locale,
              "Stories begin with one voice.",
              "故事从一个声音开始。",
            )}
            <br />
            <span>
              {text(
                locale,
                "They grow when we share them.",
                "在分享中，慢慢长大。",
              )}
            </span>
          </h2>
          <p>
            {text(
              locale,
              "StoryVerse is a home for original imagination. A place to write in Chinese, reach across languages, and let a story become something bigger, one chapter at a time.",
              "StoryVerse 为原创想象提供一个家。从中文创作出发，跨越语言，让故事一章一章生长，逐渐拥有更广阔的可能。",
            )}
          </p>
        </div>
      </section>
      <section className="container section">
        <SectionHeading
          eyebrow={text(locale, "Notes from the journey", "创作路上的笔记")}
          title={text(locale, "Behind the words.", "文字背后的世界。")}
          href={`/${locale}/journal`}
          linkText={text(locale, "Visit the journal", "全部手记")}
        />
        <JournalList locale={locale} />
      </section>
      <JourneyCTA locale={locale} />
    </>
  );
}
