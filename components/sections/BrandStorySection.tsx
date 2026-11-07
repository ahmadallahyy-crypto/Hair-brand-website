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
          At Aurelia, we create beautiful braids and styles for the moments that matter and the
          everyday. Our premium hair studio in Abuja is here to help you find a look that feels
          like you.
        </p>
        <p>
          Explore hair products and inspiration for your next look.
        </p>
        <Link className="text-link" href="/about">
          GET TO KNOW THE STUDIO <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
