import Link from "next/link";
import ServiceList from "./ServiceList";
import BrandStar from "../ui/BrandStar";

export default function HomeServicesSection() {
  return (
    <section className="home-services section-pad">
      <BrandStar className="section-brand-star home-services-star" />
      <div className="story-heading" data-reveal>
        <div>
          <h2>
            Made for your
            <br />
            <i>next chapter.</i>
          </h2>
        </div>
        <p>
          From braids to event styling, choose a starting point. Share your plans and the studio
          will confirm availability.
        </p>
      </div>
      <ServiceList />
      <Link className="button button-green" href="/booking">
        REQUEST A SESSION <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
