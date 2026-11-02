"use client";

import Link from "next/link";
import { formatNairaPrice, products } from "../../lib/content/products";
import { useCart } from "../layout/CartProvider";

export default function CartSummary() {
  const { items, itemCount, removeItem } = useCart();
  const cartProducts = items.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return product ? [{ ...item, product }] : [];
  });
  const productNames = cartProducts
    .map(({ product, quantity }) => `${product.name} x${quantity}`)
    .join(", ");
  const orderHref = `/booking?interest=product&item=${encodeURIComponent(productNames)}`;

  return (
    <section className="cart-summary" id="cart" aria-labelledby="cart-heading">
      <div className="cart-summary-heading">
        <div>
          <h2 id="cart-heading">Your product bag</h2>
          <p>
            {itemCount === 1 ? "1 item selected" : `${itemCount} items selected`}
          </p>
        </div>
        {cartProducts.length > 0 && (
          <Link className="text-link" href="#products">
            CONTINUE BROWSING <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      {cartProducts.length === 0 ? (
        <p className="cart-empty">
          Your bag is empty. Add a product above to start an order enquiry.
        </p>
      ) : (
        <>
          <ul className="cart-items">
            {cartProducts.map(({ product, quantity }) => (
              <li className="cart-item" key={product.id}>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.collection} · Qty {quantity}</p>
                  <span>
                    Demo price: {formatNairaPrice(product.demoPriceNgn)}
                  </span>
                </div>
                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => removeItem(product.id)}
                  aria-label={`Remove ${product.name} from your bag`}
                >
                  REMOVE
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-checkout-note">
            Demo prices are illustrative only; actual prices and stock must be confirmed by the
            studio. This request does not charge you or reserve stock.
          </p>
          <Link className="button button-dark" href={orderHref}>
            ASK TO ORDER <span aria-hidden="true">↗</span>
          </Link>
        </>
      )}
    </section>
  );
}
