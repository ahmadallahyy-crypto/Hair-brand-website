import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "../../components/ui/PageIntro";
import { faqs } from "../../lib/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers about hair appointments, wedding braids, product enquiries, and the Aurelia style lookbook.",
};

export default function FaqsPage() {
  return (
    <>
      <PageIntro
        title="Good to know before you visit."
        image={{
          src: "https://images.pexels.com/photos/33664383/pexels-photo-33664383/free-photo-of-top-view-of-stylish-braided-hairstyle-on-woman.jpeg?auto=compress&w=1200",
          alt: "Illustrative top view of a detailed braided hairstyle",
          label: "STYLE REFERENCE",
        }}
      >
        <p>Find answers about style enquiries, appointments, wedding braids, and products.</p>
      </PageIntro>
      <section className="faqs-page section-pad">
        <div className="faq-list" data-reveal>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="gallery-booking-cta" data-reveal>
          <p>Still have a question? Send the studio an enquiry.</p>
          <Link className="button button-green" href="/booking">
            CONTACT THE STUDIO <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
