import React from "react";
"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

const ROLES = [
  "Fullstack Developer",
  "Next.js Engineer",
  "React Architect",
  "TypeScript Dev",
  "UI Craftsman",
];

export default function HeroSection(): React.JSX.Element {
  const typed = useTypewriter(ROLES);

  const handleScroll = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,136,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Domain tag */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#1a1a1a] bg-[#0d0d0d]/80 text-[#888888] text-xs tracking-[0.3em] uppercase font-mono"
          style={{
            animation: "fadeUp 0.6s ease forwards",
            opacity: 0,
            animationDelay: "0.1s",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          akiru.online
        </div>

        {/* Main name */}
        <h1
          className="font-display text-[clamp(6rem,18vw,16rem)] leading-none tracking-[0.05em] text-[#e8e8e8] glitch-text mb-4"
          data-text="AKIRU"
          style={{
            animation: "fadeUp 0.8s ease forwards",
            opacity: 0,
            animationDelay: "0.3s",
          }}
        >
          AKIRU
        </h1>

        {/* Typewriter role */}
        <div
          className="h-10 flex items-center justify-center mb-8"
          style={{
            animation: "fadeUp 0.8s ease forwards",
            opacity: 0,
            animationDelay: "0.6s",
          }}
        >
          <span className="font-mono text-[#00ff88] text-xl tracking-widest">
            {typed}
            <span className="animate-blink text-[#00ff88]">_</span>
          </span>
        </div>

        {/* Subtitle */}
        <p
          className="font-body text-[#888888] text-lg max-w-xl mx-auto leading-relaxed mb-12"
          style={{
            animation: "fadeUp 0.8s ease forwards",
            opacity: 0,
            animationDelay: "0.8s",
          }}
        >
          Building modern, performant web experiences from front to back.
          <br />
          Code is craft. Craft is obsession.
        </p>

        {/* CTA buttons */}
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{
            animation: "fadeUp 0.8s ease forwards",
            opacity: 0,
            animationDelay: "1s",
          }}
        >
          <button
            onClick={() => handleScroll("skills")}
            className="relative px-8 py-3 font-mono text-sm tracking-widest uppercase text-[#050505] bg-[#00ff88] overflow-hidden group transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.5)]"
          >
            <span className="relative z-10">View Skills</span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="px-8 py-3 font-mono text-sm tracking-widest uppercase text-[#00ff88] border border-[#00ff88]/40 hover:border-[#00ff88] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          animation: "fadeIn 1s ease forwards",
          opacity: 0,
          animationDelay: "1.5s",
        }}
      >
        <span className="text-[#3a3a3a] text-xs tracking-[0.3em] uppercase font-mono">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00ff88] to-transparent animate-float" />
      </div>
    </section>
  );
}
