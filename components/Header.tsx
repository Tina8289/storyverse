import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="StoryVerse home">
          <span>{siteConfig.name}</span>
          <small>{siteConfig.tagline}</small>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
