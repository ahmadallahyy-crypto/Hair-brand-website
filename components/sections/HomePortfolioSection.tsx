import Link from "next/link";
import StyleGallery from "./StyleGallery";
import BrandStar from "../ui/BrandStar";

export default function HomePortfolioSection() {
  return (
    <section className="work-section section-pad home-portfolio" id="work">
      <BrandStar className="section-brand-star home-portfolio-star" />
      <div className="story-heading" data-reveal>
        <div>
          <h2>
            Find your next
            <br />
            <i>favourite style.</i>
          </h2>
        </div>
        <p>
          Browse braids, wedding hair, and wig styles. Choose a look you love and ask the studio
          about adapting it for you.
        </p>
      </div>
      <StyleGallery limit={4} />
      <div className="home-lookbook-cta">
        <Link className="text-link" href="/services">
          EXPLORE SERVICES <span aria-hidden="true">↗</span>
        </Link>
        <Link className="text-link" href="/gallery">
          OPEN FULL LOOKBOOK <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
