"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Filter,
  Grid3X3,
  Heart,
  Search,
  Star,
  ChevronDown,
  X,
  SlidersHorizontal,
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  Crown,
  Gem,
  Eye,
  ShoppingBag,
  ArrowRight,
  Palette,
  Layers,
  Wand2,
  Infinity,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const products = [
  {
    id: 1,
    name: "Ethereal Moonlight Gown",
    price: 2899.99,
    originalPrice: 3499.99,
    rating: 4.9,
    reviews: 247,
    image: "/placeholder.svg?height=600&width=450",
    colors: ["midnight", "pearl", "rose-gold"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    isSale: true,
    isExclusive: true,
    isLimited: true,
    designer: "Atelier Lumière",
    collection: "Celestial Dreams",
    rarity: "Ultra Rare",
  },
  {
    id: 2,
    name: "Avant-Garde Sculptural Dress",
    price: 4299.99,
    rating: 4.8,
    reviews: 189,
    image: "/placeholder.svg?height=600&width=450",
    colors: ["obsidian", "platinum", "amethyst"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isSale: false,
    isExclusive: true,
    isLimited: false,
    designer: "Neo Couture",
    collection: "Architectural Forms",
    rarity: "Exclusive",
  },
  {
    id: 3,
    name: "Minimalist Zen Silhouette",
    price: 1799.99,
    rating: 4.7,
    reviews: 312,
    image: "/placeholder.svg?height=600&width=450",
    colors: ["ivory", "sage", "terracotta"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    isSale: false,
    isExclusive: false,
    isLimited: false,
    designer: "Serene Studios",
    collection: "Mindful Elegance",
    rarity: "Premium",
  },
  {
    id: 4,
    name: "Deconstructed Power Dress",
    price: 2299.99,
    originalPrice: 2899.99,
    rating: 4.6,
    reviews: 156,
    image: "/placeholder.svg?height=600&width=450",
    colors: ["charcoal", "camel", "forest"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: false,
    isSale: true,
    isExclusive: false,
    isLimited: true,
    designer: "Urban Rebellion",
    collection: "Corporate Anarchy",
    rarity: "Limited",
  },
  {
    id: 5,
    name: "Bohemian Rhapsody Masterpiece",
    price: 1999.99,
    rating: 4.5,
    reviews: 203,
    image: "/placeholder.svg?height=600&width=450",
    colors: ["sunset", "ocean", "meadow"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: false,
    isSale: false,
    isExclusive: false,
    isLimited: false,
    designer: "Free Spirit Atelier",
    collection: "Wanderlust Chronicles",
    rarity: "Premium",
  },
  {
    id: 6,
    name: "Neo-Gothic Cathedral Dress",
    price: 3899.99,
    rating: 4.8,
    reviews: 134,
    image: "/placeholder.svg?height=600&width=450",
    colors: ["raven", "burgundy", "gold"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isSale: false,
    isExclusive: true,
    isLimited: true,
    designer: "Gothic Renaissance",
    collection: "Sacred Geometry",
    rarity: "Ultra Rare",
  },
]

const filterCategories = [
  { name: "Evening Couture", count: 24, icon: Crown },
  { name: "Avant-Garde", count: 18, icon: Wand2 },
  { name: "Minimalist Chic", count: 12, icon: Layers },
  { name: "Bohemian Luxe", count: 8, icon: Infinity },
  { name: "Gothic Romance", count: 15, icon: Gem },
]

const designers = [
  { name: "Atelier Lumière", count: 32, tier: "Master" },
  { name: "Neo Couture", count: 28, tier: "Visionary" },
  { name: "Serene Studios", count: 21, tier: "Artisan" },
  { name: "Urban Rebellion", count: 16, tier: "Innovator" },
]

const rarityLevels = [
  { name: "Ultra Rare", count: 8, color: "from-yellow-400 to-orange-500" },
  { name: "Exclusive", count: 15, color: "from-purple-400 to-pink-500" },
  { name: "Limited", count: 22, color: "from-blue-400 to-cyan-500" },
  { name: "Premium", count: 35, color: "from-green-400 to-emerald-500" },
]

export default function ProductListingPage() {
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [sortBy, setSortBy] = useState("trending")
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState("grid")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const itemsPerPage = 6
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...(prev[category] || []), value]
        : (prev[category] || []).filter((item) => item !== value),
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({})
    setPriceRange([0, 5000])
    setSearchQuery("")
  }

  const FilterSection = ({
    title,
    items,
    category,
    showIcons = false,
  }: {
    title: string
    items: any[]
    category: string
    showIcons?: boolean
  }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-0 hover:no-underline group">
          <h3 className="font-bold text-white text-left group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </h3>
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-all duration-300 ${isOpen ? "rotate-180" : ""} group-hover:text-purple-400`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-6">
          <div className="space-y-4">
            {items.map((item) => {
              const Icon = showIcons ? item.icon : null
              return (
                <div key={item.name} className="group/item">
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-pink-900/20 transition-all duration-300 border border-transparent hover:border-purple-500/30">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={`${category}-${item.name}`}
                        checked={selectedFilters[category]?.includes(item.name) || false}
                        onCheckedChange={(checked) => handleFilterChange(category, item.name, checked as boolean)}
                        className="border-purple-400 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600 data-[state=checked]:border-transparent"
                      />
                      {Icon && <Icon className="h-4 w-4 text-purple-400" />}
                      <div>
                        <Label
                          htmlFor={`${category}-${item.name}`}
                          className="text-sm text-gray-300 cursor-pointer group-hover/item:text-white transition-colors font-medium"
                        >
                          {item.name}
                        </Label>
                        {item.tier && <p className="text-xs text-purple-400">{item.tier}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          item.color ? `bg-gradient-to-r ${item.color} text-white` : "bg-gray-800 text-gray-400"
                        }`}
                      >
                        {item.count}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  }

  const ProductCard = ({ product, index }: { product: (typeof products)[0]; index: number }) => {
    const isHovered = hoveredProduct === product.id

    return (
      <div
        className={`group relative ${index % 3 === 1 ? "mt-8" : ""} ${index % 4 === 3 ? "mt-12" : ""}`}
        onMouseEnter={() => setHoveredProduct(product.id)}
        onMouseLeave={() => setHoveredProduct(null)}
      >
        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 z-20">
          {product.isLimited && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              <Badge className="relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0 shadow-lg">
                <Crown className="w-3 h-3 mr-1" />
                Limited
              </Badge>
            </div>
          )}
        </div>

        <Card className="group bg-black/40 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-700 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 relative">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

          {/* Rarity Indicator */}
          <div className="absolute top-4 left-4 z-20">
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${
                product.rarity === "Ultra Rare"
                  ? "from-yellow-400 to-orange-500"
                  : product.rarity === "Exclusive"
                    ? "from-purple-400 to-pink-500"
                    : product.rarity === "Limited"
                      ? "from-blue-400 to-cyan-500"
                      : "from-green-400 to-emerald-500"
              } text-white shadow-lg`}
            >
              {product.rarity}
            </div>
          </div>

          <CardContent className="p-0 relative">
            <div className="relative overflow-hidden group/image">
              {/* Main Image */}
              <div className="aspect-[3/4] relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={450}
                  height={600}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>

              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <Button
                  size="icon"
                  className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  className="bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Actions Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-sm">
                <div className="flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-gray-200 shadow-2xl font-bold px-8 py-3 rounded-full"
                  >
                    <Link href={`/products/${product.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      Quick View
                    </Link>
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl font-bold px-8 py-3 rounded-full">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Status Badges */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    New Arrival
                  </Badge>
                )}
                {product.isSale && (
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-0 shadow-lg animate-pulse">
                    <Zap className="w-3 h-3 mr-1" />
                    Flash Sale
                  </Badge>
                )}
                {product.isExclusive && (
                  <Badge className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0 shadow-lg">
                    <Award className="w-3 h-3 mr-1" />
                    Exclusive
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-4 relative">
              {/* Designer & Collection */}
              <div className="space-y-1">
                <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase">{product.designer}</p>
                <p className="text-xs text-gray-500">{product.collection}</p>
              </div>

              {/* Product Name */}
              <h3 className="font-bold text-white text-lg leading-tight group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {product.name}
              </h3>

              {/* Rating */}
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
                <span className="text-sm text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>

              {/* Color Swatches */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {product.colors.slice(0, 3).map((color, index) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-gray-600 hover:border-purple-400 transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg"
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(135deg, #1a1a2e, #16213e)"
                            : index === 1
                              ? "linear-gradient(135deg, #f8f9fa, #e9ecef)"
                              : "linear-gradient(135deg, #8b5cf6, #ec4899)",
                      }}
                    />
                  ))}
                  {product.colors.length > 3 && (
                    <div className="w-8 h-8 rounded-full border-2 border-gray-600 flex items-center justify-center text-xs text-gray-400 bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
                      +{product.colors.length - 3}
                    </div>
                  )}
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 transition-all duration-300"
                >
                  <Palette className="h-4 w-4 mr-1" />
                  More Colors
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const Pagination = () => (
    <div className="flex items-center justify-center gap-3 mt-16">
      <Button
        variant="outline"
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="border-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50 hover:border-purple-500/50 transition-all duration-300"
      >
        Previous
      </Button>

      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1
          const isActive = page === currentPage

          return (
            <Button
              key={page}
              variant={isActive ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
              className={
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg"
                  : "border-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50 hover:border-purple-500/50 transition-all duration-300"
              }
            >
              {page}
            </Button>
          )
        })}
      </div>

      <Button
        variant="outline"
        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="border-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50 hover:border-purple-500/50 transition-all duration-300"
      >
        Next
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  HAUTE
                </h1>
                <h2 className="text-4xl md:text-5xl font-light text-gray-300 tracking-[0.2em]">COUTURE</h2>
              </div>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Discover extraordinary pieces crafted by visionary designers. Each creation tells a story of artistry,
                innovation, and timeless elegance.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30"></div>
                <div className="relative flex items-center">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                  <Input
                    placeholder="Search for your perfect masterpiece..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-14 pr-6 py-4 bg-black/50 backdrop-blur-xl border border-gray-700/50 text-white placeholder-gray-400 h-16 text-lg rounded-full focus:border-purple-500/50 transition-all duration-300"
                  />
                  <Button className="absolute right-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8 py-3">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center gap-12 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Exclusive Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Master Designers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-purple-400 transition-colors">
              Collections
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Haute Couture</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="flex gap-12">
            {/* Advanced Filters Sidebar */}
            <div className="hidden lg:block w-96">
              <div className="sticky top-8">
                <Card className="bg-black/40 backdrop-blur-xl border border-gray-800/50 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <SlidersHorizontal className="h-6 w-6 text-purple-400" />
                        Filters
                      </h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllFilters}
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 transition-all duration-300"
                      >
                        Clear All
                      </Button>
                    </div>

                    <div className="space-y-10">
                      {/* Price Range */}
                      <div className="space-y-6">
                        <h3 className="font-bold text-white text-lg">Price Range</h3>
                        <div className="px-4">
                          <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            max={5000}
                            step={100}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-gray-400 mt-4">
                            <span className="bg-gray-800 px-3 py-1 rounded-full">
                              ${priceRange[0].toLocaleString()}
                            </span>
                            <span className="bg-gray-800 px-3 py-1 rounded-full">
                              ${priceRange[1].toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Separator className="bg-gray-700/50" />
                      <FilterSection
                        title="Categories"
                        items={filterCategories}
                        category="categories"
                        showIcons={true}
                      />

                      <Separator className="bg-gray-700/50" />
                      <FilterSection title="Master Designers" items={designers} category="designers" />

                      <Separator className="bg-gray-700/50" />
                      <FilterSection title="Rarity Level" items={rarityLevels} category="rarity" />

                      <Separator className="bg-gray-700/50" />
                      <FilterSection
                        title="Sizes"
                        items={[
                          { name: "XS", count: 12 },
                          { name: "S", count: 18 },
                          { name: "M", count: 24 },
                          { name: "L", count: 20 },
                          { name: "XL", count: 15 },
                          { name: "XXL", count: 8 },
                        ]}
                        category="sizes"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Controls */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6">
                  <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <SheetTrigger asChild>
                      <Button className="lg:hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg">
                        <Filter className="h-4 w-4 mr-2" />
                        Advanced Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-black/95 backdrop-blur-xl border-gray-800 text-white w-96">
                      <SheetHeader>
                        <SheetTitle className="text-white flex items-center gap-2">
                          <SlidersHorizontal className="h-5 w-5 text-purple-400" />
                          Advanced Filters
                        </SheetTitle>
                      </SheetHeader>
                      {/* Mobile filter content would go here */}
                    </SheetContent>
                  </Sheet>

                  <div className="text-gray-400">
                    Showing <span className="text-white font-bold">{products.length}</span> masterpieces
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-64 bg-black/40 backdrop-blur-xl border-gray-700/50 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 backdrop-blur-xl border-gray-700">
                      <SelectItem value="trending">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Trending Now
                        </div>
                      </SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Just Arrived</SelectItem>
                      <SelectItem value="rating">Most Coveted</SelectItem>
                      <SelectItem value="exclusive">Ultra Rare First</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Active Filters */}
              {Object.entries(selectedFilters).some(([_, values]) => values.length > 0) && (
                <div className="mb-8 flex flex-wrap gap-3">
                  {Object.entries(selectedFilters).map(([category, values]) =>
                    values.map((value) => (
                      <Badge
                        key={`${category}-${value}`}
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-200 border border-purple-500/30 hover:bg-purple-900/70 transition-all duration-300 px-4 py-2"
                      >
                        {value}
                        <X
                          className="h-3 w-3 ml-2 cursor-pointer hover:text-white transition-colors"
                          onClick={() => handleFilterChange(category, value, false)}
                        />
                      </Badge>
                    )),
                  )}
                </div>
              )}

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
