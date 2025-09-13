"use client"

import { useState } from "react"
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  Bell,
  Globe,
  Crown,
  X,
  Plus,
  Minus,
  ArrowRight,
  Package,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

// Sample cart items - in a real app, this would come from your state management
const cartItems = [
  {
    id: 1,
    name: "Ethereal Moonlight Gown",
    price: 2899.99,
    originalPrice: 3499.99,
    quantity: 1,
    size: "M",
    color: "Midnight Obsidian",
    image: "/images/cart/ethereal-moonlight-thumb.png",
    designer: "Atelier Lumière",
    rarity: "Ultra Rare",
  },
  {
    id: 2,
    name: "Minimalist Zen Silhouette",
    price: 1799.99,
    quantity: 2,
    size: "S",
    color: "Pearl Luminescence",
    image: "/images/cart/minimalist-zen-thumb.png",
    designer: "Serene Studios",
    rarity: "Premium",
  },
  {
    id: 3,
    name: "Neo-Gothic Cathedral Dress",
    price: 3899.99,
    quantity: 1,
    size: "L",
    color: "Raven Black",
    image: "/images/cart/neo-gothic-thumb.png",
    designer: "Gothic Renaissance",
    rarity: "Exclusive",
  },
]

// Sample wishlist items
const wishlistItems = [
  {
    id: 1,
    name: "Celestial Evening Gown",
    price: 3299.99,
    image: "/images/products/celestial-evening-gown.png",
    designer: "Stellar Couture",
    rarity: "Ultra Rare",
  },
  {
    id: 2,
    name: "Vintage Romance Dress",
    price: 2199.99,
    image: "/images/products/vintage-romance-dress.png",
    designer: "Timeless Elegance",
    rarity: "Exclusive",
  },
]

// Sample notifications
const notifications = [
  {
    id: 1,
    type: "order",
    title: "Order Shipped",
    message: "Your Ethereal Moonlight Gown has been shipped and is on its way!",
    time: "2 hours ago",
    read: false,
    icon: "package",
    action: "/order-tracking",
  },
  {
    id: 2,
    type: "promotion",
    title: "Exclusive Sale",
    message: "Limited time: 25% off all Atelier Lumière pieces",
    time: "4 hours ago",
    read: false,
    icon: "tag",
    action: "/products?designer=atelier-lumiere",
  },
  {
    id: 3,
    type: "wishlist",
    title: "Back in Stock",
    message: "Celestial Evening Gown is now available in your size",
    time: "1 day ago",
    read: true,
    icon: "heart",
    action: "/products/celestial-evening-gown",
  },
  {
    id: 4,
    type: "system",
    title: "Profile Updated",
    message: "Your style preferences have been successfully updated",
    time: "2 days ago",
    read: true,
    icon: "user",
    action: "/account/profile",
  },
]

