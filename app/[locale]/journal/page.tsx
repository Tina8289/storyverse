import { PageIntro, SampleNote, JourneyCTA } from "@/components/ui";
import { JournalList } from "@/components/JournalList";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const l = getLocale((await params).locale);
  return pageMetadata(
    l,
    "/journal",
    text(l, "Journal", "创作手记"),
    text(
      l,
      "Explore writing, worldbuilding, and translation in the StoryVerse journal. Practical notes on finding a voice and bringing imagined worlds to life.",
      "在 StoryVerse 创作手记中探索写作、世界构建和翻译，寻找自己的声音，让想象中的世界渐渐成形。",
    ),
  );
}
export default async function Journal({ params }: Props) {
  const locale = getLocale((await params).locale);
  return (
    <>
      <PageIntro
        eyebrow={text(locale, "The creative process", "创作的过程")}
        title={text(
          locale,
          "The story behind the story.",
          "故事背后，还有故事。",
        )}
        summary={text(
          locale,
          "Questions worth keeping. Ideas still taking shape. A quiet space to think about the craft of making worlds.",
          "值得留下的问题，尚在成形的想法。在这个安静的空间，一起思考如何创造世界。",
        )}
      />
      <section className="container journal-section">
        <SampleNote locale={locale} journal />
        <JournalList locale={locale} />
      </section>
      <JourneyCTA locale={locale} />
    </>
  );
}
