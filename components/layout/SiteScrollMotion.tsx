"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let activeLenis: Lenis | null = null;

export function scrollToTop() {
  if (activeLenis) {
    activeLenis.scrollTo(0);
    return;
  }

  window.scrollTo({ top: 0, behavior: "instant" });
}

export default function SiteScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        lerp: 0.14,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.82,
        anchors: true,
      });
      activeLenis = lenis;

      const updateScroll = () => ScrollTrigger.update();
      const updateLenis = (time: number) => lenis.raf(time * 1000);

      lenis.on("scroll", updateScroll);
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      const revealItems = gsap.utils.toArray<HTMLElement>("main [data-reveal]");
      const sectionsWithoutReveal = gsap
        .utils
        .toArray<HTMLElement>("main section")
        .filter(
          (section) =>
            !section.classList.contains("braid-carousel") &&
            !section.hasAttribute("data-reveal") &&
            !section.querySelector("[data-reveal]")
        );

      [...revealItems, ...sectionsWithoutReveal].forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0.25, y: 52 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "top 48%",
              scrub: true,
            },
          }
        );
      });

      gsap.utils
        .toArray<HTMLElement>("main .cached-image")
        .filter((image) => !image.closest(".braid-carousel-image, .weekly-braid-photo"))
        .forEach((image, index) => {
          gsap.fromTo(
            image,
            {
              xPercent: index % 2 === 0 ? -12 : 12,
              scale: 1.04,
              autoAlpha: 0.72,
            },
            {
              xPercent: 0,
              scale: 1,
              autoAlpha: 1,
              ease: "none",
              scrollTrigger: {
                trigger: image.parentElement ?? image,
                start: "top 96%",
                end: "top 52%",
                scrub: true,
              },
            }
          );
        });

      gsap.utils
        .toArray<HTMLElement>("main .weekly-braid-comparison")
        .forEach((comparison) => {
          const photos = comparison.querySelectorAll<HTMLElement>(".weekly-braid-photo");
          const [before, after] = photos;
          if (!before || !after) return;

          gsap.fromTo(
            before,
            { xPercent: -28, scale: 0.97 },
            {
              xPercent: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: comparison,
                start: "top 92%",
                end: "top 36%",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            after,
            { xPercent: 28, scale: 0.97 },
            {
              xPercent: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: comparison,
                start: "top 92%",
                end: "top 36%",
                scrub: true,
              },
            }
          );
        });

      ScrollTrigger.refresh();

      return () => {
        lenis.off("scroll", updateScroll);
        lenis.destroy();
        if (activeLenis === lenis) activeLenis = null;
        gsap.ticker.remove(updateLenis);
        gsap.ticker.lagSmoothing(500, 33);
      };
    });

    return () => media.revert();
  }, [pathname]);

  return null;
}
