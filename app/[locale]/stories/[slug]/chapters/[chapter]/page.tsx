import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { SampleNote } from "@/components/ui";
import { ChapterNavigation } from "@/components/SerialContents";
type Props = {
  params: Promise<{ locale: string; slug: string; chapter: string }>;
};
function findChapter(slug: string, chapter: string) {
  const story = stories.find((s) => s.slug === slug);
  if (!story || story.format !== "serial") notFound();
  const index = story.chapters.findIndex((c) => c.slug === chapter);
  if (index < 0) notFound();
  return { story, index, entry: story.chapters[index] };
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug, chapter } = await params;
  const l = getLocale(locale);
  const { story, entry } = findChapter(slug, chapter);
  return pageMetadata(
    l,
    `/stories/${slug}/chapters/${chapter}`,
    `${entry.title[l]} — ${story.title[l]}`,
    story.summary[l],
    story.sample,
  );
}
export default async function ChapterPage({ params }: Props) {
  const { locale, slug, chapter } = await params;
  const l = getLocale(locale);
  const { story, index, entry } = findChapter(slug, chapter);
  return (
    <article>
      <header className="reading reader-heading">
        <Link className="back-link" href={`/${l}/stories/${slug}`}>
          ← {story.title[l]}
        </Link>
        <p className="eyebrow">
          {text(l, `Chapter ${index + 1}`, `第 ${index + 1} 章`)}
        </p>
        <h1>{entry.title[l]}</h1>
        {story.sample ? <SampleNote locale={l} /> : null}
      </header>
      <div className="reading prose journal-prose">
        {entry.paragraphs[l].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="reading reader-next">
        <ChapterNavigation story={story} index={index} locale={l} />
      </div>
    </article>
  );
}
