import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-auto">
        {/* Dark Hero Section */}
        <Hero />
        
        {/* Light Features Section */}
        <Features />

        {/* Trust indicators */}
        {/* Or add company partners here */}

        {/* CTA strip */}
        <section className="relative bg-cyan-600">
          <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Ready to preserve your organization's knowledge?
              </h3>
              <p className="text-sky-100">
                See how Alunyte transforms employee transitions into competitive advantages.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/auth/signup" 
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-sky-600 shadow-lg hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-white"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}
