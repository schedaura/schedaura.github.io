import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MousePointer, Palette, Share, Calendar, Zap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DiamondStar } from "@/components/diamond-star"
import { GalaxyBackground } from "@/components/galaxy-background"

export default function HowItWorksPage() {
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
          <Link href="/how-it-works" className="text-sm font-medium text-purple-400">
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

      {/* Hero */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto text-center">
          <DiamondStar className="mx-auto mb-8 text-indigo-400" size={80} />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            How schedaura Works
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Create stunning booking pages in minutes with our intuitive drag-and-drop builder
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MousePointer className="w-10 h-10 text-white" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Step 1
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Drag & Drop Elements</h3>
              <p className="text-slate-300 mb-6">
                Start with a template or blank canvas. Drag elements like calendars, forms, images, and text blocks
                exactly where you want them.
              </p>
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Calendar widget</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Contact forms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Service descriptions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Pricing tables</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                  Step 2
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Customize Your Brand</h3>
              <p className="text-slate-300 mb-6">
                Apply your brand colors, fonts, and logo. Choose from mystical themes or create your own unique
                aesthetic that matches your business.
              </p>
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Custom color schemes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Font selection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Logo integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Theme templates</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share className="w-10 h-10 text-white" />
                </div>
                <Badge className="absolute -top-2 -right-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Step 3
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Publish & Share</h3>
              <p className="text-slate-300 mb-6">
                Get your custom URL and start accepting bookings immediately. Share your page on social media, embed it
                on your website, or send direct links.
              </p>
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Custom domain</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Social sharing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Website embedding</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">QR code generation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Powerful Features Under the Hood
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Everything you need to create professional booking experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Smart Scheduling Engine</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Intelligent Calendar Sync</h4>
                    <p className="text-slate-300">
                      Automatically syncs with Google Calendar, Outlook, and other popular calendar apps to prevent
                      double bookings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Instant Confirmations</h4>
                    <p className="text-slate-300">
                      Send automated confirmation emails and SMS messages with calendar invites and meeting details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Client Management</h4>
                    <p className="text-slate-300">
                      Keep track of client preferences, booking history, and important notes all in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-center">
                <DiamondStar className="mx-auto mb-4 text-purple-400" size={40} />
                <h4 className="text-xl font-bold text-white mb-4">Coming Soon</h4>
                <p className="text-slate-300">
                  Interactive demo will be available here to show you exactly how the drag-and-drop builder works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Ready to Transform Your Booking Process?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join the waitlist and be the first to experience the magic of schedaura
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
            >
              <Link href="/" className="flex items-center">
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
