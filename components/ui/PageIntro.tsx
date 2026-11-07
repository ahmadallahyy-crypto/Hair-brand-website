import CachedImage from "./CachedImage";
import type { ReactNode } from "react";
import BrandStar from "./BrandStar";

type PageIntroProps = {
  title: string;
  children: ReactNode;
  image?: {
    src: string;
    alt: string;
    label?: string;
  };
};

export default function PageIntro({ title, children, image }: PageIntroProps) {
  return (
    <section className={`page-intro${image ? " page-intro-with-image" : ""}`} data-reveal>
      <div className="page-intro-copy">
        <h1>{title}</h1>
        <div>{children}</div>
        <BrandStar className="section-brand-star page-intro-star" />
      </div>
      {image && (
        <div className="page-intro-image">
          <CachedImage
            src={image.src}
            alt={image.alt}
            fill
            loading="eager"
            sizes="(max-width: 780px) 90vw, 42vw"
          />
          <span className="image-status">{image.label ?? "ILLUSTRATIVE REFERENCE"}</span>
        </div>
      )}
    </section>
  );
}