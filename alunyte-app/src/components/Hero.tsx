"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.heroMesh} relative`}>
      {/* inner content wrapper — this has the Tailwind bg so it sits above the mesh */}
      <div className={` mx-auto max-w-7xl px-6 py-20 lg:py-32 relative z-10`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Illuminate your data. Empower your decisions.
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Alunyte blends intuitive analytics with lightweight AI to surface action you can trust—fast. Get the insights you need without the noise.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link href="/auth/signup" className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600">
                Get Started
                <ArrowRight size={16} />
              </Link>
              <a href="#features" className="text-sm font-semibold text-gray-900">Learn more →</a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-semibold">✓</div>
                <div>Trusted by early teams</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">AI</div>
                <div>Fast model-backed insights</div>
              </div>
            </div>
          </div>

          {/* Illustration/Visual placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
              <div className="h-48 w-full rounded-md bg-gradient-to-br from-amber-200 to-indigo-100 flex items-center justify-center text-gray-700 font-medium">Analytics Preview</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-gray-50 p-3">Summary</div>
                <div className="rounded-md bg-gray-50 p-3">Predictions</div>
                <div className="rounded-md bg-gray-50 p-3">Alerts</div>
                <div className="rounded-md bg-gray-50 p-3">Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
