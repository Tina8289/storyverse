import Link from "next/link";
import { navigation, text, type Locale } from "@/lib/i18n";
import { Brand } from "./Brand";
import { ArrowUp, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand" href={`/${locale}`}>
              <Brand locale={locale} />
            </Link>
            <p>
              {text(
                locale,
                "Small beginnings. Boundless worlds.",
                "从小小的起点，走向无边的世界。",
              )}
            </p>
          </div>
          <nav aria-label={text(locale, "Footer navigation", "页脚导航")}>
            {navigation.slice(1).map((item) => (
              <Link key={item.path} href={`/${locale}${item.path}`}>
                {item[locale]}
              </Link>
            ))}
          </nav>
          <div className="footer-actions">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={text(
                locale,
                "Email StoryVerse",
                "给 StoryVerse 写信",
              )}
            >
              <Mail size={20} aria-hidden="true" />
            </a>
            <a
              href="#main"
              aria-label={text(locale, "Back to top", "回到顶部")}
            >
              <ArrowUp size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} StoryVerse</span>
          <span>
            {text(locale, "Made for the love of stories.", "因为热爱故事。")}
          </span>
          <span>EN / 中文</span>
        </div>
      </div>
    </footer>
  );
}
