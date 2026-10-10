import { text, type Locale } from "@/lib/i18n";
export function Brand({ locale }: { locale: Locale }) {
  return (
    <span className="brand-lockup">
      <svg className="brand-star" viewBox="0 0 40 48" aria-hidden="true">
        <path d="M22 1l5 16 12 7-12 6-5 17-6-17L1 24l15-7Z" fill="#7551ec" />
        <path d="m22 10 2 11 8 3-8 2-2 12-3-12-10-2 10-3Z" fill="#bcb0ff" />
        <path d="m22 17 1 6 5 1-5 1-1 6-2-6-5-1 5-1Z" fill="white" />
      </svg>
      <span>
        <span className="brand-name">StoryVerse</span>
        <span className="brand-tagline">
          {text(
            locale,
            "Stories for a gentler world",
            "让故事，创造更温柔的世界",
          )}
        </span>
      </span>
    </span>
  );
}
