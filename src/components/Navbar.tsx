"use client";
import React from "react";

import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Contact"];

export default function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string): void => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-display text-2xl tracking-widest text-[#00ff88]">
          AKIRU
        </span>

        {/* Links */}
        <ul className="flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link)}
                className="font-body text-sm text-[#888888] hover:text-[#00ff88] transition-colors duration-300 tracking-widest uppercase relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
