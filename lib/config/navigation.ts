export type NavigationItem = {
  href: string;
  label: string;
};

export const studioInfo = {
  name: "AURELIA Hair Studio",
  location: "Abuja, Nigeria",
  tagline: "Beautiful hair. Personal expression.",
};

export const navigation: NavigationItem[] = [
  { href: "/", label: "HOME" },
  { href: "/gallery", label: "LOOKBOOK" },
  { href: "/services", label: "SERVICES" },
  { href: "/shop", label: "SHOP" },
  { href: "/about", label: "THE STUDIO" },
  { href: "/faqs", label: "FAQS" },
];
