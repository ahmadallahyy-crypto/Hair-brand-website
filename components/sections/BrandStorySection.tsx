import Link from "next/link";
import BrandStar from "../ui/BrandStar";

export default function BrandStorySection() {
  return (
    <section className="brand-story" data-reveal>
      <BrandStar className="section-brand-star brand-story-star" />
      <div className="brand-story-lead">
        <h2>
          Your hair is
          <br />
          <i>your expression.</i>
        </h2>
      </div>
      <div className="brand-story-copy">
        <p>
          We braid and style hair for the way you want to show up — whether you are preparing for
          an occasion or choosing a look for everyday life.
        </p>
        <p>
          Find your next style in the studio, then explore hair products for looks you can make
          your own.
        </p>
        <Link className="text-link" href="/about">
          GET TO KNOW THE STUDIO <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
