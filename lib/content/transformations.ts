export type TransformationPreview = {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
};

export const transformationPreviews: TransformationPreview[] = [
  {
    id: "protective-braids",
    title: "Protective braid inspiration",
    category: "Braids",
    beforeImage:
      "https://images.pexels.com/photos/33500088/pexels-photo-33500088/free-photo-of-portrait-of-a-smiling-woman-with-afro-hair-outdoors.jpeg?auto=compress&w=900",
    beforeAlt: "Illustrative portrait of a woman wearing her natural afro-textured hair",
    afterImage:
      "https://images.pexels.com/photos/34628927/pexels-photo-34628927/free-photo-of-elegant-side-profile-with-braided-hairstyle-and-earring.jpeg?auto=compress&w=900",
    afterAlt: "Illustrative side portrait showing a braided hairstyle",
  },
  {
    id: "cornrow-braids",
    title: "Cornrow style inspiration",
    category: "Braids",
    beforeImage:
      "https://images.pexels.com/photos/33684140/pexels-photo-33684140/free-photo-of-woman-combing-hair-outdoors-in-floral-dress.jpeg?auto=compress&w=900",
    beforeAlt: "Illustrative photo of a woman combing her natural hair",
    afterImage:
      "https://images.pexels.com/photos/33664383/pexels-photo-33664383/free-photo-of-top-view-of-stylish-braided-hairstyle-on-woman.jpeg?auto=compress&w=900",
    afterAlt: "Illustrative top view of an intricate braided hairstyle",
  },
  {
    id: "bridal-braids",
    title: "Bridal braid inspiration",
    category: "Wedding",
    beforeImage:
      "https://images.pexels.com/photos/11400493/pexels-photo-11400493.jpeg?auto=compress&w=900",
    beforeAlt: "Illustrative portrait of a woman with natural curly hair",
    afterImage:
      "https://images.pexels.com/photos/8919606/pexels-photo-8919606.jpeg?auto=compress&w=900",
    afterAlt: "Illustrative bride wearing a braided wedding hairstyle",
  },
  {
    id: "braided-back-view",
    title: "Braided back-view inspiration",
    category: "Braids",
    beforeImage:
      "https://images.pexels.com/photos/33500088/pexels-photo-33500088/free-photo-of-portrait-of-a-smiling-woman-with-afro-hair-outdoors.jpeg?auto=compress&w=900",
    beforeAlt: "Illustrative portrait of a woman wearing her natural afro-textured hair",
    afterImage:
      "https://images.pexels.com/photos/32426309/pexels-photo-32426309/free-photo-of-back-view-of-woman-with-braided-hairstyle-in-sunlight.jpeg?auto=compress&w=900",
    afterAlt: "Illustrative back view of a woman wearing long braids",
  },
];
