"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Package,
  Truck,
  MapPin,
  Clock,
  CheckCircle,
  Search,
  Phone,
  Mail,
  Calendar,
  Navigation,
  AlertCircle,
  Download,
  Share2,
  RefreshCw,
  Bell,
} from "lucide-react"
import Image from "next/image"

const trackingData = {
  orderNumber: "LX-2024-001247",
  status: "In Transit",
  estimatedDelivery: "January 28, 2024",
  currentLocation: "Distribution Center - Chicago, IL",
  carrier: "FashionLux Express",
  trackingNumber: "FLX789456123",
  timeline: [
    {
      status: "Order Confirmed",
      date: "Jan 21, 2024",
      time: "2:30 PM",
      location: "New York, NY",
      completed: true,
      description: "Your order has been confirmed and payment processed",
    },
    {
      status: "Processing",
      date: "Jan 21, 2024",
      time: "4:15 PM",
      location: "Fulfillment Center - NY",
      completed: true,
      description: "Items are being prepared and quality checked",
    },
    {
      status: "Shipped",
      date: "Jan 22, 2024",
      time: "9:00 AM",
      location: "New York, NY",
      completed: true,
      description: "Package has left our facility and is on its way",
    },
    {
      status: "In Transit",
      date: "Jan 24, 2024",
      time: "11:30 AM",
      location: "Chicago, IL",
      completed: true,
      current: true,
      description: "Package is moving through our network",
    },
    {
      status: "Out for Delivery",
      date: "Jan 28, 2024",
      time: "Expected",
      location: "Your City",
      completed: false,
      description: "Package will be delivered today",
    },
    {
      status: "Delivered",
      date: "Jan 28, 2024",
      time: "Expected",
      location: "123 Fashion Avenue",
      completed: false,
      description: "Package delivered to your address",
    },
  ],
  items: [
    {
      id: 1,
      name: "Ethereal Silk Evening Dress",
      price: 299.99,
      quantity: 1,
      image: "/placeholder.svg?height=120&width=100",
      designer: "Atelier Lumière",
    },
    {
      id: 2,
      name: "Minimalist Chic Midi",
      price: 179.99,
      quantity: 1,
      image: "/placeholder.svg?height=120&width=100",
      designer: "Serene Studios",
    },
  ],
}

export default function OrderTrackingPage() {
  const [trackingInput, setTrackingInput] = useState("")
  const [notifications, setNotifications] = useState(true)

  const currentStep = trackingData.timeline.findIndex((step) => step.current) + 1
  const progress = (currentStep / trackingData.timeline.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

      {/* Hero Section */}
      <div className="relative overflow-hidden px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto py-16 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <Package className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Track Your Order
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with real-time tracking information for your luxury fashion orders
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 pb-12">
        {/* Search Section */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 mb-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <Search className="h-6 w-6 text-blue-400" />
              Track Another Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter order number or tracking ID..."
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-500/20"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                <Search className="h-4 w-4 mr-2" />
                Track
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Tracking Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Status Card */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-3">
                    <Package className="h-6 w-6 text-purple-400" />
                    Order #{trackingData.orderNumber}
                  </CardTitle>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-4 py-2">
                    {trackingData.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Progress</span>
                    <span className="text-purple-400 font-semibold">{Math.round(progress)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Current Status */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-700/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">{trackingData.status}</h3>
                    <p className="text-blue-400">Currently at: {trackingData.currentLocation}</p>
                    <p className="text-gray-400 text-sm">Estimated delivery: {trackingData.estimatedDelivery}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                  >
                    <RefreshCw className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Clock className="h-6 w-6 text-green-400" />
                  Tracking Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingData.timeline.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                            step.completed
                              ? step.current
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500"
                                : "bg-gradient-to-r from-green-600 to-emerald-600 border-green-500"
                              : "bg-gray-700 border-gray-600"
                          }`}
                        >
                          {step.completed ? (
                            step.current ? (
                              <Truck className="h-5 w-5 text-white" />
                            ) : (
                              <CheckCircle className="h-5 w-5 text-white" />
                            )
                          ) : (
                            <Clock className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        {index < trackingData.timeline.length - 1 && (
                          <div
                            className={`w-0.5 h-16 mt-2 ${
                              step.completed ? "bg-gradient-to-b from-green-500 to-blue-500" : "bg-gray-600"
                            }`}
                          />
                        )}
                      </div>

                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <h3
                            className={`font-bold ${
                              step.current ? "text-blue-400" : step.completed ? "text-white" : "text-gray-400"
                            }`}
                          >
                            {step.status}
                          </h3>
                          {step.current && (
                            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{step.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {step.date} at {step.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {step.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Items in This Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingData.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30"
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={100}
                        className="rounded-lg object-cover border border-gray-600/50"
                      />
                      <div className="flex-1 space-y-2">
                        <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase">
                          {item.designer}
                        </p>
                        <h4 className="font-bold text-white">{item.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            ${item.price}
                          </span>
                          <span className="text-gray-400 text-sm">Qty: {item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Delivery Info */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Navigation className="h-6 w-6 text-green-400" />
                  Delivery Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Carrier</p>
                    <p className="text-white font-semibold">{trackingData.carrier}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Tracking Number</p>
                    <p className="text-white font-mono text-sm">{trackingData.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Estimated Delivery</p>
                    <p className="text-green-400 font-semibold">{trackingData.estimatedDelivery}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Bell className="h-6 w-6 text-yellow-400" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">SMS Updates</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      notifications
                        ? "bg-green-600 border-green-500 text-white"
                        : "bg-gray-700 border-gray-600 text-gray-300"
                    }`}
                    onClick={() => setNotifications(!notifications)}
                  >
                    {notifications ? "ON" : "OFF"}
                  </Button>
                </div>
                <p className="text-gray-400 text-sm">Get real-time updates sent directly to your phone</p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
                <Button className="w-full bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Tracking
                </Button>
                <Button className="w-full bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Report Issue
                </Button>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-700/50">
              <CardHeader>
                <CardTitle className="text-white">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Call Support</p>
                      <p className="text-gray-400">+1 (555) 123-LUXE</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-green-400" />
                    <div>
                      <p className="text-white font-medium">Email Support</p>
                      <p className="text-gray-400">support@fashionlux.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}
