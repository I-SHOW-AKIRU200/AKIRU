import React from "react";
export default function ContactSection(): React.JSX.Element {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[#00ff88] tracking-[0.4em] uppercase">
            03 / Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <h2 className="reveal font-display text-6xl lg:text-7xl text-[#e8e8e8] leading-none mb-8">
              LET&apos;S
              <br />
              <span className="text-[#00ff88]">BUILD</span>
              <br />
              TOGETHER
            </h2>
            <p className="reveal delay-100 font-body text-[#888888] leading-8 mb-8">
              Have a project in mind? Want to collaborate? I&apos;m always open
              to interesting conversations and new opportunities.
            </p>
            <div className="reveal delay-200 flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#00ff88]/10 flex items-center justify-center border border-[#00ff88]/20 group-hover:bg-[#00ff88]/20 transition-colors">
                <span className="text-[#00ff88] text-sm">@</span>
              </div>
              <span className="font-mono text-sm text-[#888888] group-hover:text-[#00ff88] transition-colors">
                akiru.online
              </span>
            </div>
          </div>

          {/* Right: Terminal-style card */}
          <div className="reveal-right">
            <div className="border border-[#1a1a1a] bg-[#0d0d0d] rounded-sm overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#050505]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="font-mono text-xs text-[#3a3a3a] ml-2">
                  akiru@terminal ~ %
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm leading-7">
                <p>
                  <span className="text-[#00ff88]">$</span>
                  <span className="text-[#888888]"> whoami</span>
                </p>
                <p className="text-[#e8e8e8] ml-4">AKIRU — Fullstack Developer</p>

                <p className="mt-2">
                  <span className="text-[#00ff88]">$</span>
                  <span className="text-[#888888]"> cat skills.txt</span>
                </p>
                <p className="text-[#e8e8e8] ml-4">
                  Next.js, React, TypeScript, Python...
                </p>

                <p className="mt-2">
                  <span className="text-[#00ff88]">$</span>
                  <span className="text-[#888888]"> echo $STATUS</span>
                </p>
                <p className="text-[#00ff88] ml-4">
                  Open to opportunities
                  <span className="animate-blink">_</span>
                </p>

                <p className="mt-2">
                  <span className="text-[#00ff88]">$</span>
                  <span className="text-[#888888]"> curl akiru.online</span>
                </p>
                <p className="text-[#3a3a3a] ml-4">
                  &lt;!-- You&apos;re already here --&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
