"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuToggleIcon } from "@/components/icons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-20 w-full bg-background px-6 pt-6 pb-2 sm:static sm:px-10">
      <div className="relative z-30 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          aria-label="Home"
          className="group flex items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
        >
          <Image
            src="/avatar.svg"
            alt="jimpablo"
            width={40}
            height={40}
            priority
            className="rounded-full transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-[16px] sm:flex"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "font-medium text-primary transition-colors"
                    : "font-medium text-quaternary transition-colors hover:text-primary"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="-mr-1 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-primary transition-colors hover:bg-black/[0.08] sm:hidden dark:hover:bg-white/[0.12]"
        >
          <MenuToggleIcon isOpen={isOpen} />
        </button>
      </div>

      {/* Mobile full-screen overlay menu */}
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-0 z-20 flex flex-col overflow-y-auto bg-background px-6 pt-24 pb-8 sm:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    active
                      ? "py-2 text-xl font-semibold text-primary"
                      : "py-2 text-xl font-semibold text-tertiary transition-colors hover:text-primary"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
