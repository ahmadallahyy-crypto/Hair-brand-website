import BrandStorySection from "../components/sections/BrandStorySection";
import HomeFaq from "../components/sections/HomeFaq";
import HomeEnquirySection from "../components/sections/HomeEnquirySection";
import HomeHero from "../components/sections/HomeHero";
import HomeProductsSection from "../components/sections/HomeProductsSection";
import HomeServicesSection from "../components/sections/HomeServicesSection";
import HomeWeddingSection from "../components/sections/HomeWeddingSection";
import FounderTeamSection from "../components/sections/FounderTeamSection";
import HomePortfolioSection from "../components/sections/HomePortfolioSection";
import HomeTransformationsSection from "../components/sections/HomeTransformationsSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTransformationsSection />
      <HomeProductsSection />
      <HomePortfolioSection />
      <BrandStorySection />
      <HomeServicesSection />
      <HomeWeddingSection />
      <FounderTeamSection />
      <HomeFaq />
      <HomeEnquirySection />
    </>
  );
}
