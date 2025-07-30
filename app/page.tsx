import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Calendar, Palette, Zap, Users, Star, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DiamondStar } from "@/components/diamond-star"
import { GalaxyBackground } from "@/components/galaxy-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <GalaxyBackground />

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center border-b border-purple-500/20">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="schedaura" width={40} height={40} className="w-10 h-10" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-300 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
            schedaura
          </span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link href="/how-it-works" className="text-sm font-medium hover:text-purple-400 transition-colors">
            How It Works
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section - Custom Design */}
      <section className="relative z-10 min-h-screen flex items-center px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight">
                Welcome to modern scheduling
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
                Design stunning, custom booking pages with our intuitive drag-and-drop builder.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="bg-slate-800/50 border-purple-500/30 text-white placeholder:text-slate-400"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 whitespace-nowrap">
                  Join Waitlist
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Early bird pricing
                </div>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <DiamondStar className="text-purple-400/60" size={120} />
                <DiamondStar className="absolute -top-8 -right-8 text-indigo-400/40" size={60} />
                <DiamondStar className="absolute -bottom-6 -left-6 text-blue-400/50" size={40} />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-sm">Scroll to explore</span>
              <ArrowRight className="w-5 h-5 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Powerful Features Coming Soon
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Everything you need to create professional booking pages that convert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Palette className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Drag & Drop Builder</h3>
                </div>
                <p className="text-slate-300">
                  Intuitive visual editor to customize every element of your booking page without code
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <Calendar className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Smart Scheduling</h3>
                </div>
                <p className="text-slate-300">
                  Intelligent calendar integration with automatic timezone detection and conflict prevention
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Instant Setup</h3>
                </div>
                <p className="text-slate-300">
                  Get your booking page live in minutes with our pre-designed templates and themes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Client Management</h3>
                </div>
                <p className="text-slate-300">
                  Built-in CRM to track client interactions, preferences, and booking history
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Custom Branding</h3>
                </div>
                <p className="text-slate-300">
                  Full brand customization with your colors, fonts, and logo for a professional look
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Analytics & Insights</h3>
                </div>
                <p className="text-slate-300">
                  Detailed analytics to understand your booking patterns and optimize conversion
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <DiamondStar className="mx-auto mb-6 text-purple-400" size={50} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Be Among the First to Experience schedaura
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join our exclusive early access program and get lifetime discounts, priority support, and input on new
              features.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-8 py-3"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/20 px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/logo.png" alt="schedaura" width={32} height={32} className="w-8 h-8" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                schedaura
              </span>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-purple-400 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm mt-4">© 2024 schedaura. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
