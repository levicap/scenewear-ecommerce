import { Search, ShoppingCart, Heart, User, Menu, Bell, Globe, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/20 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
      <div className="w-full flex h-20 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <a href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 shadow-lg">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              FashionLux
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group">
            Collections
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group">
            New Arrivals
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group">
            Brands
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group">
            Sale
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-12">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
            <Input
              placeholder="Search luxury fashion..."
              className="pl-12 pr-4 h-12 bg-zinc-900/50 border-zinc-700/50 text-white placeholder:text-zinc-400 focus:border-violet-500/50 focus:ring-violet-500/20 rounded-xl"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative text-white/80 hover:text-white hover:bg-zinc-800/50 rounded-xl">
            <Globe className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative text-white/80 hover:text-white hover:bg-zinc-800/50 rounded-xl">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500"
            >
              2
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative text-white/80 hover:text-white hover:bg-zinc-800/50 rounded-xl">
            <Heart className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500"
            >
              5
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative text-white/80 hover:text-white hover:bg-zinc-800/50 rounded-xl">
            <ShoppingCart className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500"
            >
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-zinc-800/50 rounded-xl">
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white/80 hover:text-white hover:bg-zinc-800/50 rounded-xl">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] bg-black border-zinc-800">
              <nav className="flex flex-col space-y-6 mt-8">
                <a href="#" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">Home</a>
                <a href="#" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">Collections</a>
                <a href="#" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">New Arrivals</a>
                <a href="#" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">Brands</a>
                <a href="#" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">Sale</a>
                <div className="pt-4">
                  <Input placeholder="Search products..." className="bg-zinc-900 border-zinc-700 text-white" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}