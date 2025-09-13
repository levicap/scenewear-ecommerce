import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap, Sparkles, Crown, Gem } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Avant-Garde",
    description: "Pushing boundaries with experimental designs",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: "120+ Items",
    icon: Zap,
    gradient: "from-violet-600 to-purple-600"
  },
  {
    id: 2,
    name: "Executive Elite",
    description: "Sophisticated menswear for modern leaders",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: "80+ Items",
    icon: Crown,
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    id: 3,
    name: "Femme Luxe",
    description: "Empowering elegance for the modern woman",
    image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: "150+ Items",
    icon: Gem,
    gradient: "from-pink-600 to-rose-600"
  }
];

export function FeaturedCollections() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-zinc-900 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full px-6 py-3 border border-violet-500/20 mb-8">
            <Sparkles className="h-5 w-5 text-violet-400" />
            <span className="text-sm font-medium text-violet-400 uppercase tracking-wider">Curated Collections</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Signature
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              Collections
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Discover our meticulously crafted collections, each telling a unique story of style, innovation, and luxury
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => {
            const IconComponent = collection.icon;
            return (
              <Card 
                key={collection.id} 
                className={`group cursor-pointer border-0 bg-gradient-to-br ${collection.gradient} p-1 rounded-2xl hover:scale-105 transition-all duration-500 transform ${index === 1 ? 'lg:scale-110' : ''}`}
              >
                <div className="bg-black rounded-2xl overflow-hidden h-full">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <span className="text-sm font-medium text-zinc-300 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                          {collection.items}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3 text-white">{collection.name}</h3>
                      <p className="text-zinc-300 mb-6 leading-relaxed">{collection.description}</p>
                      <Button 
                        variant="secondary" 
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-xl font-semibold"
                      >
                        Explore Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}