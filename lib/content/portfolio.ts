export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "The Soft Glam",
    category: "Wig installation · Finishing",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    alt: "Illustrative portrait for a soft glam hairstyle",
  },
  {
    title: "Effortless Volume",
    category: "Custom styling",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
    alt: "Illustrative portrait for a natural hair look",
  },
  {
    title: "The Modern Muse",
    category: "Glam · Event hair",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    alt: "Illustrative portrait for an event hairstyle",
  },
];
