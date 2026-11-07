"use client";

import CachedImage from "../ui/CachedImage";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PointerEvent } from "react";
import {
  styleCategories,
  styleGallery,
  type StyleCategory,
} from "../../lib/content/style-gallery";

type StyleGalleryProps = {
  initialCategory?: "All looks" | StyleCategory;
  limit?: number;
};

export default function StyleGallery({
  initialCategory = "All looks",
  limit,
}: StyleGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<
    "All looks" | StyleCategory
  >(initialCategory);
  const filteredItems = useMemo(
    () =>
      activeCategory === "All looks"
        ? styleGallery
        : styleGallery.filter((item) => item.category === activeCategory),
    [activeCategory]
  );
  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  function trackGalleryCursor(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const insetX = Math.min(60, bounds.width / 2);
    const insetY = Math.min(22, bounds.height / 2);
    const x = Math.max(insetX, Math.min(bounds.width - insetX, event.clientX - bounds.left));
    const y = Math.max(insetY, Math.min(bounds.height - insetY, event.clientY - bounds.top));

    event.currentTarget.style.setProperty("--gallery-cursor-x", `${x}px`);
    event.currentTarget.style.setProperty("--gallery-cursor-y", `${y}px`);
  }

  function resetGalleryCursor(event: PointerEvent<HTMLAnchorElement>) {
    event.currentTarget.style.removeProperty("--gallery-cursor-x");
    event.currentTarget.style.removeProperty("--gallery-cursor-y");
  }

  return (
    <>
      {limit === undefined && (
        <>
          <div className="gallery-filters" aria-label="Filter styles">
            {styleCategories.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="image-disclaimer">
            Gallery images are illustrative style references, not verified Aurelia client results.
            Wedding and client portfolio photos should be replaced with images approved by the studio.
          </p>
        </>
      )}
      <div className="style-gallery-grid" aria-live="polite">
        {displayedItems.map((item, index) => (
          <article className="style-gallery-card" key={item.id}>
            <div className="style-gallery-card-head">
              <p>{item.category}</p>
              <Link
                className="style-gallery-card-link"
                href={`/gallery/${item.id}`}
                aria-label={`View ${item.title}`}
              >
                ↗
              </Link>
            </div>
            <Link
              className="style-gallery-image"
              href={`/gallery/${item.id}`}
              aria-label={`View ${item.title}`}
              onPointerMove={trackGalleryCursor}
              onPointerLeave={resetGalleryCursor}
            >
              <CachedImage
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 650px) 90vw, 45vw"
              />
              <span className="image-status">
                {item.status === "studio" ? "AURELIA STUDIO WORK" : "ILLUSTRATIVE REFERENCE"}
              </span>
              <span className="style-gallery-cursor" aria-hidden="true">
                VIEW STYLE
              </span>
            </Link>
            <div className="style-gallery-caption">
              <h2>
                <Link href={`/gallery/${item.id}`}>{item.title}</Link>
              </h2>
              <span className="gallery-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
