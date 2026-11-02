export default function Home() {
  return (
    <main className="mx-auto w-full max-w-xl px-6 py-16 font-sans">
      <h1 className="text-2xl font-semibold tracking-tight">Pablo</h1>

      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
        计算机硕士在读，喜欢折腾 AI Agent 和 Web 开发。这里会放我的博客和作品。
      </p>

      <div className="mt-8 flex gap-4 text-sm">
        <a
          href="https://github.com/jimpablo"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-500"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
