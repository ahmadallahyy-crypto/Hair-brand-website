import type { Metadata } from "next";
import PageIntro from "../../components/ui/PageIntro";
import FounderTeamSection from "../../components/sections/FounderTeamSection";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Learn about Aurelia Hair Studio and its personal approach to hair and styling.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="A space to feel like you."
        image={{
          src: "https://images.pexels.com/photos/34628927/pexels-photo-34628927/free-photo-of-elegant-side-profile-with-braided-hairstyle-and-earring.jpeg?auto=compress&w=1200",
          alt: "Illustrative portrait with a braided hairstyle",
          label: "STYLE REFERENCE",
        }}
      >
        <p>
          Aurelia Hair Studio braids and styles hair and offers hair products in Abuja. The studio
          story is being shaped around the people and work behind the brand.
        </p>
      </PageIntro>
      <FounderTeamSection variant="about" />
    </>
  );
}