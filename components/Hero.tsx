import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "./ui";
import { text, type Locale } from "@/lib/i18n";
export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="container hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          {text(
            locale,
            "An independent story universe",
            "一个独立生长的故事宇宙",
          )}
        </p>
        <h1>
          {text(locale, "A small story.", "一个小故事。")}
          <br />
          {text(locale, "A whole", "一个完整的")}
          <br />
          <span>{text(locale, "new world.", "新世界。")}</span>
        </h1>
        <p className="hero-summary">
          {text(
            locale,
            "For the worlds we imagine, and the people we become. Original stories and notes from a creative life in progress.",
            "写给我们想象的世界，也写给正在成长的自己。在这里，读故事，也看见创作的过程。",
          )}
        </p>
        <div className="hero-buttons">
          <ButtonLink href={`/${locale}/stories`}>
            {text(locale, "Find your next story", "发现下一个故事")}
          </ButtonLink>
          <Link className="text-link" href={`/${locale}/about`}>
            {text(locale, "Our story", "我们的故事")}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="hero-footnote">
          <span className="mini-line" />
          {text(
            locale,
            "One imagination. Many possible worlds.",
            "一种想象，无数可能。",
          )}
        </div>
      </div>
      <Link href={`/${locale}/stories/the-first-world`} className="hero-art">
        <Image
          src="/art/door.svg"
          alt={text(
            locale,
            "An open doorway standing in a violet sea, facing a distant island",
            "紫色海面上的一扇门，通向远方的岛屿",
          )}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 50vw"
        />
        <span className="art-top">STORYVERSE ORIGINAL WORLDS</span>
        <div className="art-caption">
          <div>
            <span>
              {text(locale, "Explore a sample world", "探索示例世界")}
            </span>
            <h2>{text(locale, "The First World", "第一个世界")}</h2>
          </div>
          <span className="round-arrow">
            <ArrowUpRight size={22} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </section>
  );
}
