import { notFound } from "next/navigation";
import type { Locale } from "./i18n";
export function getLocale(value: string): Locale {
  if (value !== "en" && value !== "zh") notFound();
  return value;
}
