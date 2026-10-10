"use client";
import Link from "next/link";
import { useState } from "react";
import type { Story } from "@/lib/content";
import { text, type Locale } from "@/lib/i18n";
import {
  collectionLabel,
  inCollection,
  genres,
  type Collection,
} from "@/lib/story-categories";
import { StoryCard } from "./StoryCard";
export function StoryLibrary({
  stories,
  locale,
  initialGenre = "all",
  collection = "all",
}: {
  stories: Story[];
  locale: Locale;
  initialGenre?: string;
  collection?: Collection;
}) {
  const [genre, setGenre] = useState(initialGenre);
  const [query, setQuery] = useState("");
  const match = (story: Story) =>
    inCollection(story, collection) &&
    (genre === "all" || story.genre === genre) &&
    `${story.title[locale]} ${story.summary[locale]}`
      .toLocaleLowerCase()
      .includes(query.trim().toLocaleLowerCase());
  const published = stories.filter((s) => !s.sample && match(s));
  const samples = stories.filter((s) => s.sample && match(s));
  const visibleCollections: Collection[] = [
    "all",
    "short",
    "ongoing",
    "completed",
  ];
  if (
    stories.some((s) => s.format === "serial" && s.status === "paused") ||
    collection === "paused"
  )
    visibleCollections.push("paused");
  return (
    <section className="container library">
      <nav
        className="story-collections"
        aria-label={text(locale, "Story format", "作品分类")}
      >
        {visibleCollections.map((c) => (
          <Link
            key={c}
            href={`/${locale}/stories?collection=${c}${genre === "all" ? "" : `&genre=${genre}`}`}
            aria-current={collection === c ? "page" : undefined}
          >
            {collectionLabel(c, locale)}
            <span>
              {stories.filter((s) => !s.sample && inCollection(s, c)).length}
            </span>
          </Link>
        ))}
      </nav>
      <p className="collection-description">
        {collection === "short"
          ? text(
              locale,
              "Complete stories to read in one sitting.",
              "一篇完整的故事，打开即可阅读全文。",
            )
          : collection === "ongoing"
            ? text(
                locale,
                "Follow a story as new chapters arrive.",
                "按章节持续更新，跟随故事一起成长。",
              )
            : collection === "completed"
              ? text(
                  locale,
                  "Finished multi-chapter works, from the first chapter to the last.",
                  "已经完结的多章节作品，从第一章读到结局。",
                )
              : text(
                  locale,
                  "Choose a reading format, then explore by genre.",
                  "先选择阅读形式，再按喜欢的题材寻找故事。",
                )}
      </p>
      <div className="story-search-field">
        <label htmlFor="story-search">
          {text(locale, "Search stories", "搜索故事")}
        </label>
        <input
          id="story-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
        aria-label={text(locale, "Filter by genre", "按题材筛选")}
      >
        {[{ value: "all", en: "All genres", zh: "全部题材" }, ...genres].map(
          (f) => (
            <button
              key={f.value}
              onClick={() => setGenre(f.value)}
              aria-pressed={genre === f.value}
            >
              {f[locale]}
            </button>
          ),
        )}
      </div>
      <p className="results-count" aria-live="polite">
        {text(
          locale,
          `${published.length} published works · ${samples.length} samples`,
          `${published.length} 部正式作品 · ${samples.length} 篇示例`,
        )}
      </p>
      {published.length ? (
        <div className="grid-3">
          {published.map((s) => (
            <StoryCard key={s.slug} story={s} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="collection-empty">
          <h2>
            {text(
              locale,
              query || genre !== "all"
                ? "No matching works yet"
                : "Stories are on their way",
              query || genre !== "all"
                ? "暂时没有匹配的正式作品"
                : "故事，即将与你相遇",
            )}
          </h2>
          <p>
            {text(
              locale,
              query || genre !== "all"
                ? "Try another word or choose All genres."
                : "New works will appear here when they are published.",
              query || genre !== "all"
                ? "可以换个关键词，或选择全部题材。"
                : "正式作品发布后，将在这里展示。",
            )}
          </p>
        </div>
      )}
      {samples.length ? (
        <section className="sample-library">
          <h2>{text(locale, "Explore sample stories", "先体验示例故事")}</h2>
          <p>
            {text(
              locale,
              "Website demonstrations, separate from the author’s published works.",
              "以下内容用于展示阅读体验，不是作者正式发布的作品。",
            )}
          </p>
          <div className="grid-3">
            {samples.map((s) => (
              <StoryCard key={s.slug} story={s} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}
      {query && published.length + samples.length === 0 ? (
        <p className="search-empty">
          {text(
            locale,
            "No stories found. Try another word.",
            "暂时没有找到故事，试试其他词语。",
          )}
        </p>
      ) : null}
    </section>
  );
}
