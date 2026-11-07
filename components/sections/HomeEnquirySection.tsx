import Link from "next/link";
import BrandStar from "../ui/BrandStar";

export default function HomeEnquirySection() {
  return (
    <section className="home-enquiry section-pad">
      <BrandStar className="section-brand-star home-enquiry-star" />
      <div className="home-enquiry-heading" data-reveal>
        <h2>
          Come for the
          <br />
          <i>hair. Stay for you.</i>
        </h2>
        <p>
          Tell us what you have in mind. Send an appointment request or ask a question about a
          product; the studio will confirm the next steps.
        </p>
      </div>
      <div className="home-enquiry-actions" data-reveal>
        <Link className="button button-dark" href="/booking">
          REQUEST AN APPOINTMENT <span aria-hidden="true">↗</span>
        </Link>
        <Link className="text-link" href="/booking?interest=product">
          ASK ABOUT HAIR PRODUCTS <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
