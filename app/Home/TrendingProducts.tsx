import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Eye, Flame, TrendingUp, Zap } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const products = [
  {
    id: 1,
    name: "Obsidian Blazer",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 124,
    badge: "Hot",
    badgeColor: "from-red-500 to-orange-500",
    icon: Flame
  },
  {
    id: 2,
    name: "Ethereal Silk Dress",
    price: 189.99,
    image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 98,
    badge: "New",
    badgeColor: "from-violet-500 to-purple-500",
    icon: Zap
  },
  {
    id: 3,
    name: "Urban Minimalist Tee",
    price: 79.99,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 156,
    badge: "Trending",
    badgeColor: "from-blue-500 to-cyan-500",
    icon: TrendingUp
  },
  {
    id: 4,
    name: "Midnight Couture Gown",
    price: 599.99,
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5.0,
    reviews: 87,
    badge: "Luxury",
    badgeColor: "from-yellow-500 to-amber-500",
    icon: Star
  },
  {
    id: 5,
    name: "Neo-Classic Sweater",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 203,
    badge: "Sale",
    badgeColor: "from-green-500 to-emerald-500",
    icon: Zap
  }
];

export function TrendingProducts() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-zinc-900 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full px-6 py-3 border border-red-500/20 mb-6">
              <Flame className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium text-red-400 uppercase tracking-wider">Hot Right Now</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trending
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Products
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              The most coveted pieces that are setting fashion trends worldwide
            </p>
          </div>
          <Button variant="outline" className="hidden lg:flex border-zinc-700 text-black rounded-xl">
            <Eye className="mr-2 h-4 w-4" />
            View All
          </Button>
        </div>
        
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-8 pb-6">
            {products.map((product) => {
              const BadgeIcon = product.icon;
              return (
                <Card key={product.id} className="group cursor-pointer flex-shrink-0 w-80 bg-black border border-zinc-800 hover:border-zinc-700 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10 rounded-2xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className={`absolute top-4 left-4 flex items-center space-x-1 bg-gradient-to-r ${product.badgeColor} text-white border-0 font-semibold px-3 py-1 rounded-full`}>
                      <BadgeIcon className="h-3 w-3" />
                      <span className="text-xs">{product.badge}</span>
                    </div>
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button size="icon" className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black rounded-xl font-semibold">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1 text-white">{product.rating}</span>
                        <span className="text-sm text-zinc-500 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-3 text-white group-hover:text-violet-400 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-zinc-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="bg-zinc-800" />
        </ScrollArea>
      </div>
    </section>
  );
}