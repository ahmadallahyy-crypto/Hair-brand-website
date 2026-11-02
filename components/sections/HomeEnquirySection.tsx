import Link from "next/link";

export default function HomeEnquirySection() {
  return (
    <section className="home-enquiry section-pad">
      <div className="home-enquiry-heading">
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
      <div className="home-enquiry-actions">
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
