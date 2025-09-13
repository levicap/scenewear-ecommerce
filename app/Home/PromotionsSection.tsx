import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Shield, Truck, Headphones, Sparkles, Zap, Award, Clock } from "lucide-react";

export function PromotionsSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-zinc-900 to-black w-full">
      <div className="max-w-7xl mx-auto">
        {/* Main Promotion Banner */}
        <Card className="relative overflow-hidden mb-20 border-0 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 p-1">
          <div className="bg-black rounded-3xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200')"
              }}
            />
            
            <CardContent className="relative z-10 p-12 lg:p-16">
              <div className="max-w-3xl">
                <div className="flex items-center mb-8">
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                    <Sparkles className="h-6 w-6 text-yellow-400" />
                    <span className="text-lg font-semibold text-white">Exclusive Offer</span>
                    <Zap className="h-5 w-5 text-violet-400" />
                  </div>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  Buy 2, Get 1
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Absolutely Free
                  </span>
                </h2>
                
                <p className="text-2xl mb-10 text-zinc-300 leading-relaxed">
                  Mix and match from our entire luxury collection. The perfect opportunity to elevate your wardrobe with premium fashion.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-zinc-100 h-14 px-8 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Gift className="mr-3 h-5 w-5" />
                    Shop Collection
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white/30 text-black  backdrop-blur-sm h-14 px-8 rounded-xl font-bold text-lg"
                  >
                    Terms & Conditions
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 hover:border-violet-500/50 transition-all duration-300 rounded-2xl group hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Express Delivery</h3>
              <p className="text-zinc-400 leading-relaxed">Livraison gratuite le jour même pour les commandes de plus de 600 TND. Emballage premium inclus.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 hover:border-blue-500/50 transition-all duration-300 rounded-2xl group hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Authenticity Guarantee</h3>
              <p className="text-zinc-400 leading-relaxed">100% authentic luxury items with certificate of authenticity.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 hover:border-green-500/50 transition-all duration-300 rounded-2xl group hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Flexible Returns</h3>
              <p className="text-zinc-400 leading-relaxed">60-day return policy with free return shipping and full refund.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 hover:border-pink-500/50 transition-all duration-300 rounded-2xl group hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">VIP Support</h3>
              <p className="text-zinc-400 leading-relaxed">24/7 dedicated support with personal styling consultations.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}