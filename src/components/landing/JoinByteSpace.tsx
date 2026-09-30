import Image from "next/image";
import Link from "next/link";

export default function JoinByteSpace() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Top lime twisted cone */}
            <Image
                src="/images/cones/cone-top-lime-twisted.svg"
                alt=""
                aria-hidden="true"
                width={250}
                height={250}
                className="pointer-events-none absolute -left-10 -top-5 z-0 h-32 w-32 sm:-left-6 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:left-0 lg:h-62.5 lg:w-62.5"
            />

            {/* White pyramid */}
            <Image
                src="/images/cones/cone-white-piramid.svg"
                alt=""
                aria-hidden="true"
                width={124}
                height={124}
                className="pointer-events-none absolute bottom-20 left-0 sm:-left-4 z-0 h-16 w-16 sm:bottom-8 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:bottom-16 lg:-left-6.5 lg:h-42 lg:w-44"
            />

            {/* Lime ellipse */}
            <Image
                src="/images/cones/cone-ellipse.svg"
                alt=""
                aria-hidden="true"
                width={300}
                height={300}
                className="pointer-events-none absolute -bottom-8 -left-12 z-0 h-40 w-40 sm:-bottom-16 sm:-left-6 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:-bottom-18 lg:left-5 lg:h-75 lg:w-75"
            />

            {/* White twisted cone */}
            <Image
                src="/images/cones/cone-white-twisted.svg"
                alt=""
                aria-hidden="true"
                width={180}
                height={180}
                className="pointer-events-none absolute -top-5 left-[12%] z-0 h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:left-[13%] lg:top-0 lg:h-45 lg:w-45"
            />

            {/* White tank */}
            <Image
                src="/images/cones/cone-white-tank.svg"
                alt=""
                aria-hidden="true"
                width={200}
                height={200}
                className="pointer-events-none absolute -right-8 top-0 z-0 h-24 w-24 sm:-right-4 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:-right-19.5 lg:top-1.5 lg:h-80 lg:w-85"
            />

            {/* Bottom lime twisted cone */}
            <Image
                src="/images/cones/cone-bottom-lime-twisted.svg"
                alt=""
                aria-hidden="true"
                width={300}
                height={300}
                className="pointer-events-none absolute -bottom-16 -right-10 z-0 h-44 w-44 sm:-bottom-12 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:-bottom-15 lg:right-1.5 lg:h-75 lg:w-75"
            />

            {/* Lime pyramid */}
            <Image
                src="/images/cones/cone-lime-piramid.svg"
                alt=""
                aria-hidden="true"
                width={170}
                height={170}
                className="pointer-events-none absolute -top-2 right-[8%] z-0 h-20 w-20 sm:right-[10%] sm:h-24 sm:w-24 md:h-32 md:w-32 lg:right-[11.5%] lg:top-0 lg:h-42.5 lg:w-42.5"
            />

            <div className="relative z-10 mx-auto flex min-h-130 w-full max-w-350 items-center px-5 py-20 sm:min-h-140 sm:px-8 sm:py-24 md:min-h-150 lg:min-h-0 lg:px-28 lg:py-20">
                <div className="flex w-full flex-col items-center justify-center gap-y-6 text-center sm:gap-y-7 lg:gap-y-10">
                    {/* Heading */}
                    <h2 className="max-w-225 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[42px] lg:text-[40px]">
                        Unlock Your Potential as a
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        Creator with ByteSpace
                    </h2>

                    {/* Description */}
                    <p className="satoshi max-w-225 text-sm font-light leading-6 text-gray-300 sm:text-base sm:leading-7 lg:max-w-241 lg:text-sm lg:leading-relaxed">
                        Experience the collaboration of numerous creators and an expanding
                        selection of courses. Register now and become a part of a community
                        comprising over 10,000 local and international creators. Utilizes
                        our Course Editor, and showcase your expertise by publishing your
                        finest course on the ByteSpace Course Library.
                    </p>

                    {/* CTA Button */}
                    <Link href="/join-us" className='bg-[#D4FB20] px-4.5 py-2 rounded-3xl transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]'>Join as Creator</Link>
                </div>
            </div>
        </section>
    );
}