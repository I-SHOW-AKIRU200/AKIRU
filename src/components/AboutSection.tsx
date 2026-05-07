import React from "react";
export default function AboutSection(): React.JSX.Element {
  const stats = [
    { value: "Full", label: "Stack Coverage" },
    { value: "∞", label: "Lines of Code" },
    { value: "100%", label: "Type Safe" },
    { value: "0ms", label: "Tolerance for Bugs" },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[#00ff88] tracking-[0.4em] uppercase">
            01 / About
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <div>
            <h2 className="reveal font-display text-6xl lg:text-7xl text-[#e8e8e8] leading-none mb-8">
              CRAFTING
              <br />
              <span className="text-[#00ff88]">DIGITAL</span>
              <br />
              REALITY
            </h2>
            <p className="reveal delay-100 font-body text-[#888888] text-base leading-8 mb-6">
              I&apos;m <span className="text-[#e8e8e8] font-medium">AKIRU</span> — a Fullstack Developer
              who builds end-to-end web applications with a relentless focus on
              performance, design, and developer experience.
            </p>
            <p className="reveal delay-200 font-body text-[#888888] text-base leading-8">
              From pixel-perfect frontends to robust backend architectures, I work
              across the entire stack — translating ideas into fast, beautiful,
              and maintainable products.
            </p>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal-right delay-${(i + 1) * 100} p-6 border border-[#1a1a1a] bg-[#0d0d0d] relative overflow-hidden group hover:border-[#00ff88]/30 transition-colors duration-300`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#00ff88]/3 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />
                <div className="font-display text-5xl text-[#00ff88] mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-[#3a3a3a] tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
