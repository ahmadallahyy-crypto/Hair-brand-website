"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, studioInfo } from "../../lib/config/navigation";
import BrandStar from "../ui/BrandStar";
import { useCart } from "./CartProvider";

const headerNavigation = navigation.filter((item) => item.href !== "/faqs");

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <div className="announcement-bar">
        <p>
          THE ART OF BEAUTIFUL HAIR <span>—</span> {studioInfo.location.toUpperCase()}
        </p>
      </div>
      <header className="site-header" id="top">
        <Link className="wordmark" href="/" aria-label={`${studioInfo.name} home`}>
          <span className="wordmark-name">
            AURELIA <BrandStar />
          </span>
          <span>HAIR STUDIO</span>
        </Link>
        <nav
          className={`main-nav${menuOpen ? " open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {headerNavigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-utilities">
          <Link
            className="header-cart"
            href="/shop#cart"
            aria-label={`View cart with ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.9-1.4L21 8H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            {itemCount > 0 && <span className="header-cart-count">{itemCount}</span>}
          </Link>
          <Link className="button button-dark header-book" href="/booking">
            BOOK AN APPOINTMENT <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}