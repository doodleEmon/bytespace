import Image from 'next/image'

interface FeatureItem {
    id: string | number;
    label: string;
}

const Features: FeatureItem[] = [
    { id: "expertise", label: "Share Your Expertise" },
    { id: "monetize", label: "Monetize Your Passion" },
    { id: "flexibility", label: "Flexibility and Autonomy" },
    { id: "community", label: "Build a Community" },
];

export default function ProfessionalGrowthSecondSection() {
    return (
        <div className="relative flex flex-col items-center justify-center md:flex-row overflow-hidden">
            <div
                className="absolute -bottom-100 -left-90 size-200 pointer-events-none opacity-100 z-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
                }}
            />
            {/* Left Content */}
            <div className="relative h-160 w-full md:w-1/2 md:ml-20">
                <Image
                    src="/images/manageCourse/women.svg"
                    alt="Woman"
                    fill
                    className="absolute bottom-0 right-0 object-contain z-20"
                />
                <Image
                    src="/images/manageCourse/manage-course-total-revenue.svg"
                    alt="Manage Course Total Revenue"
                    width={220}
                    height={110}
                    className="absolute left-10 top-10 object-cover "
                />
                <Image
                    src="/images/manageCourse/manage-course-year-to-date.svg"
                    alt="Manage Course Year to Date"
                    width={120}
                    height={120}
                    className="absolute top-45 left-10 object-cover"
                />
                <Image
                    src="/images/manageCourse/happyStudents.svg"
                    alt="Happy Students"
                    width={240}
                    height={100}
                    className="absolute right-18 bottom-40 object-cover z-30"
                />
                <Image
                    src="/images/manageCourse/manage-course-mask.svg"
                    alt="Manage Course Export Mask"
                    width={200}
                    height={200}
                    className="absolute right-23.5 top-25 object-cover z-30"
                />
            </div>

            {/* Right Image Wrapper */}
            <div className="z-10 w-full md:w-1/2">
                <h1 className="text-2xl font-semibold leading-tight tracking-tight lg:text-[40px]">
                    Create & Manage <br /> Courses Easily.
                </h1>
                <p className="mt-8 text-sm font-light leading-6 text-gray-600 lg:pr-12">
                    <span className='font-bold'>ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
                </p>
                <div className="mt-8 flex flex-col gap-y-3">
                    {Features.map((feature) => (
                        <div key={feature.id} className="flex items-center gap-x-1.5">
                            <Image
                                src="/images/manageCourse/manage-course-tic.svg"
                                alt="Checkmark icon"
                                height={22}
                                width={22}
                            />
                            <span className="text-[15px] font-medium text-gray-600">
                                {feature.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
