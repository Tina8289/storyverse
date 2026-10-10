import Link from "next/link";
import { navigation, text, type Locale } from "@/lib/i18n";
export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand" href={`/${locale}`}>
              StoryVerse<span>.</span>
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
