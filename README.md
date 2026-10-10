# StoryVerse

StoryVerse is a global original IP platform where a Chinese creator writes in Chinese and AI helps publish stories to the world.

It starts as a simple reading website, then grows into a long-term content ecosystem for stories, journals, characters, worlds, newsletters, comics, animation, and future licensing.

## Current Status

Task 001 is started: the repository now includes a Next.js V1 scaffold with the first five pages and shared design components.

## V1 Goal

Launch a simple, expandable platform:

- Home
- Stories
- Journal
- About
- Contact
- Chinese / English / Japanese publishing path

## Tech Stack

- Next.js
- Vercel
- Supabase
- ChatGPT / Codex for writing, translation, SEO, and development assistance

## Code Structure

| Path | Purpose |
|---|---|
| `app/` | Next.js App Router pages and global styles |
| `components/` | Reusable UI components: Header, Footer, Hero, StoryCard, Newsletter |
| `lib/` | Site constants and starter content data |
| `styles/` | Design tokens from the StoryVerse design system |
| `docs/` | Product, design, SEO, database, AI workflow, and roadmap documents |

## Development Principles

1. Launch first.
2. Keep it simple.
3. Design for future expansion.
4. One story, many content assets.
5. AI assists creators, it does not replace them.
6. Design once. Reuse forever.
7. Reading comes first.

## Documentation

| File | Purpose |
|---|---|
| `docs/01-Blueprint.md` | Overall StoryVerse positioning and ecosystem blueprint |
| `docs/02-Website-Architecture.md` | Website pages, sections, and page rhythm |
| `docs/03-Database.md` | V1 database structure and future tables |
| `docs/04-Creator-Studio.md` | Simple creator workflow and studio concept |
| `docs/05-AI-Workflow.md` | AI polish, translation, SEO, and publishing workflow |
| `docs/06-Business-Model.md` | Future revenue and IP business logic |
| `docs/07-Fan-Growth-System.md` | Reader growth, newsletter, and content rhythm |
| `docs/08-SEO-GEO-AEO.md` | Search, generative engine, and answer engine framework |
| `docs/09-Roadmap.md` | Phase-by-phase roadmap |
| `docs/10-TODO.md` | Current execution checklist |
| `docs/11-Design-System.md` | Official visual style, fonts, colors, logo, components |
| `docs/12-Development-Tasks.md` | Next development tasks for Codex / Cursor / Vercel |

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Current Priority

1. Review the V1 pages visually.
2. Replace placeholder story content with real StoryVerse content.
3. Add Supabase only after the static V1 pages are approved.
4. Deploy V1 to Vercel.
