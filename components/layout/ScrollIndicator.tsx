"use client";

import { useEffect, useState } from "react";

const radius = 20;
const circumference = 2 * Math.PI * radius;
const visibilityThreshold = 180;

export default function ScrollIndicator() {
  const [scrollPosition, setScrollPosition] = useState({ visible: false, progress: 0 });

  useEffect(() => {
    let frame = 0;

    const updateScrollPosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0
            ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
            : 0;

        setScrollPosition({
          visible: window.scrollY > visibilityThreshold,
          progress,
        });
      });
    };

    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition, { passive: true });
    window.addEventListener("resize", updateScrollPosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updateScrollPosition);
    };
  }, []);

  if (!scrollPosition.visible) return null;

  return (
    <button
      className="scroll-indicator"
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        })
      }
    >
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="scroll-indicator-track" cx="24" cy="24" r={radius} />
        <circle
          className="scroll-indicator-progress"
          cx="24"
          cy="24"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - scrollPosition.progress)}
        />
        <path className="scroll-indicator-arrow" d="m17 26 7-7 7 7" />
      </svg>
    </button>
  );
}
