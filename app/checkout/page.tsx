"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Truck,
  MapPin,
  Phone,
  Mail,
  User,
  Calendar,
  Shield,
  Crown,
  Gift,
  Star,
  CheckCircle,
  Zap,
  Award,
  Smartphone,
  Wallet,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

const cartItems = [
  {
    id: 1,
    name: "Ethereal Moonlight Gown",
    price: 2899.99,
    originalPrice: 3499.99,
    quantity: 1,
    size: "M",
    color: "Midnight Obsidian",
    image: "/placeholder.svg?height=150&width=120",
    designer: "Atelier Lumière",
    rarity: "Ultra Rare",
    isExclusive: true,
  },
  {
    id: 2,
    name: "Minimalist Zen Silhouette",
    price: 1799.99,
    quantity: 1,
    size: "S",
    color: "Pearl Luminescence",
    image: "/placeholder.svg?height=150&width=120",
    designer: "Serene Studios",
    rarity: "Premium",
    isExclusive: false,
  },
]

const shippingOptions = [
  {
    id: "white-glove",
    name: "White Glove Delivery",
    description: "Premium concierge service • 2-3 days",
    price: 0,
    icon: Crown,
    features: ["Personal stylist consultation", "Professional fitting", "Premium packaging"],
    recommended: true,
  },
  {
    id: "express",
    name: "Express Courier",
    description: "Secure express delivery • Next day",
    price: 49.99,
    icon: Zap,
    features: ["Signature required", "Insurance included", "Real-time tracking"],
    recommended: false,
  },
  {
    id: "standard",
    name: "Standard Delivery",
    description: "Reliable shipping • 3-5 days",
    price: 19.99,
    icon: Truck,
    features: ["Tracking included", "Secure packaging", "Insurance coverage"],
    recommended: false,
  },
]

const paymentMethods = [
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: CreditCard,
    description: "Visa, Mastercard, American Express",
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: Wallet,
    description: "Pay with your PayPal account",
  },
  {
    id: "apple",
    name: "Apple Pay",
    icon: Smartphone,
    description: "Touch ID or Face ID",
  },
  {
    id: "klarna",
    name: "Klarna",
    icon: Gift,
    description: "Buy now, pay in 4 installments",
  },
]

