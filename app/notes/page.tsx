import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short notes.",
};

const sampleNotes = [
  {
    id: "note-1",
    date: "Nov 3, 2026",
    content: "First short note placeholder.",
  },
  {
    id: "note-2",
    date: "Oct 25, 2026",
    content: "Second short note placeholder.",
  },
];

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-12 leading-[1.6]">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Notes
        </h1>
        <p className="text-lg text-secondary">
          Short thoughts and snippets placeholder.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {sampleNotes.map((note) => (
          <article key={note.id} className="flex flex-col gap-1">
            <time className="text-sm text-quaternary tabular-nums">
              {note.date}
            </time>
            <p className="text-lg leading-[1.6] text-primary">{note.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
