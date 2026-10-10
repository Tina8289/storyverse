import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { StoryCard } from "@/components/StoryCard";
import { featuredStories, journalEntries } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        kicker="Original IP Platform"
        title="Build worlds, publish stories, and grow with readers."
        summary="StoryVerse starts as a simple reading website and grows into a global content ecosystem for stories, journals, characters, worlds, newsletters, comics, and future animation."
        primaryLabel="Read stories"
        primaryHref="/stories"
      />

      <section className="section container">
        <p className="kicker">Featured Stories</p>
        <div className="grid-3">
          {featuredStories.map((story) => (
            <StoryCard key={story.title} {...story} />
          ))}
        </div>
      </section>

      <section className="section container">
        <p className="kicker">Journey</p>
        <div className="grid-3">
          {journalEntries.map((entry) => (
            <article className="feature" key={entry}>
              <h3>Progress Note</h3>
              <p>{entry}</p>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
