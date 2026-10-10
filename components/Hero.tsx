import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { text, type Locale } from "@/lib/i18n";
export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="cinema-hero">
      <Image
        src="/art/storyverse-hero.png"
        alt={text(
          locale,
          "An imagined storyteller and her cat overlooking a magical sea at sunset",
          "插画中的少女与猫咪，在落日下眺望奇幻海洋",
        )}
        fill
        priority
        sizes="100vw"
      />
      <div className="cinema-shade" />
      <div className="container cinema-content">
        <h1>
          {text(locale, "Every great universe", "每一个伟大的世界")}
          <br />
          {text(locale, "begins with a small story.", "都始于一个小小的故事")}
        </h1>
        <p className="cinema-subtitle">
          {text(
            locale,
            "Original fiction · Imagined worlds · Future animation",
            "原创小说 · 想象世界 · 未来动画",
          )}
        </p>
        <p className="cinema-description">
          {text(
            locale,
            "Stories that begin in Chinese, and an imagination that reaches beyond the horizon.",
            "从中文出发，用想象力书写更温柔的世界。",
          )}
        </p>
        <div className="cinema-buttons">
          <Link className="button primary" href={`/${locale}/stories`}>
            <BookOpen size={18} aria-hidden="true" />
            {text(locale, "Start reading", "开始阅读故事")}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="button cinema-secondary" href={`/${locale}/about`}>
            <Sparkles size={17} aria-hidden="true" />
            {text(locale, "Discover the vision", "了解创作愿景")}
          </Link>
        </div>
        <a className="explore-down" href="#discover">
          <ArrowDown size={20} aria-hidden="true" />
          {text(locale, "Explore below", "向下探索")}
        </a>
      </div>
    </section>
  );
}
