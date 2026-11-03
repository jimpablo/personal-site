import Link from "next/link";
import {
  ChevronRightIcon,
  ExternalArrowIcon,
  GitHubIcon,
  RssIcon,
  XIcon,
} from "@/components/icons";

const recentPosts = [
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

const selectedProjects = [
  {
    name: "Project One",
    description: "Short project description",
    href: "https://github.com/jimpablo",
  },
  {
    name: "Project Two",
    description: "Another project description",
    href: "https://github.com/jimpablo",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 leading-[1.6]">
      {/* Intro */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-primary">jimpablo</h1>

        <p className="text-2xl font-semibold text-pretty text-secondary">
          Short bio placeholder. Building software and writing down what I learn
          along the way.
        </p>
      </div>

      {/* Social links */}
      <ul className="flex flex-row gap-2">
        <li className="flex">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="group -ml-1 inline-flex items-center gap-2 p-2 text-xl"
          >
            <XIcon className="h-7 w-7 text-quaternary transition-colors group-hover:text-primary" />
          </a>
        </li>
        <li className="flex">
          <a
            href="https://github.com/jimpablo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group inline-flex items-center gap-2 p-2 text-xl"
          >
            <GitHubIcon className="h-7 w-7 text-quaternary transition-colors group-hover:text-primary" />
          </a>
        </li>
        <li className="flex">
          <Link
            href="/rss.xml"
            aria-label="RSS Feed"
            className="group inline-flex items-center gap-2 p-2 text-xl"
          >
            <RssIcon className="h-7 w-7 text-quaternary transition-colors group-hover:text-primary" />
          </Link>
        </li>
      </ul>

      {/* Blog */}
      <div className="flex flex-col gap-4">
        <Link href="/blog" className="group flex w-fit items-center">
          <h2 className="leading-[1.6] text-quaternary transition-colors group-hover:text-primary dark:text-tertiary">
            Blog
          </h2>
          <ChevronRightIcon />
        </Link>

        <ul className="flex flex-col gap-4 sm:gap-1.5">
          {recentPosts.map((post) => (
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

      {/* Projects */}
      <div className="flex flex-col gap-4">
        <Link href="/projects" className="group flex w-fit items-center">
          <h2 className="leading-[1.6] text-quaternary transition-colors group-hover:text-primary dark:text-tertiary">
            Projects
          </h2>
          <ChevronRightIcon />
        </Link>

        <ul className="flex flex-col gap-4 sm:gap-1.5">
          {selectedProjects.map((project) => (
            <li key={project.name} className="flex">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/list-item inline-flex flex-1 flex-col items-start gap-0 text-xl sm:flex-row sm:items-center sm:gap-2.5"
              >
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="leading-[1.6] font-medium text-primary underline-offset-1 group-hover/list-item:underline">
                    {project.name}
                  </span>
                  <ExternalArrowIcon />
                </div>
                <span className="flex-1 leading-[1.6] text-quaternary sm:line-clamp-1">
                  {project.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
