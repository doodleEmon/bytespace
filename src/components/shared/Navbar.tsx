"use client";

import { clashDisplay } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex h-20 items-center justify-between">
        {/* Left — Logo + Name */}
        <Link href="/" className="flex items-end gap-1">
            {/* Replace this with your actual logo */}
            <Image
              src="/images/vector.png"
              alt="Logo"
              width={31}
              height={31}
              priority
            />

          <span className={`text-2xl font-bold h-7 text-white ${clashDisplay.className}`}>
            ByteSpace
          </span>
        </Link>

        {/* Middle — Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-medium text-white transition-colors hover:scale-[1.02]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="hidden px-4 py-2 text-base font-normal text-white transition-colors hover:scale-[1.02]"
          >
            Sign In
          </Link>

          <Link
            href="/join-us"
            className="rounded-full text-base font-normal text-white transition-transform hover:scale-[1.02]"
          >
            Join Us
          </Link>

          {/* Shopping Bag */}
          <button
            type="button"
            aria-label="Shopping bag"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          >
            <Image
              src="/images/shopping-bag.png"
              alt="Shopping bag"
              width={22}
              height={22}
              priority
            />
          </button>
        </div>
      </nav>
    </header>
  );
}