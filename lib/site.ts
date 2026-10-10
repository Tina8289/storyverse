export const siteConfig = {
  name: "StoryVerse",
  tagline: "Build Worlds.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "samiyah.china@gmail.com",
};
