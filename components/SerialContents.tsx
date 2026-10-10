import Link from "next/link";
import type { SerialStory } from "@/lib/content";
import { text, type Locale } from "@/lib/i18n";
import { ButtonLink } from "./ui";
export function SerialContents({
  story,
  locale: l,
}: {
  story: SerialStory;
  locale: Locale;
}) {
  const first = story.chapters[0];
  const latest = story.chapters.at(-1);
  const base = `/${l}/stories/${story.slug}`;
  return (
    <section className="reading serial-contents">
      <div className="serial-actions">
        {first ? (
          <ButtonLink href={`${base}/chapters/${first.slug}`}>
            {text(l, "Start chapter one", "从第一章开始")}
          </ButtonLink>
        ) : null}
        {latest && latest !== first ? (
          <Link className="text-link" href={`${base}/chapters/${latest.slug}`}>
            {text(l, "Latest chapter", "最新章节")}：{latest.title[l]}
          </Link>
        ) : null}
      </div>
      <h2>
        {text(l, "Chapter list", "章节目录")}{" "}
        <small>
          {text(
            l,
            `${story.chapters.length} chapters`,
            `${story.chapters.length} 章`,
          )}
        </small>
      </h2>
      {story.chapters.length ? (
        <ol>
          {story.chapters.map((chapter, i) => (
            <li key={chapter.slug}>
              <Link href={`${base}/chapters/${chapter.slug}`}>
                <span>{text(l, `Chapter ${i + 1}`, `第 ${i + 1} 章`)}</span>
                <strong>{chapter.title[l]}</strong>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p>{text(l, "The first chapter is on its way.", "第一章尚待发布。")}</p>
      )}
    </section>
  );
}
export function ChapterNavigation({
  story,
  index,
  locale: l,
}: {
  story: SerialStory;
  index: number;
  locale: Locale;
}) {
  const base = `/${l}/stories/${story.slug}`;
  const previous = story.chapters[index - 1];
  const next = story.chapters[index + 1];
  return (
    <nav
      className="chapter-navigation"
      aria-label={text(l, "Chapter navigation", "章节导航")}
    >
      {previous ? (
        <Link href={`${base}/chapters/${previous.slug}`}>
          {text(l, "← Previous chapter", "← 上一章")}
        </Link>
      ) : (
        <span>{text(l, "First chapter", "已经是第一章")}</span>
      )}
      <Link href={base}>{text(l, "Chapter list", "返回目录")}</Link>
      {next ? (
        <Link href={`${base}/chapters/${next.slug}`}>
          {text(l, "Next chapter →", "下一章 →")}
        </Link>
      ) : (
        <span>
          {text(
            l,
            story.status === "completed" ? "The end" : "Latest chapter",
            story.status === "completed" ? "全书完" : "已读到最新章节",
          )}
        </span>
      )}
    </nav>
  );
}
