import { PageIntro, JourneyCTA } from "@/components/ui";
import { StoryLibrary } from "@/components/StoryLibrary";
import { parseCollection, genres } from "@/lib/story-categories";
import { stories } from "@/lib/content";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ genre?: string; collection?: string }>;
};
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
export default async function Stories({ params, searchParams }: Props) {
  const locale = getLocale((await params).locale);
  const { genre: requestedGenre, collection: requestedCollection } =
    await searchParams;
  const collection = parseCollection(requestedCollection);
  const genre = genres.some((genre) => genre.value === requestedGenre)
    ? requestedGenre
    : "all";
  return (
    <>
      <PageIntro
        eyebrow={text(locale, "The reading room", "故事阅览室")}
        title={text(
          locale,
          "A short escape. A longer journey.",
          "一篇短故事，一段长旅程。",
        )}
        summary={text(
          locale,
          "Read an independent short, follow an ongoing serial, or explore a completed multi-chapter work.",
          "读一篇独立短篇，追一部连载，或从头读完一部长篇。选择适合此刻的阅读方式。",
        )}
      />
      <StoryLibrary
        key={`${collection}:${genre}`}
        stories={stories}
        locale={locale}
        initialGenre={genre}
        collection={collection}
      />
      <JourneyCTA locale={locale} />
    </>
  );
}
