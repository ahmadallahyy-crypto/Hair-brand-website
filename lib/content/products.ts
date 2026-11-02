export type Product = {
  id: string;
  name: string;
  demoPriceNgn: number;
  collection: string;
  image: string;
  alt: string;
  description: string;
  featured: boolean;
};

export function formatNairaPrice(amount: number) {
  return `₦${new Intl.NumberFormat("en-NG").format(amount)}`;
}

export const products: Product[] = [
  {
    id: "lace-front-wig",
    name: "Lace-front Wig",
    demoPriceNgn: 85000,
    collection: "Premium collection",
    image:
      "https://images.pexels.com/photos/6923351/pexels-photo-6923351.jpeg?auto=compress&w=1000",
    alt: "Illustrative blonde wig displayed on a mannequin head",
    description: "A polished lace-front look, available to enquire about.",
    featured: true,
  },
  {
    id: "straight-hair-bundles",
    name: "Straight Hair Bundles",
    demoPriceNgn: 65000,
    collection: "Premium collection",
    image:
      "https://images.pexels.com/photos/14730868/pexels-photo-14730868.jpeg?auto=compress&w=1000",
    alt: "Illustrative product photo of straight hair extensions arranged in bundles",
    description: "Smooth, straight bundles for a range of custom styles.",
    featured: false,
  },
  {
    id: "everyday-hair-care",
    name: "Everyday Hair Care",
    demoPriceNgn: 18000,
    collection: "Care essentials",
    image:
      "https://images.pexels.com/photos/7440062/pexels-photo-7440062.jpeg?auto=compress&w=1000",
    alt: "Illustrative collection of hair-care bottles and styling tools",
    description: "A considered edit of hair-care staples for your routine.",
    featured: false,
  },
  {
    id: "curly-wig",
    name: "Curly Wig",
    demoPriceNgn: 95000,
    collection: "Wig collection",
    image:
      "https://images.pexels.com/photos/6923442/pexels-photo-6923442.jpeg?auto=compress&w=1000",
    alt: "Illustrative portrait showing a curly wig style",
    description: "A soft curly style to browse and ask the studio about.",
    featured: false,
  },
];
