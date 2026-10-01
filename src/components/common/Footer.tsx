"use client";

import Link from "next/link";
import { SubmitEvent, useState } from "react";
import Logo from "../shared/Logo";

const footerColumns = [
    {
        title: "Courses",
        links: [
            { label: "Featured Courses", href: "/courses" },
            { label: "Featured Categories", href: "/courses/categories" },
            { label: "Business", href: "/courses?category=business" },
            { label: "IT", href: "/courses?category=it" },
            { label: "Design", href: "/courses?category=design" },
        ],
    },
    {
        title: "Categories",
        links: [
            { label: "Development", href: "/courses?category=development" },
            { label: "Marketing", href: "/courses?category=marketing" },
            { label: "Photography", href: "/courses?category=photography" },
            { label: "Finance", href: "/courses?category=finance" },
            { label: "Sport", href: "/courses?category=sport" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Become a Creator", href: "/join-us" },
            { label: "Affiliate Program", href: "/affiliate" },
            { label: "Contact", href: "/contact" },
            { label: "Help", href: "/help" },
            { label: "About", href: "/about" },
        ],
    },
];

const legalLinks = [
    { id: 1, label: 'Privacy Policy', href: '/privacy-policy' },
    { id: 2, label: 'Terms of Service', href: '/terms-of-service' },
    { id: 3, label: 'Cookies Settings', href: '/cookies-settings' },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setMessage("Please enter your email address.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setMessage("Thanks for subscribing!");
        setEmail("");
    };

    return (
        <footer className="w-full bg-white">
            <div className="mx-auto w-full px-5 pt-16 sm:px-8 sm:pt-20 lg:px-25 lg:pt-18">
                {/* Logo */}
                <div className="w-fit">
                    <Logo textClassName="text-black" />
                </div>
                {/* Main footer */}
                <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                    {/* Newsletter */}
                    <div className="max-w-180">
                        {/* Description */}
                        <p className="satoshi pt-1.5 max-w-175 text-xs leading-[160%] text-[#3F4147]">
                            Stay Up to date with our latest features and releases by joining
                            our newsletter.
                        </p>

                        {/* Newsletter form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
                        >
                            <div className="w-full">
                                <label htmlFor="footer-email" className="sr-only">
                                    Email address
                                </label>

                                <input
                                    id="footer-email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                        setMessage("");
                                    }}
                                    placeholder="Enter your email"
                                    className="w-full rounded-full border border-[#D4D6DA] bg-white px-5 py-3 text-sm text-gray-500 outline-none transition-colors placeholder:text-gray-500 placeholder:text-sm placeholder:font-extralight focus:border-[#D4FB20]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="shrink-0 rounded-full bg-[#D4FB20] px-5 py-2 text-base font-light text-black transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
                            >
                                Send
                            </button>
                        </form>

                        {/* Form feedback */}
                        <p
                            className={`mt-3 min-h-5 text-sm ${message.includes("Thanks")
                                ? "text-green-600"
                                : "text-red-500"
                                }`}
                            aria-live="polite"
                        >
                            {message}
                        </p>

                        {/* Privacy text */}
                        <p className="satoshi text-xs font-extralight leading-[170%] text-[#4B4D52]">
                            By subscribing, you agree to our{" "}
                            <Link
                                href="/privacy-policy"
                                className="underline underline-offset-2 transition-colors hover:text-persian-blue-800"
                            >
                                Privacy Policy
                            </Link>{" "}
                            and consent to receive updates from our company.
                        </p>
                    </div>

                    {/* Footer links */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-10">
                        {footerColumns.map((column) => (
                            <div key={column.title}>
                                <nav aria-label={column.title}>
                                    <ul className="space-y-3">
                                        {column.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="satoshi text-xs text-[#3F4147] transition-colors duration-200 hover:text-persian-blue-800 hover:font-medium"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-16 border-t border-[#D7D8DB] sm:mt-20 lg:mt-32" />

                {/* Bottom footer */}
                <div className="flex flex-col gap-6 pt-6 pb-10 md:flex-row lg:items-start md:justify-between">
                    <p className="satoshi text-xs text-[#4B4D52]">
                        &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-start gap-x-7 gap-y-3 sm:gap-x-9">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className="satoshi text-xs text-[#4B4D52] transition-colors hover:text-persian-blue-800"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}