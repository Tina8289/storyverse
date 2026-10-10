import { Newsletter } from "@/components/Newsletter";
import { StoryCard } from "@/components/StoryCard";
import { featuredStories } from "@/lib/content";

export default function StoriesPage() {
  return (
    <>
      <section className="page-title reading">
        <p className="kicker">Stories</p>
        <h1>Original stories that can grow into worlds.</h1>
        <p>V1 keeps the library simple: clear categories, readable summaries, and a stable structure for future chapters, translations, characters, and worlds.</p>
      </section>

      <section className="section container">
        <div className="grid-3">
          {featuredStories.map((story) => (
            <StoryCard key={story.title} {...story} />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
