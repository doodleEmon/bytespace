import Image from "next/image";

interface CategoryCardProps {
    name: string;
    icon: string;
}

export default function CategoryCard({ name, icon }: CategoryCardProps) {
    return (
        <div className="group flex aspect-square w-full flex-col items-center justify-center rounded-2xl border border-gray-200 hover:border-[#D4FB20] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Icon Wrapper */}
            <div className="flex size-14 items-center justify-center rounded-full bg-[#D4FB20] transition-transform duration-300 group-hover:scale-105">
                <Image
                    src={icon}
                    alt={name}
                    width={22}
                    height={22}
                    className="object-cover"
                />
            </div>

            {/* Label */}
            <h3 className="mt-2.5 text-center text-base font-medium text-gray-600">
                {name}
            </h3>
        </div>
    );
}