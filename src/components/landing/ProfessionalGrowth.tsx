import Image from "next/image";

export default function ProfessionalGrowth() {
    return (
        <section className=" bg-[#F5F5F6] py-20 sm:py-24 lg:py-24 overflow-hidden">
            <div className="mx-auto h-full w-full px-5 sm:px-8 lg:px-12">
                {/* max-w-280 */}
                {/* first portion */}
                <div className="relative flex flex-col items-center justify-center gap-8 md:flex-row md:gap-20 md:pl-16">
                    <div
                        className="absolute -top-150 -left-60 size-284 pointer-events-none opacity-100 z-0"
                        style={{
                            background:
                                "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
                        }}
                    />
                    {/* Left Content - set to w-full md:w-1/2 */}
                    <div className="z-10 w-full md:w-1/2">
                        <h1 className="text-2xl font-semibold leading-tight tracking-tight lg:text-[40px]">
                            Your Path to Professional <br /> Growth Starts Here!
                        </h1>
                        <p className="mt-8 text-sm font-light leading-6 text-gray-600 lg:pr-12">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>
                        <div className="mt-8 flex items-center gap-8 lg:gap-12">
                            <div>
                                <h1 className="text-2xl font-medium text-persian-blue-800 lg:text-[32px]">12K</h1>
                                <span className="text-sm font-light text-gray-600">Students</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium text-persian-blue-800 lg:text-[32px]">70+</h1>
                                <span className="text-sm font-light text-gray-600">Courses</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium text-persian-blue-800 lg:text-[32px]">16</h1>
                                <span className="text-sm font-light text-gray-600">Creators</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Wrapper - set to w-full md:w-1/2 */}
                    <div className="relative h-120 w-full md:w-1/2">
                        <Image
                            src="/images/professionalGrowth/professional-growth-course-card.svg"
                            alt="Professional Growth Course Card"
                            width={320}
                            height={360}
                            className="absolute -left-8 top-0 object-cover"
                        />
                        <Image
                            src="/images/man.svg"
                            alt="Man"
                            fill
                            className="absolute bottom-0 right-0 object-cover"
                        />
                        <Image
                            src="/images/professionalGrowth/professional-growth-learning-progress.svg"
                            alt="Learning Progress"
                            width={200}
                            height={120}
                            className="absolute bottom-42 right-8 object-cover"
                        />
                        <Image
                            src="/images/professionalGrowth/professional-growth-export-mask.svg"
                            alt="Export Mask"
                            width={200}
                            height={200}
                            className="absolute -right-3.5 top-14 object-cover"
                        />
                    </div>
                </div>

                {/* second portion */}
                <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
                    <div>
                        left
                    </div>
                    <div>
                        right
                    </div>
                </div>
            </div>
        </section>
    );
}