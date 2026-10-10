import { test, expect } from "@playwright/test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  SerialContents,
  ChapterNavigation,
} from "../components/SerialContents";
import { inCollection } from "../lib/story-categories";
import type { SerialStory } from "../lib/content";
const fixture: SerialStory = {
  slug: "test-only",
  title: { en: "Test", zh: "测试" },
  summary: { en: "Test", zh: "测试" },
  genre: "fantasy",
  genreName: { en: "Fantasy", zh: "奇幻" },
  art: "door",
  format: "serial",
  status: "ongoing",
  sample: true,
  chapters: [
    {
      slug: "arrival",
      title: { en: "Arrival", zh: "抵达" },
      paragraphs: { en: ["Test"], zh: ["测试"] },
    },
    {
      slug: "departure",
      title: { en: "Departure", zh: "启程" },
      paragraphs: { en: ["Test"], zh: ["测试"] },
    },
  ],
};
test("serial format, contents, and chapter boundaries", () => {
  expect(inCollection(fixture, "ongoing")).toBe(true);
  expect(inCollection(fixture, "short")).toBe(false);
  expect(inCollection({ ...fixture, status: "completed" }, "completed")).toBe(
    true,
  );
  expect(inCollection({ ...fixture, status: "paused" }, "paused")).toBe(true);
  const contents = renderToStaticMarkup(
    createElement(SerialContents, { story: fixture, locale: "zh" }),
  );
  expect(contents).toContain("/zh/stories/test-only/chapters/arrival");
  expect(contents).toContain("/zh/stories/test-only/chapters/departure");
  const first = renderToStaticMarkup(
    createElement(ChapterNavigation, {
      story: fixture,
      index: 0,
      locale: "zh",
    }),
  );
  expect(first).toContain("已经是第一章");
  expect(first).toContain("下一章");
  expect(first).toContain("返回目录");
  const last = renderToStaticMarkup(
    createElement(ChapterNavigation, {
      story: fixture,
      index: 1,
      locale: "zh",
    }),
  );
  expect(last).toContain("上一章");
  expect(last).toContain("已读到最新章节");
  expect(last).not.toContain("下一章");
  const end = renderToStaticMarkup(
    createElement(ChapterNavigation, {
      story: { ...fixture, status: "completed" },
      index: 1,
      locale: "zh",
    }),
  );
  expect(end).toContain("全书完");
});
