"use client"

import { Separator } from "@/components/ui/separator"


import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Sparkles,
  Zap,
  Crown,
  Gem,
  Eye,
  ShoppingBag,
  Camera,
  Palette,
  Ruler,
  Info,
  MessageCircle,
  ThumbsUp,
  Calendar,
  Scissors,
  Wand2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const productImages = [
  "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&h=800&q=80",
  "https://images.unsplash.com/photo-1591369822091-8b550f27d4d3?auto=format&fit=crop&w=600&h=800&q=80",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&h=800&q=80",
  "https://images.unsplash.com/photo-1572804013305-535a3d5be02a?auto=format&fit=crop&w=600&h=800&q=80",
  "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?auto=format&fit=crop&w=600&h=800&q=80",
  "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&h=800&q=80",
]

const relatedProducts = [
  {
    id: 2,
  name: "Robe Carthage Dorée",
  price: 13900,
  image: "https://images.unsplash.com/photo-1572804013305-535a3d5be02a?auto=format&fit=crop&w=300&h=400&q=80",
  rating: 4.8,
  isExclusive: true,
  designer: "Atelier Tunis",
  rarity: "Exclusive",
  },
  {
    id: 3,
  name: "Caftan Sidi Bou Said",
  price: 5800,
  image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=300&h=400&q=80",
  rating: 4.7,
  isExclusive: false,
  designer: "Maison Sidi Bou",
  rarity: "Premium",
  },
  {
    id: 4,
  name: "Jebba Kairouan",
  price: 7400,
  image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=300&h=400&q=80",
  rating: 4.6,
  isExclusive: false,
  designer: "Kairouan Couture",
  rarity: "Limited",
  },
  {
    id: 5,
  name: "Faracha du Sahara",
  price: 12500,
  image: "https://images.unsplash.com/photo-1591369822091-8b550f27d4d3?auto=format&fit=crop&w=300&h=400&q=80",
  rating: 4.8,
  isExclusive: true,
  designer: "Sahara Luxe",
  rarity: "Ultra Rare",
  },
]

const reviews = [
  {
    id: 1,
    name: "Yosra Ben Ali",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2024-01-20",
    verified: true,
    helpful: 47,
    comment:
      "This dress is absolutely transcendent! The craftsmanship is beyond exceptional - every stitch tells a story of artistry. I felt like a goddess wearing it to the Met Gala. The way the fabric moves is pure poetry in motion.",
    images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
  },
  {
    id: 2,
    name: "Karim Bouaziz",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2024-01-15",
    verified: true,
    helpful: 32,
    comment:
      "Worth every single penny and more! This isn't just a dress - it's wearable art. The attention to detail is mind-blowing. I've received countless compliments and inquiries about where I got it. Truly a masterpiece.",
    images: [],
  },
  {
    id: 3,
    name: "Amal Cherif",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2024-01-10",
    verified: true,
    helpful: 28,
    comment:
      "I'm a fashion editor and I've seen it all, but this dress left me speechless. The innovative design and flawless execution make it a true collector's piece. It's not just fashion - it's art you can wear.",
    images: ["/placeholder.svg?height=100&width=100"],
  },
]

