import { motion } from "framer-motion";
import {
  Code2,
  Atom,
  FileCode,
  Palette,
  Braces,
  Terminal,
  Globe,
  Layers,
} from "lucide-react";

const SKILLS = [
  { name: "Next.js", icon: Code2 },
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: FileCode },
  { name: "TailwindCSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "Python", icon: Terminal },
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Layers },
];

export function AboutSection() {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 flex flex-col items-center justify-center bg-black overflow-hidden z-10">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl w-full z-10 flex flex-col gap-24">
        {/* Headline block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <h2
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engineering{" "}
            <br />
            <span className="text-white/30">Elegance.</span>
          </h2>
          <p
            className="text-lg md:text-xl text-white/50 leading-relaxed font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I am AKIRU. A full stack developer obsessed with the intersection
            of cinematic design and performant architecture. Every interface is
            a stage. Every interaction deliberate.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/15 to-transparent" />
            <h3
              className="text-xs tracking-[0.35em] text-white/40 uppercase shrink-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Technical Arsenal
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-white/15 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="glass-panel group relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-default transition-transform duration-500 hover:-translate-y-2 active:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-500" />
                  <Icon className="w-7 h-7 text-white/50 group-hover:text-white/90 transition-colors duration-500" />
                  <span
                    className="text-xs tracking-[0.2em] text-white/60 group-hover:text-white/90 uppercase transition-colors duration-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
