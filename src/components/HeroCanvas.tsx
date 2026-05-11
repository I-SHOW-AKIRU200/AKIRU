import { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroCanvasProps {
  frames: HTMLImageElement[];
  hasError: boolean;
}

export function HeroCanvas({ frames, hasError }: HeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastFrameIndex = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback(
    (index: number) => {
      if (hasError || !frames.length || !canvasRef.current) return;
      if (index === lastFrameIndex.current) return;
      lastFrameIndex.current = index;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = frames[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.min(cw / iw, ch / ih) * 0.92;
      const w = iw * scale;
      const h = ih * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, w, h);
    },
    [frames, hasError]
  );

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      lastFrameIndex.current = -1;
      const idx = Math.floor(scrollYProgress.get() * (frames.length - 1));
      drawFrame(Math.max(0, idx));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, scrollYProgress, frames.length]);

  // Scroll → frame
  useEffect(() => {
    if (hasError || !frames.length) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        frames.length - 1,
        Math.max(0, Math.floor(latest * frames.length))
      );
      requestAnimationFrame(() => drawFrame(frameIndex));
    });

    return () => unsubscribe();
  }, [scrollYProgress, frames, drawFrame, hasError]);

  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [1, 0, 0, 0]
  );
  const yText = useTransform(scrollYProgress, [0, 0.15], [0, -80]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        {/* BMW canvas or fallback gradient */}
        {hasError || !frames.length ? (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(40,40,40,0.8),rgba(0,0,0,1))]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_30%_60%,rgba(30,30,30,0.6),transparent)] animate-pulse" />
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
        )}

        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

        {/* Hero text overlay */}
        <motion.div
          style={{ opacity: opacityText, y: yText }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
        >
          <div className="glass-panel px-10 py-10 rounded-3xl flex flex-col items-center gap-5 relative overflow-hidden max-w-sm w-full mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <h1
              className="text-6xl md:text-8xl font-bold text-white tracking-[0.12em] drop-shadow-2xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              AKIRU
            </h1>
            <p
              className="text-base md:text-lg tracking-[0.35em] text-white/60 uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Full Stack Developer
            </p>
            <div className="w-16 h-[1px] bg-white/20" />
            <p
              className="text-xs tracking-[0.2em] text-white/40 uppercase text-center leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Crafting the future,<br />one commit at a time
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 pointer-events-none">
          <span
            className="text-[10px] tracking-[0.3em] text-white uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
