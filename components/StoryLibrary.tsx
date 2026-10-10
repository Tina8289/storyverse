"use client";
import { useState } from "react";
import type { Story } from "@/lib/content";
import { text, type Locale } from "@/lib/i18n";
import { StoryCard } from "./StoryCard";
export function StoryLibrary({
  stories,
  locale,
}: {
  stories: Story[];
  locale: Locale;
}) {
  const [genre, setGenre] = useState("all");
  const filtered =
    genre === "all"
      ? stories
      : stories.filter((story) => story.genre === genre);
  const filters = [
    { value: "all", label: text(locale, "All stories", "全部故事") },
    ...stories.map((story) => ({
      value: story.genre,
      label: story.genreName[locale],
    })),
  ];
  return (
    <section className="container library">
      <div
        className="filter-bar"
        role="group"
        aria-label={text(locale, "Filter by genre", "按类型筛选")}
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setGenre(filter.value)}
            aria-pressed={genre === filter.value}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">
        {text(
          locale,
          `${filtered.length} sample ${filtered.length === 1 ? "story" : "stories"}`,
          `${filtered.length} 篇示例故事`,
        )}
      </p>
      <div className="grid-3">
        {filtered.map((story) => (
          <StoryCard key={story.slug} story={story} locale={locale} />
        ))}
      </div>
    </section>
  );
}
