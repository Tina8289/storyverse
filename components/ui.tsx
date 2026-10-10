import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { text, type Locale } from "@/lib/i18n";
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "secondary" : "primary"}`}
      href={href}
    >
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  href,
  linkText,
}: {
  eyebrow?: string;
  title: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {href ? (
        <Link className="text-link" href={href}>
          {linkText}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  summary,
}: {
  eyebrow: string;
  title: string;
  summary: string;
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-summary">{summary}</p>
    </section>
  );
}
export function JourneyCTA({ locale }: { locale: Locale }) {
  return (
    <section className="container journey-cta">
      <div>
        <p className="eyebrow">
          {text(locale, "Between the chapters", "在篇章之间")}
        </p>
        <h2>
          {text(
            locale,
            "Every world starts somewhere.",
            "每个世界，都有一个起点。",
          )}
        </h2>
        <p>
          {text(
            locale,
            "Step behind the stories. Explore the questions, experiments, and small discoveries of writing.",
            "走进故事背后，看看写作中的问题、尝试与小小发现。",
          )}
        </p>
      </div>
      <ButtonLink href={`/${locale}/journal`} secondary>
        {text(locale, "Explore the journal", "阅读创作手记")}
      </ButtonLink>
    </section>
  );
}
export function SampleNote({
  locale,
  journal = false,
}: {
  locale: Locale;
  journal?: boolean;
}) {
  return (
    <p className="sample-note">
      {journal
        ? text(
            locale,
            "Editorial sample · An illustrative writing note, not a personal diary.",
            "编辑示例 · 用于展示的写作笔记，并非创作者的个人日记。",
          )
        : text(
            locale,
            "Sample story · A short demonstration written for this website. Original releases are still to come.",
            "示例故事 · 为展示网站阅读体验而编写的短篇，正式原创作品尚待发布。",
          )}
    </p>
  );
}
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
