import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DiamondStar } from "@/components/diamond-star"
import { GalaxyBackground } from "@/components/galaxy-background"

export default function ContactPage() {
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
          <Link href="/pricing" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium text-purple-400">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto text-center">
          <DiamondStar className="mx-auto mb-8 text-indigo-400" size={80} />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Have questions about schedaura? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-slate-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-slate-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-slate-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-slate-400 min-h-[120px]"
                      placeholder="Tell us more about your question or feedback..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                  We're here to help you create magical booking experiences. Reach out to us through any of these
                  channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Email Us</h3>
                        <p className="text-slate-300">hello@schedaura.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-indigo-500/20 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                        <p className="text-slate-300">Available 9 AM - 6 PM PST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg">
                        <Calendar className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Schedule a Demo</h3>
                        <p className="text-slate-300">Book a personalized walkthrough</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-500/20 rounded-lg">
                        <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Location</h3>
                        <p className="text-slate-300">San Francisco, CA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-slate-800/30 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">When will schedaura be available?</h4>
                    <p className="text-slate-300 text-sm">
                      We're planning to launch in Q2 2024. Join our waitlist for early access!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Can I integrate with my existing tools?</h4>
                    <p className="text-slate-300 text-sm">
                      Yes! We support popular calendar apps, payment processors, and CRM systems.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Is there a free plan?</h4>
                    <p className="text-slate-300 text-sm">
                      We offer a 14-day free trial for all plans. Check our pricing page for details.
                    </p>
                  </div>
                </div>
              </div>
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
              Ready to Transform Your Booking Process?
            </h2>
            <p className="text-slate-300 text-lg mb-8">Join thousands of others waiting for schedaura to launch</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg px-8 py-3"
            >
              <Link href="/">Join the Waitlist</Link>
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
