import Link from "next/link";

type StoryCardProps = {
  title: string;
  summary: string;
  href: string;
  category: string;
};

export function StoryCard({ title, summary, href, category }: StoryCardProps) {
  return (
    <article className="story-card">
      <div className="story-thumb" aria-hidden="true">
        {category}
      </div>
      <div>
        <p className="card-label">{category}</p>
        <h3>{title}</h3>
        <p>{summary}</p>
        <Link href={href}>Start reading</Link>
      </div>
    </article>
  );
}