const sizeGuide = [
  { size: "XS", bust: "32", waist: "24", hips: "34" },
  { size: "S", bust: "34", waist: "26", hips: "36" },
  { size: "M", bust: "36", waist: "28", hips: "38" },
  { size: "L", bust: "38", waist: "30", hips: "40" },
  { size: "XL", bust: "40", waist: "32", hips: "42" },
]

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("midnight")
  const [quantity, setQuantity] = useState(1)
  const [customText, setCustomText] = useState("")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [activeTab, setActiveTab] = useState("details")

  const colors = [
    { name: "midnight", value: "linear-gradient(135deg, #0f0f23, #1a1a2e)", label: "Midnight Obsidian" },
    { name: "pearl", value: "linear-gradient(135deg, #f8f9fa, #e9ecef)", label: "Pearl Luminescence" },
    { name: "rose-gold", value: "linear-gradient(135deg, #ffd700, #ff6b6b)", label: "Rose Gold Radiance" },
  ]

  const sizes = ["XS", "S", "M", "L", "XL"]

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">

        {/* Breadcrumb */}
        <div className="container mx-auto px-8 lg:px-12 py-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-purple-400 transition-colors">
              Collections
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-purple-400 transition-colors">
              Haute Couture
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Ethereal Moonlight Gown</span>
          </nav>
        </div>

        <div className="container mx-auto px-8 lg:px-12 pb-20">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Advanced Image Gallery */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl overflow-hidden border border-gray-700/50 backdrop-blur-xl">
                  <Image
                    src={productImages[selectedImage] || "/placeholder.svg"}
                    alt="Product Image"
                    width={600}
                    height={800}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

                  {/* Navigation Arrows */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/20 rounded-full"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/20 rounded-full"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Image Counter */}
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
                    {selectedImage + 1} / {productImages.length}
                  </div>

                  {/* Zoom Indicator */}
                  <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Camera className="h-4 w-4" />
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto pb-2 mt-6">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-24 h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-purple-500 shadow-lg shadow-purple-500/25 scale-105"
                          : "border-gray-700/50 hover:border-gray-600 hover:scale-102"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`View ${index + 1}`}
                        width={96}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-10">
              {/* Header */}
              <div className="space-y-6">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 px-4 py-2">
                    <Crown className="w-4 h-4 mr-2" />
                    Ultra Rare
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    New Arrival
                  </Badge>
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-0 px-4 py-2 animate-pulse">
                    <Zap className="w-4 h-4 mr-2" />
                    Limited Edition
                  </Badge>
                </div>

                {/* Designer & Collection */}
                <div className="space-y-2">
                  <p className="text-purple-400 font-bold text-lg tracking-wider uppercase">Atelier Tunis</p>
                  <p className="text-gray-400 text-sm tracking-wide">De la collection "Rêves Tunisiens"</p>
                </div>

                {/* Product Name */}
                <h1 className="text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  Robe Tunisienne "Lumière du Jasmin"
                </h1>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <span className="text-white font-bold text-lg">4.9</span>
                  </div>
                  <Separator className="h-6 w-px bg-gray-600" />
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle className="h-4 w-4" />
                    <span>247 reviews</span>
                  </div>
                  <Separator className="h-6 w-px bg-gray-600" />
                  <div className="flex items-center gap-2 text-purple-400">
                    <Eye className="h-4 w-4" />
                    <span>1.2k views today</span>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      9,500 TND
                    </span>
                    <span className="text-2xl text-gray-500 line-through">11,500 TND</span>
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg px-4 py-2">
                      17% OFF
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Ou 4 paiements sans frais de 2,375 TND avec <span className="text-purple-400 font-semibold">Klarna</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-lg">
                  A transcendent masterpiece that captures the ethereal beauty of moonlight dancing on silk. This gown
                  represents the pinnacle of haute couture craftsmanship, featuring hand-embroidered celestial motifs
                  and a silhouette that flows like liquid starlight.
                </p>
              </div>

              {/* Availability Status */}
              <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-green-400 font-bold text-lg">In Stock - Only 2 Left</p>
                      <p className="text-gray-400 text-sm">This exclusive piece is in high demand</p>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Zap className="h-5 w-5" />
                      <span className="font-semibold">Fast Selling</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Availability</span>
                      <span>83% claimed</span>
                    </div>
                    <Progress value={83} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Color Selection */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label className="text-xl font-bold text-white">Color Variant</Label>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                    <Palette className="h-4 w-4 mr-2" />
                    Color Guide
                  </Button>
                </div>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="space-y-4">
                  {colors.map((color) => (
                    <div key={color.name} className="flex items-center gap-4">
                      <RadioGroupItem value={color.name} id={color.name} className="sr-only" />
                      <Label
                        htmlFor={color.name}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedColor === color.name
                            ? "border-purple-500 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
                            : "border-gray-700 hover:border-gray-600 hover:bg-gray-900/30"
                        }`}
                      >
                        <div
                          className="w-16 h-16 rounded-full border-4 border-white/20 shadow-lg"
                          style={{ background: color.value }}
                        />
                        <div>
                          <p className="font-bold text-white text-lg">{color.label}</p>
                          <p className="text-gray-400 text-sm">Premium finish</p>
                        </div>
                        {selectedColor === color.name && (
                          <div className="ml-auto">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                          </div>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Size Selection */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label className="text-xl font-bold text-white">Size</Label>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                    <Ruler className="h-4 w-4 mr-2" />
                    Size Guide
                  </Button>
                </div>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-5 gap-3">
                  {sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem value={size} id={size} className="sr-only" />
                      <Label
                        htmlFor={size}
                        className={`flex items-center justify-center h-16 border-2 rounded-xl cursor-pointer transition-all duration-300 font-bold text-lg ${
                          selectedSize === size
                            ? "border-purple-500 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white"
                            : "border-gray-700 text-gray-300 hover:border-purple-500/50 hover:bg-gray-800/50"
                        }`}
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Quantity & Customization */}
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label className="text-xl font-bold text-white">Quantity</Label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:border-purple-500 h-14 w-14 rounded-xl"
                    >
                      <Minus className="h-6 w-6" />
                    </Button>
                    <span className="w-20 text-center font-bold text-2xl text-white">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:border-purple-500 h-14 w-14 rounded-xl"
                    >
                      <Plus className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-xl font-bold text-white flex items-center gap-2">
                    <Scissors className="h-5 w-5" />
                    Custom Tailoring
                  </Label>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/50 bg-purple-900/20 text-purple-400 hover:bg-purple-900/40 hover:border-purple-400 h-14 rounded-xl"
                  >
                    <Wand2 className="h-5 w-5 mr-2" />
                    Book Fitting Session
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-bold rounded-xl shadow-2xl">
                    <ShoppingBag className="h-6 w-6 mr-3" />
                    Add to Cart
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-white text-black hover:bg-gray-200 py-6 text-lg font-bold rounded-xl shadow-2xl"
                  >
                    <Link href="/checkout">
                      <Zap className="h-6 w-6 mr-3" />
                      Buy Now
                    </Link>
                  </Button>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`flex-1 border-2 py-6 text-lg font-bold rounded-xl ${
                      isWishlisted
                        ? "text-red-400 border-red-500 bg-red-500/10 hover:bg-red-500/20"
                        : "text-white border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-purple-500"
                    }`}
                  >
                    <Heart className={`h-6 w-6 mr-3 ${isWishlisted ? "fill-current" : ""}`} />
                    {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:border-purple-500 py-6 text-lg font-bold rounded-xl"
                  >
                    <Share2 className="h-6 w-6 mr-3" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Premium Features */}
              <div className="grid grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Truck className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                    <p className="font-bold text-white mb-1">White Glove</p>
                    <p className="text-xs text-gray-400">Delivery</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <RotateCcw className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                    <p className="font-bold text-white mb-1">90-Day</p>
                    <p className="text-xs text-gray-400">Returns</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                    <p className="font-bold text-white mb-1">Lifetime</p>
                    <p className="text-xs text-gray-400">Authenticity</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Advanced Product Information Tabs */}
          <div className="mt-32">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-black/40 backdrop-blur-xl border border-gray-800/50 h-16 rounded-2xl">
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 text-lg font-semibold rounded-xl"
                >
                  <Info className="h-5 w-5 mr-2" />
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="craftsmanship"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 text-lg font-semibold rounded-xl"
                >
                  <Gem className="h-5 w-5 mr-2" />
                  Craft
                </TabsTrigger>
                <TabsTrigger
                  value="care"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 text-lg font-semibold rounded-xl"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Care
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 text-lg font-semibold rounded-xl"
                >
                  <Truck className="h-5 w-5 mr-2" />
                  Delivery
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 text-lg font-semibold rounded-xl"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-12">
                <Card className="bg-black/40 backdrop-blur-xl border border-gray-800/50">
                  <CardContent className="p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <h3 className="font-bold text-white mb-6 text-2xl flex items-center gap-3">
                            <Gem className="h-6 w-6 text-purple-400" />
                            Premium Materials
                          </h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30">
                              <div className="w-3 h-3 bg-purple-400 rounded-full" />
                              <span className="text-gray-300">100% Mulberry Silk - Grade A</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30">
                              <div className="w-3 h-3 bg-purple-400 rounded-full" />
                              <span className="text-gray-300">Hand-embroidered Swarovski crystals</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30">
                              <div className="w-3 h-3 bg-purple-400 rounded-full" />
                              <span className="text-gray-300">Italian silk lining</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30">
                              <div className="w-3 h-3 bg-purple-400 rounded-full" />
                              <span className="text-gray-300">Sustainable production methods</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <h3 className="font-bold text-white mb-6 text-2xl flex items-center gap-3">
                            <Wand2 className="h-6 w-6 text-pink-400" />
                            Design Features
                          </h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-xl border border-pink-500/30">
                              <div className="w-3 h-3 bg-pink-400 rounded-full" />
                              <span className="text-gray-300">Architectural draping technique</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-xl border border-pink-500/30">
                              <div className="w-3 h-3 bg-pink-400 rounded-full" />
                              <span className="text-gray-300">Invisible French seam construction</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-xl border border-pink-500/30">
                              <div className="w-3 h-3 bg-pink-400 rounded-full" />
                              <span className="text-gray-300">Built-in corsetry support</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-xl border border-pink-500/30">
                              <div className="w-3 h-3 bg-pink-400 rounded-full" />
                              <span className="text-gray-300">Adjustable train length</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-12">
                <div className="space-y-12">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold text-white">Customer Reviews</h3>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-xl">
                      <Star className="h-5 w-5 mr-2" />
                      Write a Review
                    </Button>
                  </div>

                  <div className="space-y-8">
                    {reviews.map((review) => (
                      <Card key={review.id} className="bg-black/40 backdrop-blur-xl border border-gray-800/50">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-6">
                            <Image
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                              width={60}
                              height={60}
                              className="rounded-full border-2 border-purple-500/30"
                            />
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="font-bold text-white text-lg">{review.name}</span>
                                    {review.verified && (
                                      <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs">
                                        <Shield className="w-3 h-3 mr-1" />
                                        Verified Purchase
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-5 w-5 ${
                                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                    <span className="text-sm text-gray-400 flex items-center gap-2">
                                      <Calendar className="h-4 w-4" />
                                      {review.date}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <p className="text-gray-300 leading-relaxed text-lg">{review.comment}</p>

                              {review.images.length > 0 && (
                                <div className="flex gap-3 mt-4">
                                  {review.images.map((img, index) => (
                                    <Image
                                      key={index}
                                      src={img || "/placeholder.svg"}
                                      alt={`Review image ${index + 1}`}
                                      width={100}
                                      height={100}
                                      className="rounded-lg border border-gray-700"
                                    />
                                  ))}
                                </div>
                              )}

                              <div className="flex items-center gap-6 pt-4">
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                  <ThumbsUp className="h-4 w-4 mr-2" />
                                  Helpful ({review.helpful})
                                </Button>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Complete Your Collection
              </h2>
              <p className="text-gray-400 text-lg">Curated pieces that complement your style</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group bg-black/40 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-700 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Rarity Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${
                            product.rarity === "Ultra Rare"
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                              : product.rarity === "Exclusive"
                                ? "bg-gradient-to-r from-purple-400 to-pink-500"
                                : product.rarity === "Limited"
                                  ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                                  : "bg-gradient-to-r from-green-400 to-emerald-500"
                          } text-white border-0`}
                        >
                          {product.rarity}
                        </Badge>
                      </div>

                      {product.isExclusive && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0">
                          <Crown className="w-3 h-3 mr-1" />
                          Exclusive
                        </Badge>
                      )}

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl"
                        >
                          <Link href={`/products/${product.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase mb-1">
                          {product.designer}
                        </p>
                        <h3 className="font-bold text-white text-lg group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">({product.rating})</span>
                      </div>

                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {product.price.toLocaleString()} TND
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}
