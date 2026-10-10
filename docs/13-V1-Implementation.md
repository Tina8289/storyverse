# StoryVerse V1 implementation

## Scope

Five core pages (Home, Stories, Journal, About, Contact), available in English and simplified Chinese, plus three sample story pages and three sample editorial notes per language. The existing product/design documentation remains the foundation. Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4, self-hosted Inter, and Lucide icons. Dependencies and the lockfile are pinned for reproducible installs.

## Structure

- `app/[locale]/`: localized routes and page metadata; validates supported locales.
- `components/`: shared navigation, footer, hero, cards, lists, buttons, section headings, notices, and structured-data renderer.
- `lib/content.ts`: typed bilingual sample content. Replace with reviewed original writing before an editorial launch; future CMS adapters should return the same typed records.
- `lib/i18n.ts`: supported languages, navigation labels, and copy helper. Japanese is intentionally unavailable until translations have been reviewed. To add a language, extend `Locale`, content records, validation, proxy matching, switcher, and alternate metadata together.
- `lib/seo.ts`: titles, descriptions, canonical URLs, hreflang, social cards, and sample-content noindex policy.
- `styles/tokens.css`: shared colors, typography, widths, and spacing. Tailwind is available alongside component-level CSS.
- `public/art/`: original SVG illustrations. These are website artwork, not covers of claimed published works.
- `tests/`: desktop/mobile Playwright navigation, reading flow, filtering, bilingual metadata, accessibility, link resolution, and discovery checks.

## Design

Preserves the repository's violet `#5B5CEB`, light background, wordmark, restrained motion, and reading-first direction. Inter is self-hosted; local CJK system fonts are fallbacks. Serif prose is reserved for the reading experience. The single signature element is an open doorway in an imagined landscape. Layout uses a 1280px content maximum and 720px reading measure to improve long-form readability.

## Content and discovery

All sample stories and editorial notes are explicitly labelled. No creator biography, awards, publication dates, testimonials, subscriber counts, or rights claims are invented. Sample detail routes use `noindex, follow` and are omitted from the sitemap. Core pages include crawlable server-rendered copy, unique metadata, language alternates, and internal links. Structured data describes the website and the visible About FAQ; it does not promise search or AI-answer rankings. Add Article/CreativeWork metadata with verified author, dates, and rights when real content is published.

## Contact and data

The approved public email is `samiyah.china@gmail.com`. Contact opens an email application using `mailto:`; no server-side message storage or email-delivery promise is made. The nonfunctional newsletter form from the scaffold was replaced by a journal CTA. No subscriber data, analytics cookies, Supabase integration, accounts, payment flows, or AI API calls are included in V1.

## Operations

- Repository: https://github.com/Tina8289/storyverse
- Vercel team: samiyah; dedicated project: storyverse.
- Production origin: https://storyverse-coral.vercel.app
- Set `NEXT_PUBLIC_SITE_URL` to the canonical origin and rebuild after changing domains. This variable is configured on Vercel for production and preview; preview metadata points to the canonical production pages.
- `NEXT_PUBLIC_CONTACT_EMAIL` optionally overrides the approved email.
- Root and legacy unprefixed page routes permanently redirect to English, preserving query strings. Unsupported languages and missing content return 404.
- `npm ci`, `npm run lint`, `npm run build`, `npm run typecheck`, `npx playwright install chromium`, `npm run test:e2e`.

## Dependency audit

The production dependency audit reports no known vulnerabilities. The development-only lint dependency chain currently includes the `braces` stack-exhaustion advisory (GHSA-vfj7-8cjw-p6xm); the registry suggests an incompatible Next ESLint downgrade rather than a safe current patch. No untrusted glob patterns are passed to lint. Review this advisory when updating the lint toolchain; do not blindly run `npm audit fix --force`.

## Verification record

Local production build, strict type checking, lint, and all 10 Playwright desktop/mobile tests passed. Automated WCAG A/AA checks passed for the five core pages in both languages. Checks include canonical metadata, document language, overflow, genre filtering, same-page language switching, complete story navigation, mailto target, journal reading, genuine 404 status, internal links, sitemap, robots, and the PNG social card. Desktop and mobile screenshots were visually reviewed. Automated accessibility checks are not a substitute for a full manual audit.

Vercel's existing login-protection settings are retained without modification. The production alias was verified with an unauthenticated request and serves the website publicly; no access-control change is needed. GitHub pushes to main trigger the linked Vercel production deployment.
