export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const text = (locale: Locale, en: string, zh: string) =>
  locale === "zh" ? zh : en;
export const navigation = [
  { path: "", en: "Home", zh: "首页" },
  { path: "/stories", en: "Stories", zh: "故事" },
  { path: "/journal", en: "Journal", zh: "创作日记" },
  { path: "/about", en: "About", zh: "关于我" },
  { path: "/contact", en: "Contact", zh: "联系我们" },
];
