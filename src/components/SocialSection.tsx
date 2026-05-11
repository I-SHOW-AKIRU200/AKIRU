import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

export function SocialSection() {
  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center bg-black z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl w-full flex flex-col items-center gap-20 z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center flex flex-col items-center gap-6"
        >
          <h2
            className="text-4xl md:text-6xl font-light text-white tracking-[0.08em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Initiate Contact
          </h2>
          <div className="w-24 h-[1px] bg-white/15" />
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-2xl">
          <motion.a
            href="https://t.me/AKIRU07"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="glass-panel group relative rounded-3xl p-8 flex flex-col items-center gap-5 hover:shadow-[0_0_50px_rgba(255,255,255,0.04)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <Send className="w-9 h-9 text-white/40 group-hover:text-white/80 transition-colors duration-500" />
            <div className="flex flex-col items-center gap-2">
              <span
                className="text-lg text-white tracking-[0.12em]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Direct Message
              </span>
              <span
                className="text-xs text-white/35 tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                @AKIRU07
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://t.me/ishowakiru7"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="glass-panel group relative rounded-3xl p-8 flex flex-col items-center gap-5 hover:shadow-[0_0_50px_rgba(255,255,255,0.04)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <MessageCircle className="w-9 h-9 text-white/40 group-hover:text-white/80 transition-colors duration-500" />
            <div className="flex flex-col items-center gap-2">
              <span
                className="text-lg text-white tracking-[0.12em]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Community
              </span>
              <span
                className="text-xs text-white/35 tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Group Chat
              </span>
            </div>
          </motion.a>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p
            className="text-white/20 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} AKIRU. Crafted with intent.
          </p>
        </footer>
      </div>
    </section>
  );
}
