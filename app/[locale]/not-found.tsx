import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container page-intro">
      <p className="eyebrow">404</p>
      <h1>This page is still unwritten.</h1>
      <p className="intro-summary">
        We couldn’t find that page. / 这个页面尚未写就。
      </p>
      <div className="hero-buttons">
        <Link className="button primary" href="/en">
          Back to home
        </Link>
        <Link className="button secondary" href="/zh">
          返回首页
        </Link>
      </div>
    </section>
  );
}
