import { Newsletter } from "@/components/Newsletter";

export default function AboutPage() {
  return (
    <>
      <section className="page-title reading">
        <p className="kicker">About</p>
        <h1>A platform for a young creator to grow in public.</h1>
        <p>StoryVerse is built around dreams, discipline, learning, and long-term creative assets. It begins with words and expands carefully into worlds, characters, comics, and animation.</p>
      </section>

      <section className="section container">
        <div className="grid-3">
          <article className="feature">
            <h3>Reading First</h3>
            <p>Every layout decision should protect the reader's attention and make the story easier to enjoy.</p>
          </article>
          <article className="feature">
            <h3>AI Assisted</h3>
            <p>AI helps polish, translate, optimize, and publish, while the creator keeps the original voice and direction.</p>
          </article>
          <article className="feature">
            <h3>Long Term</h3>
            <p>The system is designed to evolve from simple pages into a durable original IP platform.</p>
          </article>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
