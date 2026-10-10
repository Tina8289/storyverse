export function Newsletter() {
  return (
    <section className="newsletter reading">
      <p className="kicker">Newsletter</p>
      <h2>Join the journey</h2>
      <p>Follow the stories, writing process, and future worlds as StoryVerse grows from version one into a complete IP platform.</p>
      <form>
        <input aria-label="Email address" placeholder="Email address" type="email" />
        <button className="button primary" type="submit">Subscribe</button>
      </form>
    </section>
  );
}
