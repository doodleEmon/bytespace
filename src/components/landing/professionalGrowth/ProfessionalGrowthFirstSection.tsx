import Image from "next/image";
import CountUp from "@/components/landing/professionalGrowth/CountUp";

export default function ProfessionalGrowthFirstSection() {
    return (
        <div className="relative grid min-h-155 items-center gap-12 py-10 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:pt-16">
            {/* Decorative glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 -top-55 z-0 h-140 w-140 rounded-full"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.2) 53%, rgba(203, 252, 1, 0.1) 75%, rgba(203, 252, 1, 0) 100%)",
                }}
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-45.75 -left-128.75 z-0 h-284.25 w-284.25 rounded-full"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.0368) 53%, rgba(0, 59, 226, 0.0096) 75%, rgba(0, 59, 226, 0) 100%)",
                }}
            />

            {/* =========================
          LEFT CONTENT
      ========================== */}
            <div className="relative z-10 max-w-140">
                <h2 className="text-3xl font-semibold leading-[120%] tracking-[-0.5px] text-[#16181D] sm:text-4xl lg:text-[40px]">
                    Your Path to Professional
                    <br className="hidden sm:block" /> Growth Starts Here!
                </h2>

                <p className="mt-6 max-w-135 text-sm font-light leading-7 text-gray-600 sm:mt-8 sm:text-base">
                    Explore our curated selection of courses tailored to enhance your
                    capabilities and accelerate your career journey. Whether you are
                    looking to sharpen specific skills, gain industry expertise, or
                    embark on a new career path entirely, we have the resources you
                    need.
                </p>

                {/* Statistics */}
                {/* <div className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-6 sm:mt-10 sm:gap-x-12">
                    <div>
                        <p className="text-2xl font-medium text-persian-blue-800 sm:text-[32px]">
                            12K
                        </p>
                        <span className="text-sm font-light text-gray-600">
                            Students
                        </span>
                    </div>

                    <div>
                        <p className="text-2xl font-medium text-persian-blue-800 sm:text-[32px]">
                            70+
                        </p>
                        <span className="text-sm font-light text-gray-600">
                            Courses
                        </span>
                    </div>

                    <div>
                        <p className="text-2xl font-medium text-persian-blue-800 sm:text-[32px]">
                            16
                        </p>
                        <span className="text-sm font-light text-gray-600">
                            Creators
                        </span>
                    </div>
                </div> */}
                <div className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-6 sm:mt-10 sm:gap-x-12">
                    <div>
                        <p className="text-2xl font-medium text-persian-blue-800 sm:text-[32px]">
                            <CountUp end={12} suffix="K" />
                        </p>
                        <span className="text-sm font-light text-gray-600">Students</span>
                    </div>

                    <div>
                        <p className="text-2xl font-medium text-persian-blue-800 sm:text-[32px]">
                            <CountUp end={70} suffix="+" />
                        </p>
                        <span className="text-sm font-light text-gray-600">Courses</span>
                    </div>

                    <div>
                        <p className="text-2xl font-medium text-persian-blue-800 sm:text-[32px]">
                            <CountUp end={16} />
                        </p>
                        <span className="text-sm font-light text-gray-600">Creators</span>
                    </div>
                </div>
            </div>

            {/* =========================
          RIGHT VISUAL
      ========================== */}
            {/* <div className="relative mx-auto h-110 w-full max-w-140 sm:h-130 lg:h-145 lg:ml-5"> */}
            <div className="relative mx-auto h-110 w-full max-w-140 scale-[1.2] sm:h-130 lg:h-145 lg:ml-5 mt-20">
                {/* Course card */}
                <Image
                    src="/images/professionalGrowth/professional-growth-course-card.svg"
                    alt="Course card"
                    width={320}
                    height={360}
                    className="absolute left-[2%] top-[2%] z-10 h-auto w-48 sm:w-64 lg:w-72"
                />

                {/* Person */}
                <div className="absolute inset-x-0 bottom-0 z-20 h-[90%]">
                    <Image
                        src="/images/professionalGrowth/professional-growth-man.svg"
                        alt="Professional learning"
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 560px"
                    />
                </div>

                {/* Learning progress */}
                <Image
                    src="/images/professionalGrowth/professional-growth-learning-progress.svg"
                    alt="Learning progress"
                    width={200}
                    height={120}
                    className="absolute right-[4%] top-[34%] z-30 h-auto w-32.5 sm:w-42.5 lg:w-50"
                />

                {/* Decorative mask */}
                <Image
                    src="/images/professionalGrowth/professional-growth-export-mask.svg"
                    alt=""
                    aria-hidden="true"
                    width={200}
                    height={200}
                    className="absolute right-[-2%] top-[8%] z-40 h-auto w-32.5 sm:w-41.25 lg:w-50"
                />
            </div>
        </div>
    );
}