"use client";

import { useEffect, useRef, useState } from "react";
import { scrollToTop } from "./SiteScrollMotion";

const radius = 20;
const circumference = 2 * Math.PI * radius;
const visibilityThreshold = 180;

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  const progressCircle = useRef<SVGCircleElement>(null);

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

        if (progressCircle.current) {
          progressCircle.current.style.strokeDashoffset = String(
            circumference * (1 - progress)
          );
        }

        const shouldShow = window.scrollY > visibilityThreshold;
        setVisible((current) => (current === shouldShow ? current : shouldShow));
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

  if (!visible) return null;

  return (
    <button
      className="scroll-indicator"
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="scroll-indicator-track" cx="24" cy="24" r={radius} />
        <circle
          ref={progressCircle}
          className="scroll-indicator-progress"
          cx="24"
          cy="24"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />
        <path className="scroll-indicator-arrow" d="m17 26 7-7 7 7" />
      </svg>
    </button>
  );
}
