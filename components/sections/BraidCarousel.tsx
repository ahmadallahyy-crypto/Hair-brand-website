"use client";

import CachedImage from "../ui/CachedImage";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import { styleGallery } from "../../lib/content/style-gallery";

const slideDuration = 2800;

export default function BraidCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const pointerInteraction = useRef(false);
  const activeItem = styleGallery[activeIndex];
  const previousItem =
    previousIndex === null ? null : styleGallery[previousIndex];
  const isPaused = isHovered || hasFocus || reducedMotion;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setPreviousIndex(reducedMotion ? null : activeIndex);
        setSlideDirection("next");
        setActiveIndex((activeIndex + 1) % styleGallery.length);
      }
    }, slideDuration);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, reducedMotion]);

  function showPrevious() {
    setPreviousIndex(reducedMotion ? null : activeIndex);
    setSlideDirection("previous");
    setActiveIndex((activeIndex - 1 + styleGallery.length) % styleGallery.length);
  }

  function showNext() {
    setPreviousIndex(reducedMotion ? null : activeIndex);
    setSlideDirection("next");
    setActiveIndex((activeIndex + 1) % styleGallery.length);
  }

  function showSlide(index: number) {
    if (index === activeIndex) return;
    setPreviousIndex(reducedMotion ? null : activeIndex);
    setSlideDirection(index >= activeIndex ? "next" : "previous");
    setActiveIndex(index);
  }

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
      setHasFocus(false);
    }
  }

  return (
    <section
      className="hero home-hero braid-carousel"
      role="region"
      aria-label="Featured hairstyle inspiration"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDownCapture={() => {
        pointerInteraction.current = true;
        setHasFocus(false);
      }}
      onKeyDownCapture={() => {
        pointerInteraction.current = false;
        setHasFocus(true);
      }}
      onFocusCapture={() => {
        if (!pointerInteraction.current) setHasFocus(true);
      }}
      onBlurCapture={handleBlur}
    >
      {previousItem && !reducedMotion && (
        <div
          key={`previous-${previousItem.id}-${activeItem.id}`}
          className={`braid-carousel-image braid-carousel-image--exit-${slideDirection}`}
          aria-hidden="true"
        >
          <CachedImage
            src={previousItem.image}
            alt=""
            fill
            sizes="100vw"
          />
        </div>
      )}
      <div
        key={`current-${activeItem.id}`}
        className={`braid-carousel-image braid-carousel-image--current braid-carousel-image--enter-${slideDirection}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${styleGallery.length}: ${activeItem.title}`}
      >
        <CachedImage
          src={activeItem.image}
          alt={activeItem.alt}
          fill
          priority={activeIndex === 0}
          sizes="100vw"
        />
      </div>
      <div className="hero-image-shade" aria-hidden="true" />
      <div className="hero-cta-row">
        <Link className="hero-lookbook-link" href="/gallery">
          EXPLORE THE LOOKBOOK <span aria-hidden="true">↗</span>
        </Link>
        <Link
          className="button button-green"
          href={`/booking?interest=style&item=${encodeURIComponent(activeItem.title)}`}
        >
          ASK ABOUT THIS STYLE <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="hero-slide-copy">
        <div className="hero-slide-details">
        <h1 className="hero-slide-title">{activeItem.title}</h1>
          <p className="hero-slide-description">
            {activeItem.category} · Find a look you love, then tell us how you want to make it your own.
          </p>
        </div>
      </div>
      <div className="hero-slider-footer">
        <a className="hero-scroll-link" href="#recent-work">
          SCROLL TO RECENT WORK
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4v15m-7-7 7 7 7-7" />
          </svg>
        </a>
        <div className="hero-slider-controls" aria-label="Style slides">
          <button type="button" onClick={showPrevious} aria-label="Show previous style">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5m7 7-7-7 7-7" />
            </svg>
          </button>
          <div className="hero-slide-indicators">
            {styleGallery.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={index === activeIndex ? "active" : ""}
                aria-label={`Show slide ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
          <span className="hero-slide-count" aria-live="off">
            {String(activeIndex + 1).padStart(2, "0")} / {String(styleGallery.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={showNext} aria-label="Show next style">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
