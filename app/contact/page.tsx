import { Newsletter } from "@/components/Newsletter";

export default function ContactPage() {
  return (
    <>
      <section className="page-title reading">
        <p className="kicker">Contact</p>
        <h1>For collaboration, publishing, or future IP opportunities.</h1>
        <p>StoryVerse is starting simple. For now, contact can stay light: one clear message, one email, and one path for future partnership.</p>
      </section>

      <section className="section reading">
        <div className="feature">
          <h3>Email</h3>
          <p>hello@storyverse.example</p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
