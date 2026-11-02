import type { Metadata } from "next";
import type { ReactNode } from "react";
import RevealOnScroll from "../components/layout/RevealOnScroll";
import { CartProvider } from "../components/layout/CartProvider";
import SiteFooter from "../components/layout/Footer";
import SiteHeader from "../components/layout/Header";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "AURELIA — Hair, Art & Expression",
    template: "%s | AURELIA Hair Studio",
  },
  description:
    "Explore hair braiding, styling, hair products, and appointment enquiries at Aurelia Hair Studio in Abuja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&family=Figtree:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <RevealOnScroll />
        </CartProvider>
      </body>
    </html>
  );
}
