import Image from "next/image";
import Link from "next/link";
import { styleGallery } from "../../lib/content/style-gallery";

const weddingImage = styleGallery.find((item) => item.category === "Wedding");

export default function HomeWeddingSection() {
  if (!weddingImage) return null;

  return (
    <section className="wedding-feature">
      <div className="wedding-feature-image">
        <Image
          src={weddingImage.image}
          alt={weddingImage.alt}
          fill
          sizes="(max-width: 780px) 100vw, 52vw"
          unoptimized
        />
        <span className="image-status">ILLUSTRATIVE REFERENCE</span>
      </div>
      <div className="wedding-feature-copy">
        <h2>
          For the day
          <br />
          <i>you’ll remember.</i>
        </h2>
        <p>
          Planning wedding braids or hair for a celebration? Browse inspiration, then tell the
          studio about your date, preferred style, and what you have in mind.
        </p>
        <Link
          className="button button-dark"
          href="/booking?interest=style&item=Wedding%20braids"
        >
          ENQUIRE ABOUT WEDDING HAIR <span aria-hidden="true">↗</span>
        </Link>
        <Link className="text-link" href="/gallery?category=Wedding">
          VIEW WEDDING INSPIRATION <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
