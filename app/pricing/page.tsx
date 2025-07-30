import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DiamondStar } from "@/components/diamond-star"
import { GalaxyBackground } from "@/components/galaxy-background"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <GalaxyBackground />

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center border-b border-purple-500/20">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="schedaura" width={40} height={40} className="w-10 h-10" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            schedaura
          </span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link href="/how-it-works" className="text-sm font-medium hover:text-purple-400 transition-colors">
            How It Works
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-purple-400">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto text-center">
          <DiamondStar className="mx-auto mb-8 text-indigo-400" size={80} />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core drag-and-drop builder.
          </p>
          <Badge variant="secondary" className="mb-8 bg-purple-500/20 text-purple-300 border-purple-500/30">
            Early Bird Special - 50% Off First Year
          </Badge>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm relative">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <Star className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Starter</CardTitle>
                <div className="text-4xl font-bold text-white mt-4">
                  $9
                  <span className="text-lg font-normal text-slate-400">/month</span>
                </div>
                <p className="text-slate-300 mt-2">Perfect for solo entrepreneurs</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">1 booking page</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Drag & drop builder</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Basic templates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Calendar integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Email notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Up to 50 bookings/month</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-8">Join Waitlist</Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-slate-800/50 border-pink-500/20 backdrop-blur-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <div className="flex justify-center mb-4">
                  <Zap className="w-8 h-8 text-pink-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Professional</CardTitle>
                <div className="text-4xl font-bold text-white mt-4">
                  $29
                  <span className="text-lg font-normal text-slate-400">/month</span>
                </div>
                <p className="text-slate-300 mt-2">For growing businesses</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">5 booking pages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Advanced drag & drop</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Premium templates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Custom branding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">SMS notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Analytics dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Up to 500 bookings/month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Priority support</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 mt-8">
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800/50 border-yellow-500/20 backdrop-blur-sm relative">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <Crown className="w-8 h-8 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-white mt-4">
                  $99
                  <span className="text-lg font-normal text-slate-400">/month</span>
                </div>
                <p className="text-slate-300 mt-2">For large organizations</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Unlimited booking pages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">White-label solution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Custom integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Team collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Unlimited bookings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">24/7 dedicated support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Custom domain</span>
                  </div>
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 mt-8">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">When will schedaura launch?</h3>
              <p className="text-slate-300 mb-6">
                We're planning to launch in Q2 2024. Early access members will get first access to the beta version.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Can I change plans later?</h3>
              <p className="text-slate-300 mb-6">
                You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Is there a free trial?</h3>
              <p className="text-slate-300 mb-6">
                Yes! All plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">What integrations are supported?</h3>
              <p className="text-slate-300 mb-6">
                We support Google Calendar, Outlook, Zoom, Stripe, PayPal, and many more. Custom integrations available
                on Enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <DiamondStar className="mx-auto mb-6 text-purple-400" size={50} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-lg mb-8">Join our waitlist and secure your early bird discount</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
            >
              <Link href="/">Join Waitlist - 50% Off</Link>
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
        </div>
      </footer>
    </div>
  )
}
