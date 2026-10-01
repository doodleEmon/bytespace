import Image from "next/image";

interface FeatureItem {
    id: string;
    label: string;
}

const features: FeatureItem[] = [
    { id: "expertise", label: "Share Your Expertise" },
    { id: "monetize", label: "Monetize Your Passion" },
    { id: "flexibility", label: "Flexibility and Autonomy" },
    { id: "community", label: "Build a Community" },
];

export default function ProfessionalGrowthSecondSection() {
    return (
        <div className="relative grid min-h-155 items-center gap-12 py-10 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:py-0">
            {/* Decorative Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-30 -left-70 z-0 h-130 w-130 rounded-full"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.3) 53%, rgba(203, 252, 1, 0.1) 75%, rgba(203, 252, 1, 0) 100%)",
                }}
            />

            {/* =========================
          LEFT VISUAL
      ========================== */}
            <div className="relative order-2 mx-auto h-107.5 w-full max-w-140 sm:h-130 lg:order-1 lg:h-145 lg:-ml-5">
                {/* Woman Image */}
                {/* <div className="absolute inset-x-0 bottom-0 z-20 h-[150%]"> */}
                <div className="absolute inset-x-0 bottom-0 z-20 h-[150%] translate-x-8">
                    <Image
                        src="/images/manageCourse/women.svg"
                        alt="Course creator"
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 55vw, 620px"
                    />
                </div>

                {/* Total Revenue */}
                <Image
                    src="/images/manageCourse/manage-course-total-revenue.svg"
                    alt="Total revenue"
                    width={220}
                    height={110}
                    className="absolute left-[4%] top-[0%] z-0 h-auto w-36 sm:w-44 lg:w-52"
                />

                {/* Year to Date */}
                <Image
                    src="/images/manageCourse/manage-course-year-to-date.svg"
                    alt="Year to date"
                    width={120}
                    height={120}
                    className="absolute left-[3.7%] top-[23.5%] z-0 h-auto w-16 sm:w-24 lg:w-30"
                />

                {/* Happy Students */}
                <Image
                    src="/images/manageCourse/happyStudents.svg"
                    alt="Happy students"
                    width={240}
                    height={100}
                    className="absolute bottom-[26%] right-[-2%] z-30 h-auto w-40 sm:w-52 lg:w-60"
                />

                {/* Decorative Mask */}
                <Image
                    src="/images/manageCourse/manage-course-mask.svg"
                    alt=""
                    aria-hidden="true"
                    width={200}
                    height={200}
                    className="absolute right-[1.5%] top-[9%] z-30 h-auto w-32 sm:w-44 lg:w-52"
                />
            </div>

            {/* =========================
          RIGHT CONTENT
      ========================== */}
            <div className="relative z-10 order-1 max-w-140 lg:order-2 lg:ml-4 lg:mb-38">
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#16181D] sm:text-4xl lg:text-[40px]">
                    Create &amp; Manage
                    <br className="hidden sm:block" /> Courses Easily.
                </h2>

                <p className="mt-6 max-w-130 text-sm font-light leading-7 text-gray-600 sm:mt-8">
                    <span className="font-bold">ByteSpace</span> supports individuals or
                    entities in the creation, publication, and administration of
                    educational courses.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex items-center gap-3">
                            <Image
                                src="/images/manageCourse/manage-course-tic.svg"
                                alt=""
                                aria-hidden="true"
                                width={22}
                                height={22}
                                className="h-5.5 w-5.5 shrink-0"
                            />
                            <span className="text-sm font-medium text-gray-600 sm:text-[15px]">
                                {feature.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}