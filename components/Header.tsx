"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Globe2, Menu, X, Search } from "lucide-react";
import { navigation, text, type Locale } from "@/lib/i18n";
import { Brand } from "./Brand";
export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const other = locale === "en" ? "zh" : "en";
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          href={`/${locale}`}
          onClick={() => setOpen(false)}
        >
          <Brand locale={locale} />
        </Link>
        <nav
          id="main-navigation"
          className={`nav ${open ? "is-open" : ""}`}
          aria-label={text(locale, "Main navigation", "主导航")}
        >
          {navigation.map((item) => {
            const href = `/${locale}${item.path}`;
            const active = item.path
              ? pathname.startsWith(href)
              : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item[locale]}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <Link
            className="header-search"
            href={`/${locale}/stories#story-search`}
            aria-label={text(locale, "Search stories", "搜索故事")}
          >
            <Search size={19} aria-hidden="true" />
          </Link>
          <Link
            className="language-link"
            href={
              pathname.startsWith("/zh/stories/gui-ling-tui-yan")
                ? "/en/stories"
                : pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${other}`)
            }
            hrefLang={other === "zh" ? "zh-CN" : "en"}
            aria-label={text(locale, "切换到中文", "Switch to English")}
            onClick={() => setOpen(false)}
          >
            <Globe2 size={16} aria-hidden="true" />
            <span>{locale === "en" ? "中文" : "EN"}</span>
          </Link>
          <Link
            className="button primary header-read"
            href={`/${locale}/stories`}
          >
            {text(locale, "Start reading", "开始阅读")}
          </Link>
          <button
            className="menu-button"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={text(
              locale,
              open ? "Close menu" : "Open menu",
              open ? "关闭菜单" : "打开菜单",
            )}
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
