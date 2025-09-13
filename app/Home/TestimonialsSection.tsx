import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Verified, Heart, ShoppingBag, Crown } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Yosra Ben Ali",
    role: "Fashion Influencer",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    content: "FashionLux has completely transformed my wardrobe. The quality is unmatched, and every piece feels like it was made just for me. Their attention to detail is extraordinary.",
    verified: true,
    purchases: 24,
  location: "Tunis, Tunisie"
  },
  {
    id: 2,
    name: "Karim Bouaziz",
    role: "CEO & Style Enthusiast",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    content: "As someone who values both style and substance, FashionLux delivers on every front. Their executive collection is perfect for the modern professional who refuses to compromise.",
    verified: true,
    purchases: 18,
  location: "Sfax, Tunisie"
  },
  {
    id: 3,
    name: "Amal Cherif",
    role: "Creative Director",
    avatar: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    content: "The avant-garde collection speaks to my soul. Each piece is a work of art that pushes boundaries while maintaining elegance. FashionLux understands true luxury.",
    verified: true,
    purchases: 31,
  location: "Sousse, Tunisie"
  },
  {
    id: 4,
    name: "Mehdi Trifi",
    role: "Fashion Photographer",
    avatar: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    content: "Working in fashion, I see countless brands, but FashionLux stands apart. The craftsmanship, the vision, the execution - everything is flawless. My go-to for premium pieces.",
    verified: true,
    purchases: 15,
  location: "Bizerte, Tunisie"
  },
  {
    id: 5,
    name: "Fatma Gharsallah",
    role: "Luxury Lifestyle Blogger",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    content: "FashionLux isn't just clothing - it's an experience. From the moment you browse their collection to wearing their pieces, everything exudes luxury and sophistication.",
    verified: true,
    purchases: 27,
  location: "Gabès, Tunisie"
  },
  {
    id: 6,
    name: "Houssem Rebai",
    role: "Investment Banker",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    content: "Quality that justifies the investment. Every piece from FashionLux has become a staple in my wardrobe. The customer service is exceptional, and the fit is always perfect.",
    verified: true,
    purchases: 22,
  location: "Monastir, Tunisie"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-zinc-900 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full px-6 py-3 border border-pink-500/20 mb-8">
            <Heart className="h-5 w-5 text-pink-400" />
            <span className="text-sm font-medium text-pink-400 uppercase tracking-wider">Customer Love</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              VIP Clients Say
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Rejoignez des milliers de clients tunisiens qui ont élevé leur style avec scenewear
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`group cursor-pointer bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10 rounded-2xl overflow-hidden ${index === 2 ? 'lg:scale-105' : ''}`}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-8 w-8 text-pink-400/60" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <p className="text-zinc-300 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-14 w-14 border-2 border-pink-500/30">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-rose-500 text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Verified className="h-4 w-4 text-blue-400" />
                      )}
                      <Crown className="h-4 w-4 text-yellow-400" />
                    </div>
                    <p className="text-sm text-zinc-400 mb-1">{testimonial.role}</p>
                    <p className="text-xs text-zinc-500">{testimonial.location}</p>
                  </div>
                </div>
                
                {/* Purchase Stats */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-zinc-700">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="h-4 w-4 text-violet-400" />
                    <span className="text-sm text-zinc-400">{testimonial.purchases} purchases</span>
                  </div>
                  <div className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">
                    VIP Member
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-sm text-zinc-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-sm text-zinc-400">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-zinc-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-sm text-zinc-400">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}