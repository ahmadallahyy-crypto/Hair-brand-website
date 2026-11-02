import Image from "next/image";
import type { ReactNode } from "react";

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
    <section className={`page-intro${image ? " page-intro-with-image" : ""}`}>
      <div className="page-intro-copy">
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
      {image && (
        <div className="page-intro-image">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="eager"
            sizes="(max-width: 780px) 90vw, 42vw"
            unoptimized
          />
          <span className="image-status">{image.label ?? "ILLUSTRATIVE REFERENCE"}</span>
        </div>
      )}
    </section>
  );
}