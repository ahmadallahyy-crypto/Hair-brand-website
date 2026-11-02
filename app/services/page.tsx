import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "../../components/ui/PageIntro";
import ServiceList from "../../components/sections/ServiceList";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore braiding, wig installation, custom styling, bridal and event hair, and consultations at Aurelia Hair Studio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro title="Your moment in the chair.">
        <p>Come as you are. Find the service that fits your hair, your plans, and your own kind of beautiful.</p>
      </PageIntro>
      <section className="services-section section-pad services-page">
        <div className="services-image">
          <Image
            src="https://images.pexels.com/photos/33664383/pexels-photo-33664383/free-photo-of-top-view-of-stylish-braided-hairstyle-on-woman.jpeg?auto=compress&w=1100"
            alt="Illustrative top view of an intricate braided hairstyle"
            fill
            loading="eager"
            sizes="(max-width: 650px) 90vw, 42vw"
            unoptimized
          />
          <span className="image-status">STYLE REFERENCE</span>
        </div>
        <div className="services-content">
          <h2>Thoughtful care.<br /><i>Beautiful detail.</i></h2>
          <p className="services-lead">Choose a starting point. Appointment details and availability are confirmed with the studio.</p>
          <ServiceList />
          <Link className="button button-green" href="/booking">REQUEST AN APPOINTMENT <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}