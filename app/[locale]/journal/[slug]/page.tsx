import Link from "next/link";
import { notFound } from "next/navigation";
import { journals } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { SampleNote, ButtonLink } from "@/components/ui";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return journals.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const l = getLocale(locale);
  const s = journals.find((s) => s.slug === slug);
  if (!s) notFound();
  return pageMetadata(l, `/journal/${slug}`, s.title[l], s.summary[l], true);
}
export default async function JournalEntry({ params }: Props) {
  const { locale, slug } = await params;
  const l = getLocale(locale);
  const index = journals.findIndex((s) => s.slug === slug);
  if (index < 0) notFound();
  const entry = journals[index];
  const next = journals[(index + 1) % journals.length];
  return (
    <>
      <article>
        <header className="reading reader-heading">
          <Link className="back-link" href={`/${l}/journal`}>
            {text(l, "← All journal notes", "← 全部创作手记")}
          </Link>
          <p className="eyebrow">{entry.category[l]}</p>
          <h1>{entry.title[l]}</h1>
          <p className="intro-summary">{entry.summary[l]}</p>
          <SampleNote locale={l} journal />
        </header>
        <div className="reading prose journal-prose">
          {entry.paragraphs[l].map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </article>
      <section className="reading reader-next">
        <p className="eyebrow">{text(l, "Keep exploring", "继续探索")}</p>
        <h2>{next.title[l]}</h2>
        <ButtonLink href={`/${l}/journal/${next.slug}`}>
          {text(l, "Read the next note", "阅读下一篇手记")}
        </ButtonLink>
      </section>
    </>
  );
}
