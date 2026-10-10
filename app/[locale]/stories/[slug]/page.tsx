import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/lib/content";
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
  if (!s) notFound();
  return pageMetadata(l, `/stories/${slug}`, s.title[l], s.summary[l], true);
}
export default async function Story({ params }: Props) {
  const { locale, slug } = await params;
  const l = getLocale(locale);
  const index = stories.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();
  const story = stories[index];
  const next = stories[(index + 1) % stories.length];
  return (
    <>
      <article className="story-reader">
        <header className="reading reader-heading">
          <Link className="back-link" href={`/${l}/stories`}>
            {text(l, "← All stories", "← 全部故事")}
          </Link>
          <p className="eyebrow">
            {story.genreName[l]} · {text(l, "Sample short", "示例短篇")}
          </p>
          <h1>{story.title[l]}</h1>
          <p className="intro-summary">{story.summary[l]}</p>
          <SampleNote locale={l} />
          <a className="text-link" href="#story-text">
            {text(l, "Begin reading ↓", "开始阅读 ↓")}
          </a>
        </header>
        <div className="container reader-art">
          <Image
            src={
              story.art === "door"
                ? "/art/storyverse-hero.png"
                : "/art/storyverse-worlds.png"
            }
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div id="story-text" className="reading prose">
          <p className="eyebrow">{text(l, "A short story", "一段短篇故事")}</p>
          {story.paragraphs[l].map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="end-mark" aria-label={text(l, "End", "全文完")}>
            ✦
          </div>
        </div>
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
