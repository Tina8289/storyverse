import { PageIntro, JourneyCTA, SampleNote } from "@/components/ui";
import { StoryLibrary } from "@/components/StoryLibrary";
import { stories } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const l = getLocale((await params).locale);
  return pageMetadata(
    l,
    "/stories",
    text(l, "Stories", "故事"),
    text(
      l,
      "Explore the StoryVerse reading room: fantasy, science fiction, and adventure. Start with a clearly labelled sample while original releases are in preparation.",
      "探索 StoryVerse 阅览室中的奇幻、科幻和冒险短篇。正式作品筹备期间，可先阅读明确标注的示例故事。",
    ),
  );
}
export default async function Stories({ params }: Props) {
  const locale = getLocale((await params).locale);
  return (
    <>
      <PageIntro
        eyebrow={text(locale, "The reading room", "故事阅览室")}
        title={text(
          locale,
          "Choose a world. Stay a while.",
          "选择一个世界，停留片刻。",
        )}
        summary={text(
          locale,
          "A door by the sea. A letter from tomorrow. A map with no edges. Follow your curiosity into a story.",
          "海边的一扇门，来自明天的一封信，没有边界的一张地图。跟随好奇心，走进故事。",
        )}
      />
      <div className="container">
        <SampleNote locale={locale} />
      </div>
      <StoryLibrary stories={stories} locale={locale} />
      <JourneyCTA locale={locale} />
    </>
  );
}
