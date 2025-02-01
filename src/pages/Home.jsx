// app/src/components/landing-page.tsx
// import { Header1 } from "../components/Header";
import { PublicHeader } from "../components/publicHeader";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import {
  RocketIcon,
  BarChartIcon,
  ShieldCheckIcon,
  CloudIcon,
} from "lucide-react";

export default function LandingPage() {
  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Powerful Analytics for Your
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {" "}
              Website
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Gain deep insights into user behavior with our privacy-focused
            analytics platform. Real-time tracking, custom events, and intuitive
            dashboards.
          </p>

          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <RocketIcon className="h-4 w-4" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>

          <div className="mt-12 rounded-xl border bg-card shadow-xl overflow-hidden">
            <img
              src="/dashboard-preview.png"
              alt="Dashboard Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </header>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Analytics?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChartIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold">Real-time Metrics</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor user activity as it happens with sub-second latency.
                  Track page views, events, and conversions in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShieldCheckIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold">Privacy First</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  GDPR-compliant tracking with no cookies required. We respect
                  user privacy while providing powerful insights.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CloudIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold">Global Infrastructure</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built on edge network with 99.9% uptime. Process millions of
                  events with no performance impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16 bg-background">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <CardHeader>
                <h3 className="text-2xl font-bold">Starter</h3>
                <div className="text-4xl font-bold mt-4">
                  $0<span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Perfect for small projects
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> 10k monthly
                    events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> Basic
                    analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> 1 website
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="p-6 border-2 border-primary relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg">
                Popular
              </div>
              <CardHeader>
                <h3 className="text-2xl font-bold">Pro</h3>
                <div className="text-4xl font-bold mt-4">
                  $29<span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">For growing businesses</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> 100k
                    monthly events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> Advanced
                    analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> 5 websites
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Free Trial</Button>
              </CardFooter>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <div className="text-4xl font-bold mt-4">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">For large organizations</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> Unlimited
                    events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> Custom SLAs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" /> Dedicated
                    support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-background">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold">Analytics</h4>
                <p className="text-muted-foreground">
                  Privacy-focused web analytics that helps you grow.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Product</h4>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Company</h4>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Legal</h4>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      GDPR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              © 2024 Analytics. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
