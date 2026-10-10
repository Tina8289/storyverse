import { StoryStructuredData } from "@/components/StoryStructuredData";
import { SerialContents } from "@/components/SerialContents";
import { storyLabel } from "@/lib/story-categories";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  stories,
  availableIn,
  localizedStories as getLocalizedStories,
} from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { SampleNote, ButtonLink } from "@/components/ui";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const l = getLocale(locale);
  const s = stories.find((s) => s.slug === slug);
  if (!s || !availableIn(s, l)) notFound();
  return pageMetadata(
    l,
    `/stories/${slug}`,
    s.title[l],
    s.summary[l],
    s.sample,
    s.availableLocales,
  );
}
export default async function Story({ params }: Props) {
  const { locale, slug } = await params;
  const l = getLocale(locale);
  const localizedStories = getLocalizedStories(l);
  const index = localizedStories.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();
  const story = localizedStories[index];
  const next = localizedStories[(index + 1) % localizedStories.length];
  return (
    <>
      <article className="story-reader">
        <StoryStructuredData story={story} locale={l} />
        <header className="reading reader-heading">
          <Link className="back-link" href={`/${l}/stories`}>
            {text(l, "← All stories", "← 全部故事")}
          </Link>
          <p className="eyebrow">
            {story.genreName[l]} · {storyLabel(story, l)}
          </p>
          <h1>{story.title[l]}</h1>
          <p className="intro-summary">{story.summary[l]}</p>
          {story.author ? (
            <p>
              {text(
                l,
                `By ${story.author} · English translation`,
                `作者：${story.author} · 中文原文`,
              )}
            </p>
          ) : null}
          {story.translationTotal && story.format === "serial" ? (
            <p className="sample-note">
              Translation in progress · {story.chapters.length} of{" "}
              {story.translationTotal} chapters available. The Chinese original
              is complete.
            </p>
          ) : null}
          {story.sourceUrl ? (
            <a className="text-link" href={story.sourceUrl}>
              {text(l, "Original on Zhihu ↗", "知乎原作 ↗")}
            </a>
          ) : null}
          {story.sample ? <SampleNote locale={l} /> : null}
          {story.format === "short" ? (
            <a className="text-link" href="#story-text">
              {text(l, "Begin reading ↓", "开始阅读 ↓")}
            </a>
          ) : null}
        </header>
        <div className="container reader-art">
          <Image
            src={
              story.art.startsWith("/")
                ? story.art
                : story.art === "door"
                  ? "/art/storyverse-hero.png"
                  : "/art/storyverse-worlds.png"
            }
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        {story.format === "serial" ? (
          <SerialContents story={story} locale={l} />
        ) : (
          <div id="story-text" className="reading prose">
            <p className="eyebrow">
              {text(l, "A short story", "一段短篇故事")}
            </p>
            {story.paragraphs[l].map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="end-mark" aria-label={text(l, "End", "全文完")}>
              ✦
            </div>
          </div>
        )}
      </article>
      <section className="reading reader-next">
        <p className="eyebrow">
          {text(l, "Another world awaits", "还有一个世界在等你")}
        </p>
        <h2>{next.title[l]}</h2>
        <p>{next.summary[l]}</p>
        <ButtonLink href={`/${l}/stories/${next.slug}`}>
          {text(l, "Read the next story", "阅读下一篇")}
        </ButtonLink>
      </section>
    </>
  );
}
