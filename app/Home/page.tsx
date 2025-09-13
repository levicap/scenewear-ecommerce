import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { FeaturedCollections } from './FeaturedCollections';
import { TrendingProducts } from './TrendingProducts';
import { TestimonialsSection } from './TestimonialsSection';
import { PromotionsSection } from './PromotionsSection';
import { Footer } from './Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      
      <main className="w-full">
        <HeroSection />
        <FeaturedCollections />
        <TrendingProducts />
        <TestimonialsSection />
        <PromotionsSection />
      </main>
  
    </div>
  );
}

export default App;