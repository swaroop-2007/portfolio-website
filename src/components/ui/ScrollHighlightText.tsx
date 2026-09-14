"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollHighlightTextProps {
  text: string;
  className?: string;
}

/**
 * Scrubs each word from dim to fully lit as the block scrolls through a
 * fixed window of the viewport — a continuous, scroll-linked effect,
 * distinct from Reveal.tsx's reveal-once-on-enter behavior.
 */
export function ScrollHighlightText({ text, className = "" }: ScrollHighlightTextProps) {
  const words = text.split(" ");
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.35;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const isActive = progress * words.length > i;
        return (
          <span
            key={`${word}-${i}`}
            className="transition-colors duration-200"
            style={{
              color: isActive ? "var(--color-ink)" : "color-mix(in srgb, var(--color-ink) 30%, transparent)",
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
