import Image from "next/image";

interface TestimonialCardProps {
    name: string;
    image: string;
    learnerType: string;
    review: string;
}

export default function TestimonialCard({
    name,
    image,
    learnerType,
    review,
}: TestimonialCardProps) {
    return (
        <article className="flex min-h-75 w-full flex-col rounded-3xl bg-white p-5 transition-all duration-200 hover:ring-1 hover:ring-[#D4FB20] hover:shadow-xl z-20">
            {/* Author Image */}
            <div className="relative h-17.5 w-17.5 shrink-0 overflow-hidden rounded-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="70px"
                    className="object-cover"
                />
            </div>

            {/* Author Name */}
            <h3 className="mt-5 text-base font-semibold text-[#16181D] sm:text-lg">
                {name}
            </h3>
            <p className="text-persian-blue-800 text-sm font-extralight">{learnerType}</p>

            {/* Review */}
            <p className="satoshi mt-4 max-w-90 text-sm font-extralight leading-6 text-gray-500">
                {review}
            </p>
        </article>
    );
}