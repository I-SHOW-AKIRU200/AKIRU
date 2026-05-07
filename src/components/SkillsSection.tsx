interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
  color: string;
}

const SKILLS: Skill[] = [
  { name: "Next.js", category: "Framework", level: 95, icon: "▲", color: "#e8e8e8" },
  { name: "React", category: "Library", level: 95, icon: "⚛", color: "#61dafb" },
  { name: "TypeScript", category: "Language", level: 90, icon: "TS", color: "#3178c6" },
  { name: "JavaScript", category: "Language", level: 95, icon: "JS", color: "#f7df1e" },
  { name: "Tailwind CSS", category: "Styling", level: 92, icon: "✦", color: "#38bdf8" },
  { name: "HTML5", category: "Markup", level: 98, icon: "</>" , color: "#e34c26" },
  { name: "CSS", category: "Styling", level: 90, icon: "#", color: "#264de4" },
  { name: "Python", category: "Language", level: 80, icon: "🐍", color: "#3776ab" },
];

export default function SkillsSection(): JSX.Element {
  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Decorative bg glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,255,136,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gradient-to-l from-[#00ff88]/30 to-transparent" />
          <span className="font-mono text-xs text-[#00ff88] tracking-[0.4em] uppercase">
            02 / Skills
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00ff88]/30 to-transparent" />
        </div>

        <h2 className="reveal font-display text-5xl lg:text-6xl text-center text-[#e8e8e8] mb-4">
          TECH ARSENAL
        </h2>
        <p className="reveal delay-100 text-center text-[#888888] font-body mb-16 tracking-widest text-sm uppercase">
          Tools I wield daily
        </p>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-card reveal delay-${Math.min((i % 4 + 1) * 100, 400)} p-6 border border-[#1a1a1a] bg-[#0d0d0d] rounded-sm`}
              data-hover
            >
              {/* Icon */}
              <div
                className="font-mono text-2xl mb-4 w-10 h-10 flex items-center justify-center rounded bg-[#050505] border border-[#1a1a1a]"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <div className="font-body font-semibold text-[#e8e8e8] text-sm mb-1">
                {skill.name}
              </div>
              <div className="font-mono text-[10px] text-[#3a3a3a] tracking-widest uppercase mb-4">
                {skill.category}
              </div>

              {/* Progress bar */}
              <div className="h-0.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, #00ff88, ${skill.color})`,
                  }}
                />
              </div>
              <div className="font-mono text-[10px] text-[#3a3a3a] mt-1 text-right">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="reveal mt-20 overflow-hidden border-y border-[#1a1a1a] py-4">
          <div
            className="flex gap-12 whitespace-nowrap"
            style={{
              animation: "marquee 20s linear infinite",
            }}
          >
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <span
                key={i}
                className="font-display text-2xl text-[#1a1a1a] hover:text-[#00ff88] transition-colors duration-300 cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
