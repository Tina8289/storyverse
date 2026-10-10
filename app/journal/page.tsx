import { Newsletter } from "@/components/Newsletter";
import { journalEntries } from "@/lib/content";

export default function JournalPage() {
  return (
    <>
      <section className="page-title reading">
        <p className="kicker">Journal</p>
        <h1>The creative journey is part of the story.</h1>
        <p>Journal entries make the platform human. They show the writing process, lessons, goals, reading notes, and how AI supports the creator without replacing her voice.</p>
      </section>

      <section className="section reading">
        <ul className="content-list">
          {journalEntries.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </section>

      <Newsletter />
    </>
  );
}
