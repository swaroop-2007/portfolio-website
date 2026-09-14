"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A small original geometric bot glyph whose eyes and head tilt track the
 * cursor — a lightweight, dependency-free stand-in for a 3D mouse-follow
 * effect. Disabled under prefers-reduced-motion.
 */
export function MouseBot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: MouseEvent) => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = event.clientX - cx;
        const dy = event.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(dist, 500) / 500;
        setTilt({ x: (dx / dist) * reach, y: (dy / dist) * reach });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const headRotate = tilt.x * 6;
  const eyeShiftX = tilt.x * 3;
  const eyeShiftY = tilt.y * 2;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 border border-ink/20 bg-paper flex items-center justify-center"
    >
      <svg
        width="65%"
        height="65%"
        viewBox="0 0 100 100"
        style={{ transform: `rotate(${headRotate}deg)`, transition: "transform 150ms ease-out" }}
      >
        <line x1="50" y1="4" x2="50" y2="16" stroke="var(--color-ink)" strokeWidth="2" strokeOpacity="0.6" />
        <circle cx="50" cy="4" r="3" fill="var(--color-transform)" />
        <rect x="18" y="16" width="64" height="46" rx="6" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeOpacity="0.7" />
        <circle cx="37" cy="39" r="9" fill="none" stroke="var(--color-source)" strokeWidth="1.5" />
        <circle cx="63" cy="39" r="9" fill="none" stroke="var(--color-source)" strokeWidth="1.5" />
        <circle cx={37 + eyeShiftX} cy={39 + eyeShiftY} r="3.5" fill="var(--color-source)" />
        <circle cx={63 + eyeShiftX} cy={39 + eyeShiftY} r="3.5" fill="var(--color-source)" />
        <line x1="38" y1="54" x2="62" y2="54" stroke="var(--color-ink)" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
        <rect x="28" y="66" width="44" height="20" rx="4" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeOpacity="0.4" />
      </svg>
      <span aria-hidden className="absolute top-1 right-1 size-1.5 rounded-full bg-served" />
    </div>
  );
}
