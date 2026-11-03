import type { Metadata } from "next";
import { ExternalArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects.",
};

const projects = [
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

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 leading-[1.6]">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Projects
        </h1>
        <p className="text-lg text-secondary">Projects placeholder.</p>
      </header>

      <ul className="flex flex-col gap-4 sm:gap-1.5">
        {projects.map((project) => (
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
  );
}
