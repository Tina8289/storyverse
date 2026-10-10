# StoryVerse Database v1.0

## V1 Database Principle

Keep the database simple. Store only what the website needs to publish stories and support future AI workflows.

## Core Tables

### stories

Stores original story records.

Suggested fields:

- id
- slug
- title
- subtitle
- summary
- category
- cover_image
- language
- status
- published_at
- created_at
- updated_at

### chapters

Stores story chapters.

Suggested fields:

- id
- story_id
- chapter_number
- title
- body
- status
- published_at
- created_at
- updated_at

### translations

Stores translated versions.

Suggested fields:

- id
- source_type
- source_id
- language
- title
- body
- ai_model
- review_status
- created_at
- updated_at

### journal_posts

Stores creation logs and SEO articles.

Suggested fields:

- id
- slug
- title
- summary
- body
- tags
- related_story_id
- status
- published_at
- created_at
- updated_at

### settings

Stores site-level settings.

Suggested fields:

- id
- key
- value
- updated_at

## Future Tables

- characters
- worlds
- newsletters
- media_assets
- seo_metadata
- social_posts

## Rule

Do not overbuild the database before V1 pages are live.
