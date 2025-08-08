import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-auto">
        <Hero />
        <Features />

        {/* CTA strip */}
        <section className="bg-amber-500">
          <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-white">Ready to get clearer insights?</h3>
              <p className="text-sm text-amber-100">Start a free trial or request early access for your team.</p>
            </div>
            <div>
              <Link href="/auth/signup" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-semibold text-amber-600 shadow-sm">Get Started</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}