import { StoryStructuredData } from "@/components/StoryStructuredData";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  stories,
  availableIn,
  localizedStories,
  chapterLocales,
} from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { SampleNote } from "@/components/ui";
import { ChapterNavigation } from "@/components/SerialContents";
type Props = {
  params: Promise<{ locale: string; slug: string; chapter: string }>;
};
function findChapter(slug: string, chapter: string, locale: "en" | "zh") {
  const story = localizedStories(locale).find((s) => s.slug === slug);
  if (!story || !availableIn(story, locale) || story.format !== "serial")
    notFound();
  const index = story.chapters.findIndex((c) => c.slug === chapter);
  if (index < 0) notFound();
  return { story, index, entry: story.chapters[index] };
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug, chapter } = await params;
  const l = getLocale(locale);
  const { story, entry } = findChapter(slug, chapter, l);
  return pageMetadata(
    l,
    `/stories/${slug}/chapters/${chapter}`,
    `${entry.title[l]} — ${story.title[l]}`,
    `${entry.title[l]}，${story.title[l]}。${story.summary[l]}`,
    story.sample,
    chapterLocales(
      stories.find((s) => s.slug === slug)!,
      entry,
    ),
  );
}
export default async function ChapterPage({ params }: Props) {
  const { locale, slug, chapter } = await params;
  const l = getLocale(locale);
  const { story, index, entry } = findChapter(slug, chapter, l);
  return (
    <article>
      <StoryStructuredData story={story} locale={l} chapter={entry} />
      <header className="reading reader-heading">
        <Link className="back-link" href={`/${l}/stories/${slug}`}>
          ← {story.title[l]}
        </Link>
        <p className="eyebrow">
          {text(l, `Chapter ${index + 1}`, `第 ${index + 1} 章`)}
        </p>
        <h1>{entry.title[l]}</h1>
        {story.author ? (
          <p>{text(l, `By ${story.author}`, `作者：${story.author}`)}</p>
        ) : null}
        {story.sample ? <SampleNote locale={l} /> : null}
      </header>
      <div className="reading prose journal-prose">
        {entry.paragraphs[l].map((p, i) => (
          <p key={i} style={{ whiteSpace: "pre-line" }}>
            {p}
          </p>
        ))}
      </div>
      <div className="reading reader-next">
        {entry.sourceUrl ? (
          <p>
            <a className="text-link" href={entry.sourceUrl}>
              {text(l, "Read the Chinese source on Zhihu ↗", "本章知乎原文 ↗")}
            </a>
          </p>
        ) : null}
        {story.translationTotal ? (
          <p>
            Translation in progress · {story.chapters.length} of{" "}
            {story.translationTotal} chapters available.
          </p>
        ) : null}
        <ChapterNavigation story={story} index={index} locale={l} />
      </div>
    </article>
  );
}
