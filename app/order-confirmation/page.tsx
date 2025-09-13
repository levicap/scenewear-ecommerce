"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Package, Truck, MapPin, Calendar, Download, Share2, ArrowRight, Star, Gift } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


const orderItems = [
  {
    id: 1,
    name: "Ethereal Silk Evening Dress",
    price: 2999,
    originalPrice: 3999,
    quantity: 1,
    size: "M",
    color: "Midnight Black",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=100&h=120&q=80",
  },
  {
    id: 2,
    name: "Minimalist Chic Midi",
    price: 1799,
    quantity: 1,
    size: "S",
    color: "Ivory",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=100&h=120&q=80",
  },
]

const orderDetails = {
  orderNumber: "LX-2024-001247",
  orderDate: "January 21, 2024",
  estimatedDelivery: "January 28, 2024",
  shippingAddress: {
    name: "Salma Ben Ahmed",
    address: "123 Fashion Avenue",
    city: "Tunis",
    state: "Tunis",
    zip: "1001",
  },
  paymentMethod: "•••• •••• •••• 4567",
  subtotal: 4798,
  shipping: 0,
  tax: 384,
  total: 5182,
}

export default function OrderConfirmationPage() {
  const [isShared, setIsShared] = useState(false)

  const handleShare = () => {
    setIsShared(true)
    setTimeout(() => setIsShared(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

      {/* Success Header */}
      <div className="relative overflow-hidden px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20" />
        <div className="container mx-auto py-16 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Order Confirmed!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Thank you for your purchase! Your order has been successfully placed and is being prepared for shipment.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-4 py-2">
                Order #{orderDetails.orderNumber}
              </Badge>
              <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg px-4 py-2">
                <Gift className="h-4 w-4 mr-1" />
                Free Gift Included
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 pb-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Timeline */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Package className="h-6 w-6 text-purple-400" />
                  Order Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">Order Confirmed</h3>
                      <p className="text-sm text-gray-400">Your order has been received and confirmed</p>
                      <p className="text-xs text-green-400">{orderDetails.orderDate} • Completed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center animate-pulse">
                      <Package className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">Preparing for Shipment</h3>
                      <p className="text-sm text-gray-400">Your items are being carefully prepared</p>
                      <p className="text-xs text-blue-400">In Progress</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 opacity-50">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <Truck className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-400">Shipped</h3>
                      <p className="text-sm text-gray-500">Your order is on its way</p>
                      <p className="text-xs text-gray-500">Pending</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 opacity-50">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-400">Delivered</h3>
                      <p className="text-sm text-gray-500">Package delivered to your address</p>
                      <p className="text-xs text-gray-500">Pending</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={120}
                          className="rounded-lg object-cover"
                        />
                        <Badge className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs">
                          {item.quantity}
                        </Badge>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-bold text-white text-lg">{item.name}</h4>
                        <p className="text-gray-400">
                          Size: {item.size} • Color: {item.color}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {item.price.toLocaleString()} TND
                          </span>
                          {item.originalPrice && (
                            <span className="text-gray-500 line-through">{item.originalPrice.toLocaleString()} TND</span>
                          )}
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
                            <Star className="h-4 w-4 mr-1" />
                            Rate Item
                          </Button>
                          <Button size="sm" className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
                            Buy Again
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">Delivery Address</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>{orderDetails.shippingAddress.name}</p>
                    <p>{orderDetails.shippingAddress.address}</p>
                    <p>
                      {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}{" "}
                      {orderDetails.shippingAddress.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-700/50">
                  <Calendar className="h-5 w-5 text-green-400" />
                  <div>
                    <p className="font-semibold text-white">Estimated Delivery</p>
                    <p className="text-green-400">{orderDetails.estimatedDelivery}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary & Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Order Summary */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>{orderDetails.subtotal.toLocaleString()} TND</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span className="text-green-400">FREE</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>{orderDetails.tax.toLocaleString()} TND</span>
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {orderDetails.total.toLocaleString()} TND
                    </span>
                  </div>
                </div>

                <div className="pt-4 space-y-2 text-sm text-gray-400">
                  <p>Payment Method: {orderDetails.paymentMethod}</p>
                  <p>Order Date: {orderDetails.orderDate}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Link href="/order-tracking">
                    <Package className="h-4 w-4 mr-2" />
                    Track Your Order
                  </Link>
                </Button>
                <Button className="w-full bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
                <Button
                  className="w-full bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  {isShared ? "Shared!" : "Share Order"}
                </Button>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-700/50">
              <CardHeader>
                <CardTitle className="text-white">What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                    <p className="text-white">You'll receive an email confirmation shortly with your order details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                    <p className="text-white">We'll send you tracking information once your order ships</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                    <p className="text-white">Your items will be delivered by {orderDetails.estimatedDelivery}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <div className="flex gap-3">
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white"
              >
                <Link href="/products">
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild className="flex-1 bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
                <Link href="/account/orders">View All Orders</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
