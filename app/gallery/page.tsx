import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "../../components/ui/PageIntro";
import StyleGallery from "../../components/sections/StyleGallery";
import {
  styleCategories,
  type StyleCategory,
} from "../../lib/content/style-gallery";

export const metadata: Metadata = {
  title: "Style Lookbook",
  description:
    "Browse braiding, wedding hair, and wig styling inspiration from Aurelia Hair Studio in Abuja.",
};

type GalleryPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const { category } = await searchParams;
  const initialCategory = styleCategories.includes(
    category as (typeof styleCategories)[number]
  )
    ? (category as "All looks" | StyleCategory)
    : "All looks";

  return (
    <>
      <PageIntro title="Find a look that feels like you.">
        <p>
          Browse style references for braids, wedding hair, and wig styling. Choose a direction
          and ask the studio about making it work for you.
        </p>
      </PageIntro>
      <section className="gallery-page section-pad">
        <StyleGallery initialCategory={initialCategory} />
        <div className="gallery-booking-cta">
          <p>Have a style in mind for your next occasion?</p>
          <Link className="button button-green" href="/booking">
            ASK ABOUT A STYLE <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
