# StoryVerse

An independent home for original stories, imagined worlds, and the creative journey. A bilingual, reading-first website with Home, Stories, Journal, About, and Contact, plus sample reading pages.

**Website:** https://storyverse-coral.vercel.app

## Develop

Requires Node.js 20.9+ (Vercel uses Node.js 24).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. English lives at `/en`, simplified Chinese at `/zh`. The language switch retains the current page.

```sh
npm run lint
npm run build
npm run typecheck
npx playwright install chromium
npm run test:e2e
```

## Architecture

Next.js App Router, TypeScript, Tailwind CSS, self-hosted Inter, Lucide, and static typed content. Shared UI lives in `components/`, localized routes in `app/[locale]/`, design tokens in `styles/tokens.css`, and bilingual writing in `lib/content.ts`. No database is required for V1.

Stories and journal articles are labelled demonstration content. Replace them with reviewed writing before publishing original releases. Sample detail pages are excluded from indexing and the sitemap. The Contact page uses the owner-approved email; newsletter collection is not enabled.

Copy `.env.example` to `.env.local` only if needed. Vercel sets `NEXT_PUBLIC_SITE_URL` to the production origin. A custom domain change requires updating that value and rebuilding.

See [V1 implementation](docs/13-V1-Implementation.md) for design decisions, content governance, extension points, configuration, verification, and the development-tool audit caveat. Earlier numbered documents retain the long-term product vision; database, AI workflow, comics, animation, and licensing features are future scope.
