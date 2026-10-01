"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../shared/Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full lg:pt-2">
      <nav className="flex h-18 lg:h-20 items-center justify-between">
        {/* Left — Logo + Name */}
        <Logo onClick={() => setIsMenuOpen(false)} className="text-white" />

        {/* Middle — Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-8 mt-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-transform duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right — Desktop Actions */}
        <div className="hidden items-center gap-2 sm:gap-3 md:flex lg:gap-2 mt-2">
          <Link
            href="/login"
            className="px-3 py-2 sm:px-4 text-sm text-gray-300 hover:text-white transition-transform duration-200"
          >
            Sign In
          </Link>

          <Link
            href="/join-us"
            className="px-3 py-2 sm:px-4 text-sm font-normal text-gray-300 hover:text-white transition-transform duration-200"
          >
            Join Us
          </Link>

          {/* Shopping Bag */}
          <button
            type="button"
            aria-label="Shopping bag"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10"
          >
            <Image
              src="/images/shopping-bag.png"
              alt="Shopping bag"
              width={22}
              height={22}
              priority
              className="size-5.5"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition-transform duration-200 ${isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition-transform duration-200 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 right-0 top-full z-50 overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen
            ? "pointer-events-auto max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
          }`}
      >
        <div className="border border-[#D4FB20] bg-persian-blue-800/95 p-3 backdrop-blur-md sm:px-8 rounded-xl">
          {/* Navigation Links */}
          <div className="flex flex-col gap-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-normal text-white transition-colors hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4 px-4">
            <Link
              href="/sign-in"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-center text-sm font-normal"
            >
              Sign In
            </Link>

            <Link
              href="/join-us"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-center text-sm font-normal"
            >
              Join Us
            </Link>

            <button
              type="button"
              aria-label="Shopping bag"
              className="items-center justify-center"
            >
              <Image
                src="/images/shopping-bag.png"
                alt="Shopping bag"
                width={22}
                height={22}
                className="size-5.5"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}