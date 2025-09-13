import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, TrendingUp, Award, Users, ShoppingBag } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-bounce hidden lg:block" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-left text-white px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <TrendingUp className="h-5 w-5 text-violet-400" />
              <span className="text-sm font-medium tracking-wider uppercase">Trending Now</span>
              <Sparkles className="h-4 w-4 text-yellow-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block">Luxury</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400">
              Redefined
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-zinc-300 max-w-2xl leading-relaxed">
            Experience the future of fashion with our exclusive collection of premium designs. 
            Where innovation meets elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 h-14 px-8 rounded-xl font-semibold text-lg shadow-2xl shadow-violet-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingBag className="mr-3 h-5 w-5" />
              Explore Collection
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-black  backdrop-blur-sm h-14 px-8 rounded-xl font-semibold text-lg "
            >
              <Play className="mr-3 h-5 w-5 text-black" />
              Watch Story
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-12 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-violet-400 mr-2" />
                <div className="text-3xl font-bold text-white">500K+</div>
              </div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-blue-400 mr-2" />
                <div className="text-3xl font-bold text-white">50+</div>
              </div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
                <div className="text-3xl font-bold text-white">24/7</div>
              </div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}