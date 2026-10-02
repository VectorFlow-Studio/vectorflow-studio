"use client";

import { useState } from "react";
import Image from "next/image";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface NavLink {
  label: string;
  href: string;
}

export default function Navbar({ links }: { links: NavLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-[980px] border border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-3 py-3 md:px-6 md:py-4">
        <a href="#home" className="flex items-center font-semibold text-white">
          <span className="grid h-10 w-12 shrink-0 place-items-center overflow-hidden sm:h-12 sm:w-14">
            <Image
              src="/logo.png"
              alt="VectorFlow Studio Logo"
              width={48}
              height={48}
              className="size-8 max-w-none scale-125 rounded object-contain sm:size-8 sm:scale-150"
            />
          </span>
         <span className={`${sora.className} text-base font-semibold tracking-tight text-white sm:text-lg`}>
          VectorFlow Studio
      </span>
        </a>

        <nav aria-label="Main Navigation" className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-8 text-sm lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 transition-colors sm:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://cal.com/vectorflow-studio/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-slate-950 transition-all duration-150 active:scale-95 active:bg-amber-400 sm:hover:bg-amber-200 lg:inline-flex"
        >
          Book Call
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-md text-white transition-all duration-150 active:scale-95 active:bg-slate-800 sm:hover:bg-slate-800 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-6">
            {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-menu-enter border-t border-slate-800 px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 md:px-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm text-slate-300 transition-colors active:bg-slate-800 active:text-white sm:hover:bg-slate-800 sm:hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition-all duration-150 active:scale-95 active:bg-amber-400 sm:hover:bg-amber-200"
              onClick={() => setMenuOpen(false)}
            >
              Book Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}