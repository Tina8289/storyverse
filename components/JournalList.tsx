import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { journals } from "@/lib/content";
import { text, type Locale } from "@/lib/i18n";
export function JournalList({ locale }: { locale: Locale }) {
  return (
    <div className="journal-list">
      {journals.map((entry) => (
        <article key={entry.slug}>
          <Link href={`/${locale}/journal/${entry.slug}`}>
            <div className="journal-category">
              <span>{entry.category[locale]}</span>
              <small>{text(locale, "Editorial sample", "编辑示例")}</small>
            </div>
            <div>
              <h3>{entry.title[locale]}</h3>
              <p>{entry.summary[locale]}</p>
            </div>
            <ArrowUpRight size={23} aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  );
}
