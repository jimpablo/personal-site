import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog posts.",
};

const samplePosts = [
  {
    slug: "post-1",
    title: "First Blog Post Placeholder",
    date: "Nov 3, 2026",
  },
  {
    slug: "post-2",
    title: "Second Blog Post Placeholder",
    date: "Oct 20, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-12 leading-[1.6]">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Blog</h1>
        <p className="text-lg text-secondary">
          Posts and articles placeholder.
        </p>
      </header>

      <ul className="flex flex-col gap-4 sm:gap-2">
        {samplePosts.map((post) => (
          <li key={post.slug} className="flex">
            <Link
              href="/blog"
              className="group/list-item inline-flex flex-1 items-baseline justify-between gap-4 text-xl"
            >
              <span className="leading-[1.6] font-medium text-primary underline-offset-1 group-hover/list-item:underline">
                {post.title}
              </span>
              <time className="shrink-0 text-sm text-quaternary tabular-nums">
                {post.date}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
