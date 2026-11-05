"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import { styleGallery } from "../../lib/content/style-gallery";

const slideDuration = 6500;

export default function BraidCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const pointerInteraction = useRef(false);
  const activeItem = styleGallery[activeIndex];
  const isPaused = userPaused || isHovered || hasFocus || reducedMotion;

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
        setActiveIndex((index) => (index + 1) % styleGallery.length);
      }
    }, slideDuration);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + styleGallery.length) % styleGallery.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % styleGallery.length);
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
      <div
        className="braid-carousel-image"
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${styleGallery.length}: ${activeItem.title}`}
      >
        <Image
          key={activeItem.id}
          src={activeItem.image}
          alt={activeItem.alt}
          fill
          priority={activeIndex === 0}
          sizes="100vw"
          unoptimized
        />
        <div className="hero-image-shade" aria-hidden="true" />
      </div>
      <div
        key={activeItem.id}
        className={`hero-slide-copy ${activeIndex % 2 === 0 ? "hero-slide-copy--right" : "hero-slide-copy--left"}`}
      >
        <h1>
          Braids made
          <br />
          <i>personal.</i>
        </h1>
        <h2>{activeItem.title}</h2>
        <p className="hero-slide-description">
          {activeItem.category} · Find a look you love, then tell us how you want to make it your own.
        </p>
        <div className="hero-actions">
          <Link
            className="button button-green"
            href={`/booking?interest=style&item=${encodeURIComponent(activeItem.title)}`}
          >
            ASK ABOUT THIS STYLE <span aria-hidden="true">↗</span>
          </Link>
          <Link className="hero-lookbook-link" href="/gallery">
            EXPLORE THE LOOKBOOK <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <span className="hero-image-status">
        {activeItem.status === "studio" ? "AURELIA STUDIO WORK" : "ILLUSTRATIVE STYLE REFERENCE"}
      </span>
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
                onClick={() => setActiveIndex(index)}
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
          {!reducedMotion && (
            <button
              type="button"
              className="hero-autoplay-toggle"
              onClick={() => setUserPaused((paused) => !paused)}
              aria-label={userPaused ? "Play automatic slides" : "Pause automatic slides"}
            >
              {userPaused ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 6 10 6-10 6z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 6v12m8-12v12" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
