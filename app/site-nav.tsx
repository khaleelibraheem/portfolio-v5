"use client";

import { useEffect, useState } from "react";

const EMAIL = "mailto:alhajikhaleel@gmail.com";
const GITHUB = "https://github.com/khaleelibraheem";
const X = "https://x.com/khaleelalhaji";

const sections = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" className="logo" onClick={onClick}>
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      Khaleel Alhaji
    </a>
  );
}

const DARK_QUERY = "(prefers-color-scheme: dark)";

function systemTheme() {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

// Drops the manual choice so the page follows the system again.
function clearThemeOverride() {
  delete document.documentElement.dataset.theme;
  try {
    localStorage.removeItem("theme");
    localStorage.removeItem("theme-system");
  } catch {}
}

// A click overrides the system only until the system theme next changes.
function toggleTheme() {
  const root = document.documentElement;
  const system = systemTheme();
  const next = (root.dataset.theme ?? system) === "dark" ? "light" : "dark";
  if (next === system) return clearThemeOverride();
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
    localStorage.setItem("theme-system", system);
  } catch {}
}

// Icons swap in CSS (globals.css), so server and client render the same markup.
function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`btn btn-sm btn-ghost theme-toggle ${className}`}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      <svg
        className="icon-moon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7z" />
      </svg>
      <svg
        className="icon-sun"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1" />
      </svg>
    </button>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    media.addEventListener("change", clearThemeOverride);
    return () => media.removeEventListener("change", clearThemeOverride);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    desktop.addEventListener("change", close);
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = "";
      desktop.removeEventListener("change", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] bg-page">
      <div className="page-container flex h-[60px] items-center justify-between lg:h-[52px]">
        <div className="flex items-center gap-8">
          <Logo onClick={close} />
          <nav aria-label="Sections" className="hidden items-center lg:flex">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className="nav-item">
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a href={X} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-ghost">
            X
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary">
            GitHub
          </a>
          <a href={EMAIL} className="btn btn-sm btn-primary">
            Email me
          </a>
        </div>

        <button
          type="button"
          className="m-toggle -mr-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="m-sheet lg:hidden">
          <nav aria-label="Sections" className="flex-1 overflow-y-auto px-5 pt-4">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className="m-row" onClick={close}>
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3 p-5">
            <div className="flex basis-full items-center justify-between">
              <a href={X} target="_blank" rel="noopener noreferrer" className="btn btn-sheet btn-ghost -ml-4">
                X
              </a>
              <ThemeToggle className="!h-11 !w-11 -mr-3" />
            </div>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-sheet btn-secondary">
              GitHub
            </a>
            <a href={EMAIL} className="btn btn-sheet btn-primary">
              Email me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
