"use client";

import { useState, useEffect } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000
): string {
  const [displayText, setDisplayText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          if (displayText.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          if (displayText.length - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}
