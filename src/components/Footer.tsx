export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-[#1a1a1a] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl tracking-widest text-[#00ff88]">
          AKIRU
        </span>
        <p className="font-mono text-xs text-[#3a3a3a] tracking-widest">
          © {new Date().getFullYear()} akiru.online — All rights reserved
        </p>
        <div className="flex gap-6">
          {["GitHub", "Twitter", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono text-xs text-[#3a3a3a] hover:text-[#00ff88] transition-colors duration-300 tracking-widest uppercase"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
