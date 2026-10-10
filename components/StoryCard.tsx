import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Story } from "@/lib/content";
import { text, type Locale } from "@/lib/i18n";
export function StoryCard({ story, locale }: { story: Story; locale: Locale }) {
  return (
    <article className="story-card">
      <Link href={`/${locale}/stories/${story.slug}`}>
        <div className="story-cover">
          <Image
            src={`/art/${story.art}.svg`}
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, 33vw"
          />
          <span className="cover-label">{story.genreName[locale]}</span>
          <span className="cover-title">{story.title[locale]}</span>
        </div>
        <div className="card-meta">
          <span>{story.genreName[locale]}</span>
          <span>{text(locale, "Sample short", "示例短篇")}</span>
        </div>
        <h3>
          {story.title[locale]}
          <ArrowUpRight size={19} aria-hidden="true" />
        </h3>
        <p>{story.summary[locale]}</p>
      </Link>
    </article>
  );
}
