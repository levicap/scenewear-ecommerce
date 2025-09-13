import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send, Award, Crown, Star, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-3xl p-1 mb-16">
          <div className="bg-black rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Crown className="h-8 w-8 mr-3 text-yellow-400" />
                <span className="text-2xl font-bold">Join the Elite</span>
                <Star className="h-6 w-6 ml-3 text-yellow-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Exclusive Access to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  Luxury Fashion
                </span>
              </h3>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Be the first to discover new collections, exclusive drops, and receive personalized styling tips from our fashion experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12 rounded-xl backdrop-blur-sm"
                />
                <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 h-12 px-8 rounded-xl font-semibold">
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 shadow-lg">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                scenewear
              </span>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Elevate your style with scenewear – the platform for modern, exclusive, and trendsetting fashion.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-violet-600/20 rounded-xl border border-zinc-800 hover:border-violet-500/50">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-violet-600/20 rounded-xl border border-zinc-800 hover:border-violet-500/50">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-violet-600/20 rounded-xl border border-zinc-800 hover:border-violet-500/50">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-violet-600/20 rounded-xl border border-zinc-800 hover:border-violet-500/50">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center">
              <Globe className="h-5 w-5 mr-2 text-violet-400" />
              Explore
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">New Arrivals</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Designer Collections</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Luxury Brands</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Sale & Offers</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Style Guide</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Size Chart</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              Categories
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Women's Couture</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Men's Executive</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Luxury Accessories</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Designer Shoes</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Premium Bags</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Fine Jewelry</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center">
              <Phone className="h-5 w-5 mr-2 text-blue-400" />
              Connect
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-violet-500/30">
                  <MapPin className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Boutique Centrale</p>
                  <p className="text-zinc-400 text-sm">Avenue Habib Bourguiba, Tunis</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Contact</p>
                  <p className="text-zinc-400 text-sm">+216 71 123 456</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-zinc-400 text-sm">contact@scenewear.tn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-zinc-800 mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 lg:mb-0">
            <Award className="h-5 w-5 text-yellow-400" />
            <p className="text-zinc-400 text-sm">
              © 2025 scenewear. Elevate Your Scene. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
            <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}