import { ArrowUpRight } from "lucide-react";
import { PageIntro, JourneyCTA } from "@/components/ui";
import { getLocale } from "@/lib/locale";
import { text } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const l = getLocale((await params).locale);
  return pageMetadata(
    l,
    "/contact",
    text(l, "Contact", "联系"),
    text(
      l,
      "Get in touch with StoryVerse about reader feedback, publishing, translation, or creative collaboration.",
      "联系 StoryVerse，分享阅读反馈，或交流出版、翻译与创作合作。",
    ),
  );
}
export default async function Contact({ params }: Props) {
  const l = getLocale((await params).locale);
  return (
    <>
      <PageIntro
        eyebrow={text(l, "Get in touch", "保持联系")}
        title={text(
          l,
          "Good stories start a conversation.",
          "好故事，让对话开始。",
        )}
        summary={text(
          l,
          "A thought about a story, a question, or the beginning of a collaboration. We would love to hear it.",
          "关于故事的感受、一个问题，或是一次合作的起点。期待听到你的想法。",
        )}
      />
      <section className="container contact-grid">
        <div className="contact-card">
          <p className="eyebrow">{text(l, "Write to us", "写信给我们")}</p>
          <h2>{text(l, "Say hello.", "你好，很高兴认识你。")}</h2>
          <a className="contact-email" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
            <ArrowUpRight size={24} aria-hidden="true" />
          </a>
          <p>
            {text(
              l,
              "This opens your email app. Please include a short introduction and what you would like to discuss.",
              "点击邮箱会打开你的邮件应用。请简单介绍自己，以及想交流的内容。",
            )}
          </p>
        </div>
        <div className="contact-topics">
          <h3>{text(l, "A few things we can talk about", "我们可以聊聊")}</h3>
          <ul>
            <li>{text(l, "Reader thoughts & feedback", "阅读感受与反馈")}</li>
            <li>{text(l, "Publishing & translation", "出版与翻译")}</li>
            <li>{text(l, "Creative collaboration", "创作合作")}</li>
          </ul>
          <p>
            {text(
              l,
              "Please share only the personal information needed for your inquiry.",
              "请仅提供此次沟通所需的个人信息。",
            )}
          </p>
        </div>
      </section>
      <JourneyCTA locale={l} />
    </>
  );
}
