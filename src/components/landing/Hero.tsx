"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    console.log("Searching for:", query);
  };

  return (
    <section className="flex min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-140px)] items-start lg:items-center justify-center">
      <div className="mx-auto flex w-full flex-col items-center text-center gap-y-5 p-4 sm:p-0">
        {/* Main Heading */}
        <h1
          className={`mt-16 max-w-220 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[65px]`}
        >
          Get Access to Hundreds Courses Available
        </h1>

        {/* Description */}
        <p className="mt-2 max-w-210 text-sm leading-6 text-white/75 sm:text-sm sm:leading-7 lg:text-sm">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mt-8 flex w-full items-center justify-center gap-2"
        >
          {/* Search Input */}
          <div className="relative w-full max-w-115.25">
            <Image
              src="/images/search.svg"
              alt="Search Icon"
              width={22}
              height={22}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              className="h-12 w-full rounded-[22px] border-0 bg-white px-6 pl-14 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white/30"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="ml-1 h-11 w-24 shrink-0 rounded-3xl bg-[#D4FB20] px-6 py-3 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] "
          >
            Search
          </button>
        </form>
        <div className="mt-10 relative">
          <Image
            src="/images/ellipse.svg"
            alt="Ellipse"
            width={1000}
            height={1000}
            className="w-full max-w-250 object-contain"
          />
          <Image
            src="/images/man.svg"
            alt="Man"
            width={630}
            height={590}
            className="w-full max-w-157.5 max-h-147.5 object-contain absolute bottom-0 left-1/2 -translate-x-1/2 ml-10"
          />
          <Image
            src="/images/uiux.svg"
            alt="UI/UX Designer"
            width={180}
            height={65}
            className="w-full max-w-45 max-h-16 lg:max-h-130 object-contain absolute left-[22%] top-[13%]"
          />
          <Image
            src="/images/happyStudents.svg"
            alt="Happy Students"
            width={230}
            height={100}
            className="w-full max-w-57.5 max-h-25 lg:max-h-130 object-contain absolute left-[15%] bottom-[14%]"
          />
          <Image
            src="/images/learningProgress.svg"
            alt="Learning Progress"
            width={200}
            height={75}
            className="w-full max-w-50 max-h-18.75 lg:max-h-130 object-contain absolute right-[20%] top-[15%]"
          />
        </div>
      </div>
    </section>
  );
}