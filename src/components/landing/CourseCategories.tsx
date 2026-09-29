import CategoryCard from "./CategoryCard";

const categories = [
    {
        name: "Design",
        icon: "/images/categories/design.svg",
    },
    {
        name: "Development",
        icon: "/images/categories/development.svg",
    },
    {
        name: "IT & Software",
        icon: "/images/categories/it-software.svg",
    },
    {
        name: "Business",
        icon: "/images/categories/business.svg",
    },
    {
        name: "Marketing",
        icon: "/images/categories/marketing.svg",
    },
    {
        name: "Photography",
        icon: "/images/categories/photography.svg",
    },
];

export default function CourseCategories() {
    return (
        <section className="bg-white pb-16 sm:pb-18 lg:pb-24">
            <div className="mx-auto w-full max-w-280 px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="mx-auto max-w-270 text-center">
                    <h2 className="text-[32px] font-semibold leading-[120%] tracking-[-0.3px] text-[#16181D]">
                        Explore Diverse Learning Paths at Bytespace
                    </h2>

                    <p className="mt-5 text-sm leading-6 font-light text-[#82868E]">
                        At Bytespace, we believe in empowering individuals through
                        knowledge. Our diverse range of courses spans various fields,
                        ensuring there&apos;s something for everyone. Unleash your potential and
                        explore our carefully curated categories.
                    </p>
                </div>

                {/* Category Grid */}
                <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.name}
                            name={category.name}
                            icon={category.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}