export type StyleCategory = "Braids" | "Wedding" | "Wig styling";

export type StyleGalleryItem = {
  id: string;
  title: string;
  category: StyleCategory;
  image: string;
  alt: string;
  status: "illustrative" | "studio";
};

export const styleCategories: Array<"All looks" | StyleCategory> = [
  "All looks",
  "Braids",
  "Wedding",
  "Wig styling",
];

export const styleGallery: StyleGalleryItem[] = [
  {
    id: "braided-side-profile",
    title: "Braided side profile",
    category: "Braids",
    image:
      "https://images.pexels.com/photos/34628927/pexels-photo-34628927/free-photo-of-elegant-side-profile-with-braided-hairstyle-and-earring.jpeg?auto=compress&w=1200",
    alt: "Illustrative side portrait with an intricate braided hairstyle",
    status: "illustrative",
  },
  {
    id: "sculpted-braids",
    title: "Sculpted braid detail",
    category: "Braids",
    image:
      "https://images.pexels.com/photos/33664383/pexels-photo-33664383/free-photo-of-top-view-of-stylish-braided-hairstyle-on-woman.jpeg?auto=compress&w=1200",
    alt: "Illustrative top view of an intricate braided hairstyle",
    status: "illustrative",
  },
  {
    id: "braided-back-view",
    title: "Braids from every angle",
    category: "Braids",
    image:
      "https://images.pexels.com/photos/32426309/pexels-photo-32426309/free-photo-of-back-view-of-woman-with-braided-hairstyle-in-sunlight.jpeg?auto=compress&w=1200",
    alt: "Illustrative back view of a woman wearing long braids",
    status: "illustrative",
  },
  {
    id: "bridal-braids",
    title: "Braided wedding style",
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/8919606/pexels-photo-8919606.jpeg?auto=compress&w=1200",
    alt: "Illustrative bride wearing a braided wedding hairstyle",
    status: "illustrative",
  },
  {
    id: "pearl-bridal-braid",
    title: "Pearl-detail bridal braid",
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/29858713/pexels-photo-29858713/free-photo-of-elegant-bridal-hairstyle-with-pearl-accessories.jpeg?auto=compress&w=1200",
    alt: "Illustrative close-up of a bridal braid with pearl accessories",
    status: "illustrative",
  },
  {
    id: "floral-bridal-braid",
    title: "A braid with flowers",
    category: "Wedding",
    image:
      "https://images.pexels.com/photos/2301842/pexels-photo-2301842.jpeg?auto=compress&w=1200",
    alt: "Illustrative braided hairstyle decorated with flowers",
    status: "illustrative",
  },
  {
    id: "melt-lace-wig",
    title: "Melt-lace wig styling",
    category: "Wig styling",
    image:
      "https://images.pexels.com/photos/17362828/pexels-photo-17362828/free-photo-of-woman-in-melt-lace-wig.jpeg?auto=compress&w=1200",
    alt: "Illustrative portrait showing a melt-lace wig style",
    status: "illustrative",
  },
  {
    id: "curly-wig-style",
    title: "Curly wig styling",
    category: "Wig styling",
    image:
      "https://images.pexels.com/photos/6923442/pexels-photo-6923442.jpeg?auto=compress&w=1200",
    alt: "Illustrative studio photo of a woman styling a curly wig",
    status: "illustrative",
  },
];
