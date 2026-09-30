import Image from 'next/image';

export default function ProfessionalGrowthFirstSection() {
    return (
        <div className="relative flex flex-col-reverse items-start justify-center gap-8 md:flex-row md:gap-20 md:pl-28">
            <div
                className="absolute -top-150 -left-60 size-284 pointer-events-none opacity-100 z-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
                }}
            />
            {/* Left Content - set to w-full md:w-1/2 */}
            <div className="z-10 w-full md:w-1/2 md:mt-24">
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
            <div className="relative h-150 w-full md:w-1/2">
                <Image
                    src="/images/professionalGrowth/professional-growth-course-card.svg"
                    alt="Professional Growth Course Card"
                    width={320}
                    height={360}
                    className="absolute -left-10 top-0 object-cover"
                />
                <Image
                    src="/images/professionalGrowth/professional-growth-man.svg"
                    alt="Man"
                    fill
                    className="absolute bottom-0 left-0 object-cover z-10 zoom-100"
                />
                <Image
                    src="/images/professionalGrowth/professional-growth-learning-progress.svg"
                    alt="Learning Progress"
                    width={200}
                    height={120}
                    className="absolute top-42 right-12 object-cover z-20"
                />
                <Image
                    src="/images/professionalGrowth/professional-growth-export-mask.svg"
                    alt="Export Mask"
                    width={200}
                    height={200}
                    className="absolute right-1 top-7 object-cover z-30"
                />
            </div>
        </div>
    )
}
