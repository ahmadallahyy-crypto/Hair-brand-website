"use client";

import Image from "next/image";
import { useState } from "react";
import {
  formatNairaPrice,
  products,
  type Product,
} from "../../lib/content/products";
import { useCart } from "../layout/CartProvider";

type ProductGridProps = {
  items?: Product[];
  eager?: boolean;
};

export default function ProductGrid({
  items = products,
  eager = false,
}: ProductGridProps) {
  const { addItem } = useCart();
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  function handleAddToCart(productId: string) {
    addItem(productId);
    setAddedProductId(productId);
    window.setTimeout(() => setAddedProductId(null), 1600);
  }

  return (
    <div className="product-grid">
      {items.map((product, index) => (
        <article className="product-card" key={product.name}>
          <div className="product-image">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              loading={eager && index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 780px) 90vw, 44vw"
              unoptimized
            />
            {product.featured && <span className="product-tag">EXAMPLE LISTING</span>}
            <button
              className="product-add-button"
              type="button"
              onClick={() => handleAddToCart(product.id)}
              aria-label={
                addedProductId === product.id
                  ? `${product.name} added to cart`
                  : `Add ${product.name} to cart`
              }
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.9-1.4L21 8H6" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              <span aria-hidden="true">+</span>
            </button>
            <div className="product-image-copy">
              <span className="product-status">ILLUSTRATIVE EXAMPLE</span>
              <div className="product-image-copy-row">
                <h3>{product.name}</h3>
                <span className="product-price">
                  DEMO · {formatNairaPrice(product.demoPriceNgn)}
                </span>
              </div>
            </div>
          </div>
          <div className="product-info">
            <p>{product.collection}</p>
          </div>
          <p className="product-description">{product.description}</p>
        </article>
      ))}
    </div>
  );
}
