import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Feather,
  Globe2,
  Heart,
  Mail,
  Sparkles,
  Tag,
} from "lucide-react";
import { stories } from "@/lib/content";
import { text, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
export function Inspiration({ locale: l }: { locale: Locale }) {
  return (
    <aside className="inspiration">
      <div className="inspiration-quote">
        <p className="inspiration-label">
          <Sparkles size={17} aria-hidden="true" />
          {text(l, "Today's inspiration", "今日灵感")}
        </p>
        <blockquote>
          {text(
            l,
            "“If the moon could speak, who would it comfort first?”",
            "“ 如果月亮会说话，它会先安慰谁？ ”",
          )}
        </blockquote>
        <div className="quote-bottom">
          <p>
            {text(
              l,
              "Every story begins with a question.",
              "每一个故事，都从一个问题开始。",
            )}
          </p>
          <span>—— StoryVerse</span>
        </div>
      </div>
      <div className="inspiration-world">
        <Image
          src="/art/storyverse-worlds.png"
          alt=""
          width={180}
          height={100}
        />
        <p>
          {text(l, "Small ideas.", "小小的想法。")}
          <br />
          {text(l, "Room to grow.", "也能长成，")}
          <br />
          {text(l, "Endless worlds.", "无限的世界。")}
        </p>
        <span className="leaf-detail" aria-hidden="true">
          ✧
        </span>
      </div>
    </aside>
  );
}
function HomeHeading({
  title,
  href,
  action,
  subtitle,
  badge,
}: {
  title: string;
  href?: string;
  action?: string;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <div className="home-heading">
      <div>
        <div className="home-heading-line">
          <h2>{title}</h2>
          {badge ? <span className="new-badge">{badge}</span> : null}
        </div>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {href ? (
        <Link href={href}>
          {action}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
export function FeaturedStory({ locale: l }: { locale: Locale }) {
  const story = stories[0];
  return (
    <section className="home-section">
      <HomeHeading
        title={text(l, "Featured story", "最新故事")}
        badge={text(l, "SAMPLE", "示例")}
        href={`/${l}/stories`}
        action={text(l, "View all stories", "查看所有故事")}
      />
      <div className="featured-story">
        <Link className="featured-cover" href={`/${l}/stories/${story.slug}`}>
          <Image
            src="/art/storyverse-hero.png"
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, 44vw"
          />
          <span>{story.title[l]}</span>
        </Link>
        <div className="featured-copy">
          <span className="genre-badge">
            {text(l, "Fantasy · Growing up", "奇幻 · 成长")}
          </span>
          <h3>
            <Link href={`/${l}/stories/${story.slug}`}>{story.title[l]}</Link>
          </h3>
          <p className="featured-intro">{story.summary[l]}</p>
          <div className="featured-bottom">
            <div>
              <p>
                {text(
                  l,
                  "A notebook, an impossible door, and the courage to imagine what comes next. Begin with a short journey into a world still taking shape.",
                  "一本笔记，一扇不可能出现的门，以及想象下一步的勇气。从一段短篇开始，走进正在成形的世界。",
                )}
              </p>
              <Link
                className="button primary"
                href={`/${l}/stories/${story.slug}`}
              >
                {text(l, "Continue reading", "继续阅读")}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <ul className="featured-facts">
              <li>
                <BookOpen size={17} aria-hidden="true" />
                {text(l, "Sample short", "示例短篇")}
              </li>
              <li>
                <Clock3 size={17} aria-hidden="true" />
                {text(l, "A quiet reading moment", "片刻阅读时光")}
              </li>
              <li>
                <Tag size={17} aria-hidden="true" />
                {story.genreName[l]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export function WorldSeries({ locale: l }: { locale: Locale }) {
  const worlds = [
    {
      key: "fantasy",
      title: text(l, "Fantasy worlds", "奇幻世界"),
      summary: text(l, "Magic, wonder, possibility", "魔法、奇迹与无限可能"),
      position: "left",
    },
    {
      key: "science-fiction",
      title: text(l, "Future horizons", "科幻未来"),
      summary: text(l, "Explore an unknown universe", "探索未知的宇宙"),
      position: "right",
    },
    {
      key: "adventure",
      title: text(l, "The adventure begins", "冒险旅程"),
      summary: text(l, "A brave heart. A new world.", "勇敢的心，新的世界"),
      position: "center",
    },
    {
      key: "all",
      title: text(l, "More stories", "更多故事"),
      summary: text(l, "Find your next beginning", "寻找下一段奇遇"),
      position: "sunset",
    },
  ];
  return (
    <section className="home-section">
      <HomeHeading
        title={text(l, "Explore genres", "探索题材")}
        subtitle={text(
          l,
          "Different worlds. The same imagination.",
          "不同的世界，同一个梦想。",
        )}
        href={`/${l}/stories`}
        action={text(l, "Explore more", "探索更多")}
      />
      <div className="world-series">
        {worlds.map((w) => (
          <Link
            className={`world-tile world-${w.position}`}
            key={w.key}
            href={`/${l}/stories${w.key === "all" ? "" : `?genre=${w.key}`}`}
          >
            <Image
              src="/art/storyverse-worlds.png"
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <div>
              <h3>{w.title}</h3>
              <p>{w.summary}</p>
            </div>
            <span className="world-arrow">
              <ArrowRight size={17} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
export function AuthorIntro({ locale: l }: { locale: Locale }) {
  const values = [
    {
      Icon: BookOpen,
      title: text(l, "Original stories", "原创故事"),
      body: text(l, "Connected worlds", "连接世界"),
    },
    {
      Icon: Feather,
      title: text(l, "AI assisted", "AI 创作"),
      body: text(l, "New possibilities", "探索可能"),
    },
    {
      Icon: Globe2,
      title: text(l, "From Chinese", "从中文出发"),
      body: text(l, "Across the world", "走向世界"),
    },
    {
      Icon: Heart,
      title: text(l, "With readers", "与读者"),
      body: text(l, "Growing together", "一起成长"),
    },
  ];
  return (
    <section className="home-section author-strip">
      <div className="author-portrait">
        <h2>{text(l, "About the creator", "关于我")}</h2>
        <div className="portrait-image">
          <Image
            src="/art/storyverse-hero.png"
            alt={text(
              l,
              "Fictional storyteller illustration, not an author portrait",
              "虚构创作者插画，非作者本人照片",
            )}
            fill
            sizes="130px"
          />
        </div>
        <span className="portrait-note">
          {text(l, "Nice to meet you!", "很高兴\n认识你！")}
        </span>
      </div>
      <div className="author-description">
        <h3>
          {text(
            l,
            "Hello. Every creative voice starts somewhere.",
            "你好，让我们从一个故事开始认识。",
          )}
        </h3>
        <p>
          {text(
            l,
            "StoryVerse begins with stories in Chinese, and a wish to make ordinary days feel a little more imaginative.",
            "StoryVerse 从中文故事出发，希望让平凡的日子多一些想象力。",
          )}
        </p>
        <p>
          {text(
            l,
            "Through courage, friendship, and imagined worlds, we explore what stories can become. Comics and animation are dreams for the journey ahead.",
            "在勇气、友情与想象的世界里，探索故事的更多可能。未来，也期待让文字延伸到漫画与动画。",
          )}
        </p>
        <Link className="author-link" href={`/${l}/about`}>
          {text(l, "More about StoryVerse", "了解更多关于我")}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
      <div className="author-values">
        {values.map(({ Icon, title, body }) => (
          <div key={title}>
            <Icon size={26} aria-hidden="true" />
            <strong>{title}</strong>
            <span>{body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export function CreativeJourney({ locale: l }: { locale: Locale }) {
  const steps = [
    ["Begin", "起点", "Write a first story", "写下第一个故事"],
    ["Grow", "成长", "Build a complete work", "打磨一部作品"],
    ["Explore", "探索", "Experiment with AI comics", "尝试 AI 漫画"],
    ["Imagine", "拓展", "Explore visual storytelling", "探索视觉叙事"],
    ["Connect", "相遇", "Share across languages", "与不同语言的读者相遇"],
    ["Beyond", "未来", "New worlds still ahead", "更多可能，正在路上"],
  ];
  return (
    <section className="home-section creative-journey">
      <HomeHeading
        title={text(l, "My creative journey", "我的创作旅程")}
        subtitle={text(
          l,
          "A journey imagined. A story just beginning.",
          "故事，才刚刚开始。以下是创作愿景。",
        )}
      />
      <ol>
        {steps.map(([en, zh, enBody, zhBody], i) => (
          <li key={en} className={i === 0 ? "current" : ""}>
            <span className="timeline-dot" />
            <strong>{text(l, en, zh)}</strong>
            <p>{text(l, enBody, zhBody)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
export function JourneyBanner({ locale: l }: { locale: Locale }) {
  return (
    <section className="journey-banner">
      <Image src="/art/storyverse-worlds.png" alt="" fill sizes="100vw" />
      <div className="journey-banner-copy">
        <h2>{text(l, "Join my storytelling journey", "加入我的故事旅程")}</h2>
        <p>
          {text(
            l,
            "Share a thought, a little inspiration, or your hopes for the next world.",
            "分享阅读感受、创作灵感，一起创造更温柔的世界。",
          )}
        </p>
      </div>
      <a
        className="journey-mail"
        href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(text(l, "Following the StoryVerse journey", "关注 StoryVerse 的故事旅程"))}`}
      >
        <Mail size={20} aria-hidden="true" />
        <span>{text(l, "Let’s keep in touch", "期待收到你的来信")}</span>
        <strong>
          {text(l, "Write to us", "写信给我")}
          <ArrowRight size={16} aria-hidden="true" />
        </strong>
      </a>
    </section>
  );
}
