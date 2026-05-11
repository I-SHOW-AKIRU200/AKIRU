import { useState, useEffect, useRef } from "react";

const TOTAL_FRAMES = 240;

export function useFrameAnimation() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    let loadedCount = 0;
    let failedCount = 0;
    let cancelled = false;

    const loadFrame = (index: number): Promise<HTMLImageElement> => {
      return new Promise<HTMLImageElement>((resolve) => {
        const img = new Image();
        const paddedIndex = String(index).padStart(3, "0");
        img.src = `/fames/ezgif-frame-${paddedIndex}.webp`;

        img.onload = () => {
          if (!cancelled) {
            loadedCount++;
            setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          }
          resolve(img);
        };

        img.onerror = () => {
          if (!cancelled) failedCount++;
          resolve(img);
        };
      });
    };

    const loadAll = async () => {
      const promises: Promise<HTMLImageElement>[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        promises.push(loadFrame(i));
      }

      const loadedImages = await Promise.all(promises);
      if (cancelled) return;

      framesRef.current = loadedImages;
      setFrames(loadedImages);

      if (failedCount > TOTAL_FRAMES / 2) {
        setHasError(true);
      }
      setIsLoaded(true);
    };

    loadAll();

    // Timeout fallback: show site after 5s even if frames fail
    const timeout = setTimeout(() => {
      if (!cancelled) {
        setIsLoaded(true);
        if (loadedCount === 0) setHasError(true);
      }
    }, 5000);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  return { progress, isLoaded, hasError, frames };
}
