import React from "react";
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor(): React.JSX.Element {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent): void => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);

    let raf: number;
    const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

    const animate = (): void => {
      ringPosRef.current.x = lerp(ringPosRef.current.x, posRef.current.x, 0.12);
      ringPosRef.current.y = lerp(ringPosRef.current.y, posRef.current.y, 0.12);

      dot.style.left = `${posRef.current.x - 4}px`;
      dot.style.top = `${posRef.current.y - 4}px`;
      ring.style.left = `${ringPosRef.current.x - 18}px`;
      ring.style.top = `${ringPosRef.current.y - 18}px`;

      raf = requestAnimationFrame(animate);
    };

    animate();

    const onEnter = (): void => {
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.opacity = "0.8";
      ring.style.marginLeft = "-12px";
      ring.style.marginTop = "-12px";
    };

    const onLeave = (): void => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.5";
      ring.style.marginLeft = "0px";
      ring.style.marginTop = "0px";
    };

    const interactables = document.querySelectorAll<HTMLElement>(
      "a, button, [data-hover]"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
