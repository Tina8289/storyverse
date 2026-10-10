"use client";
import { useState } from "react";
import type { Story } from "@/lib/content";
import { text, type Locale } from "@/lib/i18n";
import { StoryCard } from "./StoryCard";
export function StoryLibrary({
  stories,
  locale,
  initialGenre = "all",
}: {
  stories: Story[];
  locale: Locale;
  initialGenre?: string;
}) {
  const [genre, setGenre] = useState(initialGenre);
  const [query, setQuery] = useState("");
  const filtered = stories.filter(
    (story) =>
      (genre === "all" || story.genre === genre) &&
      `${story.title[locale]} ${story.summary[locale]}`
        .toLocaleLowerCase()
        .includes(query.trim().toLocaleLowerCase()),
  );
  const filters = [
    { value: "all", label: text(locale, "All stories", "全部故事") },
    ...stories.map((story) => ({
      value: story.genre,
      label: story.genreName[locale],
    })),
  ];
  return (
    <section className="container library">
      <div className="story-search-field">
        <label htmlFor="story-search">
          {text(locale, "Search stories", "搜索故事")}
        </label>
        <input
          id="story-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={text(
            locale,
            "Search by title or a little curiosity…",
            "输入故事名称，或一点好奇……",
          )}
        />
      </div>
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
      {filtered.length === 0 ? (
        <p className="search-empty">
          {text(
            locale,
            "No stories found. Try another word or choose All stories.",
            "暂时没有找到故事。试试其他词语，或选择全部故事。",
          )}
        </p>
      ) : null}
      <div className="grid-3">
        {filtered.map((story) => (
          <StoryCard key={story.slug} story={story} locale={locale} />
        ))}
      </div>
    </section>
  );
}