export function Header() {
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [cartItemQuantities, setCartItemQuantities] = useState<Record<number, number>>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {}),
  )

  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [notificationsList, setNotificationsList] = useState(notifications)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItemQuantities((prev) => ({ ...prev, [id]: newQuantity }))
  }

  const removeItem = (id: number) => {
    setCartItemQuantities((prev) => {
      const newQuantities = { ...prev }
      delete newQuantities[id]
      return newQuantities
    })
  }

  const markAsRead = (id: number) => {
    setNotificationsList((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotificationsList((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const unreadCount = notificationsList.filter((notif) => !notif.read).length

  const totalItems = Object.values(cartItemQuantities).reduce((sum, qty) => sum + qty, 0)
  const subtotal = cartItems
    .filter((item) => cartItemQuantities[item.id])
    .reduce((sum, item) => sum + item.price * cartItemQuantities[item.id], 0)

  const CartDropdown = () => (
    <PopoverContent
      className="w-[420px] p-0 bg-black/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl"
      align="end"
      sideOffset={8}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Shopping Cart
          </h3>
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </Badge>
        </div>

        {Object.keys(cartItemQuantities).length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">Your cart is empty</p>
            <p className="text-gray-500 text-sm mb-6">Add some luxury pieces to get started</p>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {cartItems
                .filter((item) => cartItemQuantities[item.id])
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/30"
                  >
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={100}
                        className="rounded-lg object-cover border border-gray-700/50"
                      />
                      <Badge
                        className={`absolute -top-2 -right-2 text-xs ${
                          item.rarity === "Ultra Rare"
                            ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                            : item.rarity === "Exclusive"
                              ? "bg-gradient-to-r from-purple-400 to-pink-500"
                              : "bg-gradient-to-r from-green-400 to-emerald-500"
                        } text-white border-0`}
                      >
                        {item.rarity}
                      </Badge>
                    </div>

                    <div className="flex-1 space-y-2">
                      <div>
                        <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase">
                          {item.designer}
                        </p>
                        <h4 className="font-bold text-white text-sm leading-tight">{item.name}</h4>
                      </div>

                      <p className="text-xs text-gray-400">
                        Size: {item.size} • {item.color}
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          ${item.price.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            ${item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            className="h-8 w-8 bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 rounded-lg"
                            onClick={() => updateQuantity(item.id, cartItemQuantities[item.id] - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold text-white">
                            {cartItemQuantities[item.id]}
                          </span>
                          <Button
                            size="icon"
                            className="h-8 w-8 bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 rounded-lg"
                            onClick={() => updateQuantity(item.id, cartItemQuantities[item.id] + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <Separator className="my-6 bg-gray-700/50" />

            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span className="text-gray-300">Subtotal</span>
                <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ${subtotal.toLocaleString()}
                </span>
              </div>

              <p className="text-xs text-gray-400 text-center">Shipping and taxes calculated at checkout</p>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold"
                >
                  <Link href="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  className="w-full bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 py-3 rounded-xl"
                  onClick={() => setCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </PopoverContent>
  )

  const WishlistDropdown = () => (
    <PopoverContent
      className="w-[420px] p-0 bg-black/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl"
      align="end"
      sideOffset={8}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Wishlist
          </h3>
          <Badge className="bg-gradient-to-r from-pink-600 to-red-600 text-white">
            {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"}
          </Badge>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">Your wishlist is empty</p>
            <p className="text-gray-500 text-sm mb-6">Save items you love for later</p>
            <Button
              className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white"
              onClick={() => setWishlistOpen(false)}
            >
              Explore Products
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/30"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={100}
                      className="rounded-lg object-cover border border-gray-700/50"
                    />
                    <Badge
                      className={`absolute -top-2 -right-2 text-xs ${
                        item.rarity === "Ultra Rare"
                          ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                          : item.rarity === "Exclusive"
                            ? "bg-gradient-to-r from-purple-400 to-pink-500"
                            : "bg-gradient-to-r from-green-400 to-emerald-500"
                      } text-white border-0`}
                    >
                      {item.rarity}
                    </Badge>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div>
                      <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase">{item.designer}</p>
                      <h4 className="font-bold text-white text-sm leading-tight">{item.name}</h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        ${item.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6 bg-gray-700/50" />

            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white py-3 rounded-xl font-semibold"
              >
                <Link href="/wishlist">
                  View Full Wishlist
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </PopoverContent>
  )

  const NotificationsDropdown = () => (
    <PopoverContent
      className="w-[420px] p-0 bg-black/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl"
      align="end"
      sideOffset={8}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Notifications
          </h3>
          <div className="flex items-center gap-2">
            <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">{unreadCount} new</Badge>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={markAllAsRead}
                className="text-blue-400 hover:text-blue-300 text-xs"
              >
                Mark all read
              </Button>
            )}
          </div>
        </div>

        {notificationsList.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">No notifications</p>
            <p className="text-gray-500 text-sm mb-6">You're all caught up!</p>
          </div>
        ) : (
          <>
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {notificationsList.map((notification) => {
                const getIcon = () => {
                  switch (notification.icon) {
                    case "package":
                      return <Package className="h-5 w-5" />
                    case "tag":
                      return <Badge className="h-5 w-5" />
                    case "heart":
                      return <Heart className="h-5 w-5" />
                    case "user":
                      return <User className="h-5 w-5" />
                    default:
                      return <Bell className="h-5 w-5" />
                  }
                }

                const getIconColor = () => {
                  switch (notification.type) {
                    case "order":
                      return "text-green-400"
                    case "promotion":
                      return "text-yellow-400"
                    case "wishlist":
                      return "text-pink-400"
                    case "system":
                      return "text-blue-400"
                    default:
                      return "text-gray-400"
                  }
                }

                return (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      notification.read
                        ? "bg-gray-900/30 border-gray-700/30 hover:bg-gray-800/50"
                        : "bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-500/30 hover:bg-blue-900/30"
                    }`}
                    onClick={() => {
                      markAsRead(notification.id)
                      setNotificationsOpen(false)
                      // Navigate to action URL
                    }}
                  >
                    <div className="flex gap-4">
                      <div className={`p-2 rounded-lg bg-gray-800 ${getIconColor()}`}>{getIcon()}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between">
                          <h4 className="font-bold text-white text-sm">{notification.title}</h4>
                          {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1" />}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{notification.message}</p>
                        <p className="text-gray-500 text-xs">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <Separator className="my-6 bg-gray-700/50" />

            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold"
              >
                <Link href="/notifications">
                  View All Notifications
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </PopoverContent>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/30 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-xl">
      <div className="w-full flex h-20 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 shadow-lg">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
SceneWear            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          <Link
            href="/"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group"
          >
            Collections
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group"
          >
            New Arrivals
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group"
          >
            Brands
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group"
          >
            Sale
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-12">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
            <Input
              placeholder="Search luxury fashion..."
              className="pl-12 pr-4 h-12 bg-gray-900/80 border-gray-700/50 text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-500/20 rounded-xl backdrop-blur-sm"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white/80 hover:text-white hover:bg-gray-800/60 rounded-xl"
          >
            <Globe className="h-5 w-5" />
          </Button>

          {/* Notifications with Dropdown */}
          <Popover open={notificationsOpen} onOpenChange={setNotificationsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white/80 hover:text-white hover:bg-gray-800/60 rounded-xl"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <NotificationsDropdown />
          </Popover>

          {/* Wishlist with Dropdown */}
          <Popover open={wishlistOpen} onOpenChange={setWishlistOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white/80 hover:text-white hover:bg-gray-800/60 rounded-xl"
              >
                <Heart className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500"
                >
                  {wishlistItems.length}
                </Badge>
              </Button>
            </PopoverTrigger>
            <WishlistDropdown />
          </Popover>

          {/* Shopping Cart with Dropdown */}
          <Popover open={cartOpen} onOpenChange={setCartOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white/80 hover:text-white hover:bg-gray-800/60 rounded-xl"
              >
                <ShoppingCart className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500"
                >
                  {totalItems}
                </Badge>
              </Button>
            </PopoverTrigger>
            <CartDropdown />
          </Popover>

          <Button
            variant="ghost"
            size="icon"
            className="text-white/80 hover:text-white hover:bg-gray-800/60 rounded-xl"
          >
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white/80 hover:text-white hover:bg-gray-800/60 rounded-xl"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] bg-gray-900 border-gray-800/50">
              <nav className="flex flex-col space-y-6 mt-8">
                <Link href="/" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-medium text-white hover:text-violet-400 transition-colors"
                >
                  Collections
                </Link>
                <Link href="#" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">
                  New Arrivals
                </Link>
                <Link href="#" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">
                  Brands
                </Link>
                <Link href="#" className="text-lg font-medium text-white hover:text-violet-400 transition-colors">
                  Sale
                </Link>
                <div className="pt-4">
                  <Input placeholder="Search products..." className="bg-zinc-900 border-zinc-700 text-white" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
