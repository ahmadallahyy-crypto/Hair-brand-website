import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CachedImage from "../../../components/ui/CachedImage";
import { styleGallery } from "../../../lib/content/style-gallery";

type StyleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function findStyle(slug: string) {
  return styleGallery.find((item) => item.id === slug);
}

export function generateStaticParams() {
  return styleGallery.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: StyleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = findStyle(slug);

  return {
    title: item ? item.title : "Style not found",
    description: item
      ? `${item.category} inspiration from the Aurelia Hair Studio lookbook.`
      : "This style is not available in the Aurelia Hair Studio lookbook.",
  };
}

export default async function StyleDetailPage({ params }: StyleDetailPageProps) {
  const { slug } = await params;
  const item = findStyle(slug);

  if (!item) notFound();

  return (
    <article className="style-detail section-pad">
      <Link className="style-detail-back" href="/gallery">
        <span aria-hidden="true">←</span> BACK TO LOOKBOOK
      </Link>
      <div className="style-detail-layout" data-reveal>
        <div className="style-detail-image">
          <CachedImage
            src={item.image}
            alt={item.alt}
            fill
            priority
            sizes="(max-width: 780px) 90vw, 55vw"
          />
          <span className="image-status">
            {item.status === "studio" ? "AURELIA STUDIO WORK" : "ILLUSTRATIVE REFERENCE"}
          </span>
        </div>
        <div className="style-detail-copy">
          <p>{item.category}</p>
          <h1>{item.title}</h1>
          <p>
            Use this look as a starting point for a conversation about your next style. Share what
            you love about it and ask the studio about making it work for you.
          </p>
          <Link
            className="button button-green"
            href={`/booking?interest=style&item=${encodeURIComponent(item.title)}`}
          >
            ASK ABOUT THIS STYLE <span aria-hidden="true">↗</span>
          </Link>
          <p className="style-detail-note">
            This image is an illustrative style reference, not a verified Aurelia client result.
          </p>
        </div>
      </div>
    </article>
  );
}
