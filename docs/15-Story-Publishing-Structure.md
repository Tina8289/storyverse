# Story formats and publishing structure

The Stories library now has All stories, Short stories, Ongoing serials, and Completed serials. On hiatus appears when paused serials exist. Category links are reloadable URLs (`?collection=short|ongoing|completed|paused`); genre is independent. Existing demos live in a separate sample section and are excluded from published counts. Empty categories remain visible without invented works.

## Content model

`lib/content.ts` defines a discriminated `Story` union:

- Short: `format: "short"`, `status: "completed"`, whole-body `paragraphs`.
- Serial: `format: "serial"`, `status: "ongoing" | "completed" | "paused"`, ordered `chapters`.
- Shared: unique stable `slug`, title, summary, genre, genre name, art reference, `sample`.
- Chapter: unique stable slug within its story, title, paragraphs. Array order is reading order.

Each content field currently holds reviewed English and Chinese values. Do not invent an English translation or publish empty language variants when only Chinese is supplied; extend language availability before importing a Chinese-only release. Untranslated-language availability is not implemented in this change.

## Routes and indexing

Shorts open at `/[locale]/stories/[slug]` and show the full story. Serials use that route for the introduction and ordered chapter list. Chapters live at `/[locale]/stories/[slug]/chapters/[chapter]` and have previous/list/next links, with correct first/latest/finished boundaries. Missing chapters, and chapter URLs for short stories, return 404.

Sample pages retain noindex. Published stories and their chapters are included automatically in the sitemap. The homepage's genre grid is now titled Explore genres rather than Story series.

## Import checklist for the next task

Collect the actual manuscript, title, short or serial format, current completion status, and chapter titles/order. Confirm the public author name and any supplied cover before using them. Preserve the author's text unless asked to edit it. Mark genuine releases `sample: false`; keep demonstration content separate. Do not claim an unpublished chapter or invented update date.

The authoring backend and file-upload interface are not part of this change. Initial imports are made through the project content source and deployed through GitHub/Vercel. Test-only serial fixtures are not included in the production story library.

Verification: production build, lint, and 16 Playwright test cases pass. Tests cover category persistence on reload, separation of samples from published counts, genre combinations, serial content ordering and chapter boundaries using test-only fixtures, missing chapter 404s, and existing bilingual/accessibility/navigation checks. Desktop and phone category screenshots were reviewed.
