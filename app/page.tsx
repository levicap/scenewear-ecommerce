import { HeroSection } from "./Home/HeroSection";
import { FeaturedCollections } from "./Home/FeaturedCollections";
import { PromotionsSection } from "./Home/PromotionsSection";
import { TestimonialsSection } from "./Home/TestimonialsSection";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen flex flex-col">
      <HeroSection />
      <FeaturedCollections />
      <PromotionsSection />
      <TestimonialsSection />
    </main>
  );
}