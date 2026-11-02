import type { Metadata } from "next";
import PageIntro from "../../components/ui/PageIntro";
import BookingForm from "../../components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Appointments & Enquiries",
  description:
    "Send an appointment request or ask Aurelia Hair Studio about services and products.",
};

export default function BookingPage() {
  return (
    <>
      <PageIntro
        title="Let's make something beautiful."
        image={{
          src: "https://images.pexels.com/photos/32426309/pexels-photo-32426309/free-photo-of-back-view-of-woman-with-braided-hairstyle-in-sunlight.jpeg?auto=compress&w=1200",
          alt: "Illustrative back view of a woman wearing long braids",
          label: "STYLE REFERENCE",
        }}
      >
        <p>Share what you have in mind. The studio will confirm availability and next steps.</p>
      </PageIntro>
      <section className="booking-page section-pad">
        <div className="booking-copy">
          <h2>Your next look<br /><i>starts here.</i></h2>
          <p>Use this form for appointment requests, consultations, event styling, or product questions.</p>
          <span className="booking-small">ABUJA · NIGERIA</span>
        </div>
        <BookingForm />
      </section>
    </>
  );
}