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
    <section className="flex min-h-[calc(100svh-70px)] w-full items-stretch justify-center lg:min-h-[calc(100vh-70px)]">
      <div className="flex min-h-[calc(100svh-70px)] w-full flex-col lg:min-h-[calc(100vh-70px)]">
        {/* <div className="flex flex-1 w-full flex-col items-center justify-center gap-5 px-4 sm:px-6 lg:mb-5"> */}
        {/* TOP */}
        <div className="flex flex-1 h-fit w-full shrink-0 items-center justify-center px-4 sm:px-6 lg:mb-5 lg:px-8 lg:pt-16 lg:pb-10">
          <div className="mx-auto w-full max-w-250 text-center">
            <h1 className="text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[65px]">
              Get Access to Hundreds Courses Available
            </h1>

            <p className="mx-auto mt-5 max-w-200 text-sm leading-6 text-white/75 sm:text-sm sm:leading-7 lg:text-sm pt-3">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>
        </div>

        {/* MIDDLE / SEARCH */}
        <div className="flex w-full items-center justify-center px-4 sm:px-6 lg:mb-5 lg:pb-10">
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-115.25 flex-col items-center justify-center gap-2 md:max-w-none md:flex-row"
          >
            <div className="relative w-full max-w-115.25">
              <Image
                src="/images/hero/search.svg"
                alt="Search Icon"
                width={22}
                height={22}
                className="absolute left-6 top-1/2 -translate-y-1/2"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="h-12 w-full rounded-[22px] border border-[#D4D6DA] bg-white px-6 pl-14 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#D4FB20] sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="ml-1 h-11 w-full shrink-0 rounded-3xl bg-[#D4FB20] px-6 py-3 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] md:w-24"
            >
              Search
            </button>
          </form>
        </div>
        {/* </div> */}

        {/* BOTTOM / ELLIPSE */}
        <div className="flex max-lg:flex-1 w-full items-end justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-250 translate-y-px border">
            <Image
              src="/images/hero/ellipse.svg"
              alt="Ellipse"
              width={1000}
              height={1000}
              className="h-auto w-full object-contain z-0"
            />

            {/* Overlay layer — man + cards */}
            <div className="absolute inset-0 z-10">
              {/* Man */}
              <div className="absolute inset-0 flex items-end justify-center -mr-20">
                <Image
                  src="/images/hero/man.svg"
                  alt="Man"
                  width={1000}
                  height={1000}
                  className="max-h-200 md:max-h-245 max-w-100 md:max-w-155"
                />
              </div>

              {/* Card 1 — top left */}
              <div className="absolute left-[5%] md:left-[8%] lg:left-[22.5%] top-[-40%] md:top-[-12%] lg:top-[13%]">
                <Image
                  src="/images/hero/uiux.svg"
                  alt="UI/UX Design"
                  width={1000}
                  height={1000}
                  className="max-h-10 md:max-h-30 max-w-25 md:max-w-45"
                />
              </div>

              {/* Card 2 — top right */}
              <div className="absolute right-[5%] md:right-[10%] lg:right-[20%] top-[-50%] md:top-[-10%] lg:top-[15%]">
                <Image
                  src="/images/hero/learningProgress.svg"
                  alt="Learning Progress"
                  width={1000}
                  height={1000}
                  className="max-h-10 md:max-h-30 max-w-30 md:max-w-50"
                />
              </div>

              {/* Card 3 — bottom left */}
              <div className="absolute bottom-[8%] md:bottom-[10%] lg:bottom-[15%] left-[0%] md:left-[5%] lg:left-[15%]">
                <Image
                  src="/images/hero/happyStudents.svg"
                  alt="Happy Students"
                  width={1000}
                  height={1000}
                  className="max-h-20 md:max-h-50 max-w-35 md:max-w-60"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}