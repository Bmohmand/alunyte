"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-md bg-amber-400/20 p-2">
                <div className="text-amber-500 font-extrabold text-lg">A</div>
              </div>
              <span className="font-semibold text-gray-900">Alunyte</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/about" className="hover:text-gray-900">About</Link>
            <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/signin" className="text-sm text-gray-700 hover:text-gray-900">Sign in</Link>
            <Link href="/auth/signup" className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 inline-flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md">About</Link>
            <Link href="/pricing" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md">Pricing</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md">Contact</Link>
            <div className="mt-2 px-2">
              <Link href="/auth/signup" onClick={() => setOpen(false)} className="block rounded-md bg-amber-500 px-4 py-2 text-center font-semibold text-white">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;