export default function CheckoutPage() {
  const [selectedShipping, setSelectedShipping] = useState("white-glove")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [saveAddress, setSaveAddress] = useState(false)
  const [billingDifferent, setBillingDifferent] = useState(false)
  const [newsletterOptIn, setNewsletterOptIn] = useState(true)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = shippingOptions.find((option) => option.id === selectedShipping)?.price || 0
  const tax = subtotal * 0.08
  const savings = cartItems.reduce(
    (sum, item) => (item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0),
    0,
  )
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800/50 bg-black/50 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-6">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:text-purple-400 hover:bg-purple-900/20 rounded-full"
              >
                <Link href="/products">
                  <ArrowLeft className="h-6 w-6" />
                </Link>
              </Button>
              <div className="flex-1">
                <h1 className="text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Secure Checkout
                </h1>
                <p className="text-gray-400 mt-2">Complete your luxury purchase</p>
              </div>
              <div className="flex items-center gap-3 text-green-400">
                <Shield className="h-6 w-6" />
                <div>
                  <p className="font-bold">256-bit SSL</p>
                  <p className="text-xs text-gray-400">Bank-level security</p>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Checkout Progress</span>
                <span className="text-sm text-purple-400">Step 2 of 3</span>
              </div>
              <Progress value={66} className="h-2" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2 space-y-12">
              {/* Shipping Information */}
              <Card className="bg-black/40 backdrop-blur-xl border border-gray-800/50">
                <CardHeader className="pb-8">
                  <CardTitle className="flex items-center gap-4 text-white text-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-lg font-bold">
                      1
                    </div>
                    <div>
                      <h3>Shipping Information</h3>
                      <p className="text-sm text-gray-400 font-normal mt-1">
                        Where should we deliver your masterpiece?
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-white flex items-center gap-2 text-lg">
                        <User className="h-5 w-5 text-purple-400" />
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-white text-lg">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-white flex items-center gap-2 text-lg">
                      <Mail className="h-5 w-5 text-purple-400" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-white flex items-center gap-2 text-lg">
                      <Phone className="h-5 w-5 text-purple-400" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="address" className="text-white flex items-center gap-2 text-lg">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      Street Address
                    </Label>
                    <Input
                      id="address"
                      placeholder="123 Fashion Avenue"
                      className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="city" className="text-white text-lg">
                        City
                      </Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="state" className="text-white text-lg">
                        State
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-900/50 border-gray-700/50 text-white h-14 text-lg rounded-xl">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700 backdrop-blur-xl">
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="zip" className="text-white text-lg">
                        ZIP Code
                      </Label>
                      <Input
                        id="zip"
                        placeholder="10001"
                        className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="saveAddress"
                        checked={saveAddress}
                        onCheckedChange={setSaveAddress}
                        className="border-purple-400 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600 w-5 h-5"
                      />
                      <Label htmlFor="saveAddress" className="text-gray-300 cursor-pointer text-lg">
                        Save this address for future luxury purchases
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="newsletter"
                        checked={newsletterOptIn}
                        onCheckedChange={setNewsletterOptIn}
                        className="border-purple-400 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600 w-5 h-5"
                      />
                      <Label htmlFor="newsletter" className="text-gray-300 cursor-pointer text-lg">
                        Subscribe to exclusive designer collections and early access
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Options */}
              <Card className="bg-black/40 backdrop-blur-xl border border-gray-800/50">
                <CardHeader className="pb-8">
                  <CardTitle className="flex items-center gap-4 text-white text-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-lg font-bold">
                      2
                    </div>
                    <div>
                      <h3>Premium Delivery Options</h3>
                      <p className="text-sm text-gray-400 font-normal mt-1">
                        Choose your preferred delivery experience
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping} className="space-y-6">
                    {shippingOptions.map((option) => (
                      <div key={option.id} className="relative">
                        <RadioGroupItem value={option.id} id={option.id} className="sr-only" />
                        <Label
                          htmlFor={option.id}
                          className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                            selectedShipping === option.id
                              ? "border-purple-500 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
                              : "border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-900/30"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                              <div
                                className={`p-3 rounded-xl ${
                                  selectedShipping === option.id
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                    : "bg-gray-800"
                                }`}
                              >
                                <option.icon className="h-6 w-6 text-white" />
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <h4 className="font-bold text-white text-xl">{option.name}</h4>
                                  {option.recommended && (
                                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                                      <Star className="w-3 h-3 mr-1" />
                                      Recommended
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-gray-400">{option.description}</p>
                                <div className="space-y-2">
                                  {option.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                      <CheckCircle className="h-4 w-4 text-green-400" />
                                      <span>{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">
                                {option.price === 0 ? <span className="text-green-400">FREE</span> : `$${option.price}`}
                              </div>
                              {option.price === 0 && (
                                <p className="text-xs text-green-400 mt-1">Premium service included</p>
                              )}
                            </div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="bg-black/40 backdrop-blur-xl border border-gray-800/50">
                <CardHeader className="pb-8">
                  <CardTitle className="flex items-center gap-4 text-white text-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-lg font-bold">
                      3
                    </div>
                    <div>
                      <h3>Payment Information</h3>
                      <p className="text-sm text-gray-400 font-normal mt-1">Secure payment processing</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-4">
                        <RadioGroupItem
                          value={method.id}
                          id={method.id}
                          className="border-purple-400 text-purple-600 w-5 h-5"
                        />
                        <Label
                          htmlFor={method.id}
                          className="flex items-center gap-4 cursor-pointer p-4 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 flex-1"
                        >
                          <method.icon className="h-6 w-6 text-purple-400" />
                          <div>
                            <p className="font-semibold text-white text-lg">{method.name}</p>
                            <p className="text-sm text-gray-400">{method.description}</p>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-6 pt-6 border-t border-gray-700/50">
                      <div className="space-y-3">
                        <Label htmlFor="cardNumber" className="text-white text-lg">
                          Card Number
                        </Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="cardName" className="text-white text-lg">
                          Name on Card
                        </Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="expiry" className="text-white flex items-center gap-2 text-lg">
                            <Calendar className="h-5 w-5 text-purple-400" />
                            Expiry Date
                          </Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="cvv" className="text-white flex items-center gap-2 text-lg">
                            <Lock className="h-5 w-5 text-purple-400" />
                            CVV
                          </Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="billingDifferent"
                          checked={billingDifferent}
                          onCheckedChange={setBillingDifferent}
                          className="border-purple-400 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600 w-5 h-5"
                        />
                        <Label htmlFor="billingDifferent" className="text-gray-300 cursor-pointer text-lg">
                          Billing address is different from shipping address
                        </Label>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Special Instructions */}
              <Card className="bg-black/40 backdrop-blur-xl border border-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-3">
                    <Gift className="h-6 w-6 text-purple-400" />
                    Special Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Any special delivery instructions, gift message, or notes for our team..."
                    className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-400 min-h-[120px] text-lg rounded-xl focus:border-purple-500/50 transition-all duration-300"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <Card className="bg-black/40 backdrop-blur-xl border border-gray-800/50">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Cart Items */}
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="relative">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={100}
                              height={125}
                              className="rounded-xl object-cover border border-gray-700/50"
                            />
                            <Badge className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                              {item.quantity}
                            </Badge>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div>
                              <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase">
                                {item.designer}
                              </p>
                              <h4 className="font-bold text-white text-lg leading-tight">{item.name}</h4>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                className={`text-xs ${
                                  item.rarity === "Ultra Rare"
                                    ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                                    : item.rarity === "Exclusive"
                                      ? "bg-gradient-to-r from-purple-400 to-pink-500"
                                      : item.rarity === "Limited"
                                        ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                                        : "bg-gradient-to-r from-green-400 to-emerald-500"
                                } text-white border-0`}
                              >
                                {item.rarity}
                              </Badge>
                              {item.isExclusive && (
                                <Badge className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs border-0">
                                  <Crown className="w-3 h-3 mr-1" />
                                  Exclusive
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-400">
                              Size: {item.size} • Color: {item.color}
                            </p>
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                ${item.price.toLocaleString()}
                              </span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${item.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="bg-gray-700/50" />

                    {/* Pricing Breakdown */}
                    <div className="space-y-4">
                      <div className="flex justify-between text-gray-300 text-lg">
                        <span>Subtotal</span>
                        <span>${subtotal.toLocaleString()}</span>
                      </div>
                      {savings > 0 && (
                        <div className="flex justify-between text-green-400 text-lg">
                          <span>You Save</span>
                          <span>-${savings.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-gray-300 text-lg">
                        <span>Shipping</span>
                        <span>
                          {shipping === 0 ? (
                            <span className="text-green-400 font-semibold">FREE</span>
                          ) : (
                            `$${shipping.toFixed(2)}`
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-300 text-lg">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator className="bg-gray-700/50" />
                      <div className="flex justify-between text-2xl font-bold text-white">
                        <span>Total</span>
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          ${total.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Place Order Button */}
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-xl font-bold rounded-xl shadow-2xl"
                    >
                      <Link href="/order-confirmation">
                        <Lock className="h-6 w-6 mr-3" />
                        Complete Secure Purchase
                      </Link>
                    </Button>

                    {/* Security & Trust Indicators */}
                    <div className="space-y-4 pt-6 border-t border-gray-700/50">
                      <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-green-400" />
                          <span>SSL Secured</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Lock className="h-4 w-4 text-green-400" />
                          <span>256-bit Encryption</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">
                          Your payment information is processed securely. We do not store credit card details.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badges */}
                <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-2 text-green-400">
                        <Award className="h-6 w-6" />
                        <span className="font-bold text-lg">Luxury Guarantee</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>Authenticity guaranteed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>90-day return policy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>Lifetime craftsmanship warranty</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
