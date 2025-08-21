"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, Wrench, Shield, Zap, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      rating: 5,
      text: "Quick and professional oil change. The staff explained everything and the price was very reasonable. Will definitely be back!",
      author: "Sarah M.",
    },
    {
      rating: 5,
      text: "Thorough brake inspection caught a potential issue early. Saved me from a costly repair later! Great service.",
      author: "Mike R.",
    },
    {
      rating: 5,
      text: "Honest mechanics who don't try to upsell. They focus on what you actually need. Highly recommend!",
      author: "Jennifer L.",
    },
    {
      rating: 4,
      text: "Fast and efficient SMOG check. Got my certificate quickly and the price was fair. Clean facility too.",
      author: "David K.",
    },
    {
      rating: 5,
      text: "Been coming here for years. Always reliable service and fair pricing. The staff is friendly and knowledgeable.",
      author: "Maria G.",
    },
    {
      rating: 5,
      text: "Great experience with my salvage vehicle inspection. They knew exactly what was needed and got it done right.",
      author: "Robert T.",
    },
    {
      rating: 4,
      text: "Quick service, no waiting around. They use quality oil and the technicians are professional.",
      author: "Lisa H.",
    },
    {
      rating: 5,
      text: "Excellent brake inspection service. They showed me exactly what they were checking and explained everything clearly.",
      author: "James W.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">QUICK LUBE & SMOG</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Location
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="tel:+15107576775">
                <Phone className="h-4 w-4 mr-2" />
                (510) 757-6775
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">4.3 ⭐ (52 Reviews)</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">QUICK LUBE & SMOG</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional oil changes and safety inspections to keep your vehicle running safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="tel:+15107576775">
                <Phone className="h-4 w-4 mr-2" />
                Call (510) 757-6775
              </a>
            </Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Specialized Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on essential maintenance services to keep your vehicle safe and reliable on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Oil Change Service</CardTitle>
                <CardDescription>Quick and professional oil changes using premium oils</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                  <li>• Full Synthetic Oil</li>
                  <li>• Oil filter replacement included</li>
                  <li>• 15-point inspection</li>
                  <li>• Service reminder sticker</li>
                </ul>
                <div className="mt-6">
                  <div className="text-2xl font-bold text-primary">Call for Quote</div>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="tel:+15107576775">Call for Pricing</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Brake & Light Inspection</CardTitle>
                <CardDescription>Comprehensive brake system and lighting safety checks</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                  <li>• Brake pad thickness check</li>
                  <li>• Brake fluid level inspection</li>
                  <li>• Rotor condition assessment</li>
                  <li>• Complete lighting system test</li>
                </ul>
                <div className="mt-6">
                  <div className="text-2xl font-bold text-primary">Call for Quote</div>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="tel:+15107576775">Schedule Inspection</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Salvage Vehicle Inspection</CardTitle>
                <CardDescription>Specialized brake & light inspection for salvage vehicles</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                  <li>• Comprehensive brake system check</li>
                  <li>• Complete lighting system test</li>
                  <li>• Safety compliance verification</li>
                  <li>• Documentation for registration</li>
                </ul>
                <div className="mt-6">
                  <div className="text-2xl font-bold text-primary">Call for Quote</div>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="tel:+15107576775">Schedule Inspection</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">DMV Authorized SMOG Check</CardTitle>
                <CardDescription>Official emissions testing for vehicle registration</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                  <li>• DMV authorized testing station</li>
                  <li>• Complete emissions analysis</li>
                  <li>• Official certification provided</li>
                  <li>• Required for registration renewal</li>
                </ul>
                <div className="mt-6">
                  <div className="text-2xl font-bold text-primary">Call for Quote</div>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="tel:+15107576775">Schedule SMOG Test</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose QUICK LUBE & SMOG?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">ASE Certified</h4>
              <p className="text-muted-foreground">
                Our technicians are certified by the National Institute for Automotive Service Excellence
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Quality Guarantee</h4>
              <p className="text-muted-foreground">
                All our work comes with a 12-month/12,000-mile warranty for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Fast Service</h4>
              <p className="text-muted-foreground">
                Most services completed while you wait, with no appointment necessary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h3>
            <p className="text-muted-foreground">Real reviews from our Google Maps listing</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-muted border-border max-w-2xl mx-auto">
                      <CardContent className="pt-6 text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6 text-lg italic">"{testimonial.text}"</p>
                        <div className="font-semibold text-foreground text-lg">- {testimonial.author}</div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Visit Our Location</h3>
            <p className="text-muted-foreground">No appointment necessary for most services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <a
                        href="tel:+15107576775"
                        className="font-semibold text-card-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        (510) 757-6775
                      </a>
                      <div className="text-sm text-muted-foreground">Call for service info</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=691+W+Tennyson+Rd,+Hayward,+CA+94544"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-card-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        691 W Tennyson Rd
                      </a>
                      <div className="text-sm text-muted-foreground">Hayward, CA 94544</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-card-foreground">Business Hours</div>
                      <div className="text-sm text-muted-foreground">
                        Mon-Sat: 9AM-5:30PM
                        <br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Find Us</CardTitle>
                  <CardDescription>Located on W Tennyson Rd in Hayward</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[300px] rounded-md overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.7274146447667!2d-122.07172272389236!3d37.63209922036558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f94164965dea1%3A0x32ff39dbb167f4e0!2sQUICK%20LUBE%20%26%20SMOG!5e0!3m2!1sen!2sus!4v1755728814916!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-card-foreground">QUICK LUBE & SMOG</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>&copy; 2024 QUICK LUBE & SMOG. All rights reserved.</p>
              <p>Licensed & Insured • Professional Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
