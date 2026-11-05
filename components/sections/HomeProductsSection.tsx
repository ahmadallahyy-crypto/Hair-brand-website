import Link from "next/link";
import ProductGrid from "./ProductGrid";
import BrandStar from "../ui/BrandStar";
import { products } from "../../lib/content/products";

export default function HomeProductsSection() {
  return (
    <section className="shop-section section-pad home-products" id="products">
      <BrandStar className="section-brand-star home-products-star" />
      <div className="story-heading" data-reveal>
        <div>
          <h2>
            Aurelia
            <br />
            <i>products.</i>
          </h2>
        </div>
        <p>
          Shop the studio&apos;s hair edit. Add products to your bag, then ask Aurelia to confirm
          current availability and pricing.
        </p>
      </div>
      <div data-reveal-stagger>
        <ProductGrid items={products.slice(0, 4)} />
      </div>
      <div className="shop-bottom">
        <p>
          Product names, images, and naira demo prices are illustrative only. Confirm actual
          prices and stock with the studio.
        </p>
        <Link className="button button-outline" href="/shop">
          BROWSE ALL PRODUCTS <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
