import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About jimpablo.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 text-lg leading-[1.7]">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p className="text-secondary">About page placeholder.</p>
      </header>

      <div className="flex flex-col gap-4 text-secondary">
        <p>More details about me coming soon.</p>
      </div>
    </div>
  );
}
