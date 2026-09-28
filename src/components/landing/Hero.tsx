"use client";

import { Search } from "lucide-react";
import {  useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    console.log("Searching for:", query);
  };

  return (
    <section className="flex min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-140px)] items-center justify-center">
      <div className="mx-auto flex w-full max-w-225 flex-col items-center text-center gap-y-5 p-4 sm:p-0">
        {/* Main Heading */}
        <h1
          className={`max-w-300 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[65px]`}
        >
          Get Access to Hundreds Courses Available
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-210 text-sm leading-6 text-white/75 sm:text-sm sm:leading-7 lg:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mt-8 flex w-full max-w-162.5 flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search
              size={20}
              strokeWidth={1.8}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="What do you want to learn?"
              aria-label="Search courses"
              className="h-14 w-full rounded-full border border-white/10 bg-white px-5 pl-13 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-white focus:ring-2 focus:ring-white/20 sm:h-16 sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="h-14 shrink-0 rounded-full bg-black px-8 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:h-16 sm:px-10 sm:text-base"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}