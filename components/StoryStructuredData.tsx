import type { Story, Chapter } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
export function StoryStructuredData({
  story,
  locale,
  chapter,
}: {
  story: Story;
  locale: Locale;
  chapter?: Chapter;
}) {
  if (story.sample) return null;
  const bookUrl = `${siteConfig.url}/${locale}/stories/${story.slug}`;
  const url = chapter ? `${bookUrl}/chapters/${chapter.slug}` : bookUrl;
  const book = {
    "@type": "Book",
    "@id": bookUrl,
    name: story.title[locale],
    url: bookUrl,
  };
  const data = {
    "@context": "https://schema.org",
    "@type": chapter ? "Chapter" : "Book",
    "@id": url,
    url,
    name: chapter ? chapter.title[locale] : story.title[locale],
    description: story.summary[locale],
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    genre: story.genreName[locale],
    author: story.author
      ? { "@type": "Person", name: story.author }
      : undefined,
    ...(chapter
      ? {
          isPartOf: book,
          position:
            story.format === "serial"
              ? story.chapters.indexOf(chapter) + 1
              : undefined,
        }
      : {
          hasPart:
            story.format === "serial"
              ? story.chapters.map((c, i) => ({
                  "@type": "Chapter",
                  name: c.title[locale],
                  position: i + 1,
                  url: `${bookUrl}/chapters/${c.slug}`,
                }))
              : undefined,
        }),
    isBasedOn: chapter?.sourceUrl ?? story.sourceUrl,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
