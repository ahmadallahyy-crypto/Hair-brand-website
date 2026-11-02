import Link from "next/link";
import { faqs } from "../../lib/content/faqs";

export default function HomeFaq() {
  return (
    <section className="home-faq section-pad">
      <div className="faq-intro">
        <h2>
          A few things
          <br />
          <i>you may wonder.</i>
        </h2>
        <p>
          Need help choosing between a style enquiry and product question? Start here, or message
          the studio directly.
        </p>
        <Link className="text-link" href="/faqs">
          ALL FREQUENTLY ASKED QUESTIONS <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="faq-list">
        {faqs.slice(0, 4).map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
