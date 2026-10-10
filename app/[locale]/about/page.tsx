import Image from "next/image";
import { PageIntro, ButtonLink, JsonLd } from "@/components/ui";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const l = getLocale((await params).locale);
  return pageMetadata(
    l,
    "/about",
    text(l, "About", "关于"),
    text(
      l,
      "StoryVerse is an independent original storytelling project, beginning in Chinese and growing across languages. Learn about the idea and values behind it.",
      "StoryVerse 是从中文出发、向不同语言生长的独立原创故事项目。了解它的初心、价值与未来方向。",
    ),
  );
}
export default async function About({ params }: Props) {
  const l = getLocale((await params).locale);
  const faqs = [
    {
      q: text(l, "What is StoryVerse?", "StoryVerse 是什么？"),
      a: text(
        l,
        "An independent home for original stories and the creative process behind them. The long-term vision is to let stories grow into characters, worlds, and new forms of storytelling.",
        "一个属于原创故事及其创作过程的独立空间。长远愿景是让故事逐渐发展为人物、世界，以及更多讲故事的形式。",
      ),
    },
    {
      q: text(l, "Where should I start?", "应该从哪里开始？"),
      a: text(
        l,
        "Visit Stories and choose a sample short. Each piece stands on its own, so there is no required reading order.",
        "从“故事”页面选择一篇示例短篇开始。每篇都可以独立阅读，没有固定顺序。",
      ),
    },
    {
      q: text(l, "Which languages are available?", "现在支持哪些语言？"),
      a: text(
        l,
        "The first edition is available in English and simplified Chinese. More languages can be added as reviewed translations become available.",
        "首版提供英文和简体中文。后续将在译文审核完成后逐步增加其他语言。",
      ),
    },
  ];
  return (
    <>
      <PageIntro
        eyebrow={text(l, "About StoryVerse", "关于 StoryVerse")}
        title={text(l, "An imagination needs a home.", "给想象一个家。")}
        summary={text(
          l,
          "A place for a creative voice to grow. From a first sentence in Chinese to stories that can find readers around the world.",
          "让创作的声音慢慢长大。从第一句中文开始，让故事有机会遇见世界各地的读者。",
        )}
      />
      <section className="container about-grid">
        <div className="about-art">
          <Image
            src="/art/storyverse-worlds.png"
            alt={text(
              l,
              "A path across a quiet landscape toward distant mountains",
              "安静的原野上，一条小路通往远山",
            )}
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            {text(l, "Build Worlds.", "让世界从故事开始。")}
          </p>
          <h2>
            {text(l, "Start small. Imagine far.", "从小处开始，向远处想象。")}
          </h2>
          <p>
            {text(
              l,
              "StoryVerse begins with a simple belief: an original story deserves the time and space to become itself. This is a place to explore characters, follow questions, and keep creating.",
              "StoryVerse 始于一个简单的信念：原创故事值得拥有时间与空间，长成自己的模样。这里可以探索人物、追问好奇，也可以持续创作。",
            )}
          </p>
          <p>
            {text(
              l,
              "The vision reaches beyond the page, toward translation, visual storytelling, and creative collaboration. For now, the focus is on a good place to read, and a thoughtful place to begin.",
              "愿景延伸到纸页之外：翻译、视觉叙事与创作合作。而眼下，我们专注于提供一个舒适的阅读空间，一个用心的起点。",
            )}
          </p>
          <ButtonLink href={`/${l}/stories`}>
            {text(l, "Enter the reading room", "走进故事阅览室")}
          </ButtonLink>
        </div>
      </section>
      <section className="container section values-grid">
        {[
          [
            text(l, "Originality first", "原创优先"),
            text(
              l,
              "A distinct voice matters more than following a trend.",
              "独特的声音，比追逐潮流更重要。",
            ),
          ],
          [
            text(l, "Across languages", "跨越语言"),
            text(
              l,
              "Carry the feeling of a story, as well as its words.",
              "传递文字，也传递故事的感受。",
            ),
          ],
          [
            text(l, "Room to grow", "留出成长空间"),
            text(
              l,
              "One chapter at a time. New possibilities when the story is ready.",
              "一章一章向前，在故事准备好时探索新的可能。",
            ),
          ],
        ].map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="reading faq section">
        <h2>{text(l, "A few things to know.", "你可能想知道。")}</h2>
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
