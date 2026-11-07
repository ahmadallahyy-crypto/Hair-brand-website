import type { Metadata } from "next";
import Link from "next/link";
import CachedImage from "../../components/ui/CachedImage";
import PageIntro from "../../components/ui/PageIntro";
import ProductGrid from "../../components/sections/ProductGrid";
import CartSummary from "../../components/sections/CartSummary";
import { products } from "../../lib/content/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse wigs, bundles, and hair care from the Aurelia Hair Studio product edit.",
};

export default function ShopPage() {
  return (
    <>
      <PageIntro title="Good hair starts here.">
        <p>
          Explore products customers can enquire about, and learn how to ask about the products
          used for braiding. Demo prices are shown in naira; confirm actual prices and stock with
          the studio.
        </p>
      </PageIntro>
      <section className="shop-section section-pad shop-page" id="products">
        <div className="shop-collection-heading" data-reveal>
          <h2>Products to shop</h2>
          <p>Ask about current availability, product details, and pricing through WhatsApp.</p>
        </div>
        <div data-reveal>
          <ProductGrid items={products} eager />
        </div>
        <CartSummary />
        <p className="shop-note">
          Product names, photographs, and naira prices shown here are illustrative demo examples,
          not confirmed stock or studio pricing. Use checkout to review your bag. Payment remains
          unavailable until actual product prices, delivery fees, and Paystack are configured.
        </p>
      </section>
      <section className="supplies-section section-pad" data-reveal>
        <div className="supplies-copy">
          <h2>
            Products used
            <br />
            <i>for braiding.</i>
          </h2>
          <p>
            Want to know what the stylist uses for a service, or looking for a product used during
            braiding? Ask the studio. Its confirmed product list can be added here when supplied.
          </p>
          <Link className="button button-green" href="/booking?interest=supply">
            ASK ABOUT BRAIDING PRODUCTS <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="supplies-note">
          <div className="supplies-image">
            <CachedImage
              src="https://images.pexels.com/photos/7440062/pexels-photo-7440062.jpeg?auto=compress&w=1000"
              alt="Illustrative collection of hair-care bottles and styling tools"
              fill
              sizes="(max-width: 780px) 90vw, 34vw"
            />
            <span className="image-status">ILLUSTRATIVE EXAMPLE</span>
          </div>
          <p>Salon-use products are kept separate from products available for customer purchase.</p>
        </div>
      </section>
    </>
  );
}