"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../shared/Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

interface NavbarBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarBar({ isMenuOpen, setIsMenuOpen }: NavbarBarProps) {
  return (
    <nav className="h-18 w-full lg:h-20">
      <div className="mx-auto flex h-full w-full lg:max-w-6xl items-center justify-between px-10 lg:px-12">
        {/* Logo */}
        <Logo onClick={() => setIsMenuOpen(false)} className="text-white" />

        {/* Desktop Navigation */}
        <div className="mt-2 hidden items-center md:gap-4 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="mt-2 hidden md:flex items-center md:gap-2 ">
          <Link
            href="/login"
            className="px-2 py-2 text-sm text-gray-300 transition-colors duration-200 hover:text-white lg:px-4"
          >
            Sign In
          </Link>

          <Link
            href="/join-us"
            className="px-2 py-2 text-sm font-normal text-gray-300 transition-colors duration-200 hover:text-white lg:px-4"
          >
            Join Us
          </Link>

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
      </div>
    </nav>
  );
}

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  return (
    <div
      className={`fixed left-5 right-5 top-[72px] z-[90] overflow-hidden transition-all duration-300 sm:left-8 sm:right-8 md:hidden ${isMenuOpen
          ? "pointer-events-auto max-h-96 opacity-100"
          : "pointer-events-none max-h-0 opacity-0"
        }`}
    >
      <div className="rounded-xl border border-[#D4FB20] bg-[#063BE8]/95 p-3 shadow-xl backdrop-blur-xl">
        {/* Navigation Links */}
        <div className="flex flex-col">
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
        <div className="mt-4 flex items-center justify-between border-t border-white/20 px-4 pt-4">
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="text-center text-sm font-normal text-white"
          >
            Sign In
          </Link>

          <Link
            href="/join-us"
            onClick={() => setIsMenuOpen(false)}
            className="text-center text-sm font-normal text-white"
          >
            Join Us
          </Link>

          <button
            type="button"
            aria-label="Shopping bag"
            className="flex h-8 w-8 items-center justify-center"
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
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollNavbar, setShowScrollNavbar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setShowScrollNavbar(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY < lastScrollY) {
        setShowScrollNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowScrollNavbar(false);
        setIsMenuOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Normal Navbar */}
      <header className="relative z-40 w-full lg:pt-2">
        <NavbarBar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </header>

      {/* Scroll-Up Navbar */}
      <header
        className={`fixed left-0 top-0 z-100 w-full border-b border-white/15 bg-[#063BE8]/70 backdrop-blur-lg transition-transform duration-300 ease-out ${showScrollNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <NavbarBar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </header>

      {/* ONE Mobile Dropdown */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
}