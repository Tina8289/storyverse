import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { storyLabel } from "@/lib/story-categories";
import type { Story } from "@/lib/content";
import { text, type Locale } from "@/lib/i18n";
export function StoryCard({ story, locale }: { story: Story; locale: Locale }) {
  return (
    <article className="story-card">
      <Link href={`/${locale}/stories/${story.slug}`}>
        <div className="story-cover">
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
            sizes="(max-width: 700px) 100vw, 33vw"
          />
          <span className="cover-label">{story.genreName[locale]}</span>
          <span className="cover-title">{story.title[locale]}</span>
        </div>
        <div className="card-meta">
          <span>{story.genreName[locale]}</span>
          <span>{storyLabel(story, locale)}</span>
          {story.sample ? <span>{text(locale, "Sample", "示例")}</span> : null}
          {story.format === "serial" ? (
            <span>
              {text(
                locale,
                `${story.chapters.length} chapters`,
                `${story.chapters.length} 章`,
              )}
            </span>
          ) : null}
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
