import Link from "next/link";
import Image from "next/image";
import { transformationPreviews } from "../../lib/content/transformations";

export default function HomeTransformationsSection() {
  return (
    <section className="transformations-section section-pad" id="recent-work">
      <div className="story-heading" data-reveal>
        <div>
          <h2>
            This week&apos;s
            <br />
            <i>braid highlights.</i>
          </h2>
        </div>
        <p>
          Explore each style through a before-and-after pairing. These are illustrative
          references, not verified Aurelia client transformations.
        </p>
      </div>
      <div className="weekly-braid-grid" data-reveal-stagger>
        {transformationPreviews.map((item) => (
          <article className="weekly-braid-card" key={item.id}>
            <div className="weekly-braid-comparison">
              <div className="weekly-braid-photo">
                <Image
                  src={item.beforeImage}
                  alt={item.beforeAlt}
                  fill
                  sizes="(max-width: 780px) 44vw, 21vw"
                  unoptimized
                />
                <span>BEFORE REFERENCE</span>
              </div>
              <div className="weekly-braid-photo">
                <Image
                  src={item.afterImage}
                  alt={item.afterAlt}
                  fill
                  sizes="(max-width: 780px) 44vw, 21vw"
                  unoptimized
                />
                <span>AFTER REFERENCE</span>
              </div>
            </div>
            <div className="weekly-braid-caption">
              <div>
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>
              <Link
                className="text-link"
                href={`/booking?interest=style&item=${encodeURIComponent(item.title)}`}
              >
                ASK ABOUT THIS STYLE <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="weekly-braid-footer">
        <p>
          These photos are separate illustrative references. They do not show the same
          person before and after, or verified Aurelia studio work.
        </p>
        <Link className="text-link" href="/gallery">
          VIEW THE FULL LOOKBOOK <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
