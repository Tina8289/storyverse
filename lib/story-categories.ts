import type { Story } from "./content";
import { text, type Locale } from "./i18n";
export const collections = [
  "all",
  "short",
  "ongoing",
  "completed",
  "paused",
] as const;
export type Collection = (typeof collections)[number];
export function collectionLabel(c: Collection, l: Locale) {
  const labels = {
    all: ["All stories", "全部故事"],
    short: ["Short stories", "独立短篇"],
    ongoing: ["Ongoing serials", "连载中"],
    completed: ["Completed serials", "已完结长篇"],
    paused: ["On hiatus", "暂时停更"],
  };
  return text(l, labels[c][0], labels[c][1]);
}
export function inCollection(story: Story, collection: Collection) {
  return (
    collection === "all" ||
    (collection === "short"
      ? story.format === "short"
      : story.format === "serial" && story.status === collection)
  );
}
export function storyLabel(story: Story, locale: Locale) {
  return collectionLabel(
    story.format === "short" ? "short" : story.status,
    locale,
  );
}
export function parseCollection(value?: string): Collection {
  return collections.includes(value as Collection)
    ? (value as Collection)
    : "all";
}
export const genres = [
  { value: "crime", en: "Crime & mystery", zh: "刑侦悬疑" },
  { value: "fantasy", en: "Fantasy", zh: "奇幻" },
  { value: "science-fiction", en: "Science fiction", zh: "科幻" },
  { value: "adventure", en: "Adventure", zh: "冒险" },
  { value: "coming-of-age", en: "Coming of age", zh: "青春成长" },
  { value: "slice-of-life", en: "Everyday & healing", zh: "日常治愈" },
];
