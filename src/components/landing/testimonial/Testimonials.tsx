import TestimonialCard from "./TestimonialCard";

interface Testimonial {
    id: number;
    name: string;
    image: string;
    learnerType: string;
    review: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah M.",
        image: "/images/testimonials/tes-1.png",
        learnerType: 'Enthusiastic Learner',
        review:
            `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`
    },
    {
        id: 2,
        name: "James L.",
        image: "/images/testimonials/tes-2.png",
        learnerType: 'Lifelong Learner',
        review:
            `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`
    },
    {
        id: 3,
        name: "Alex B.",
        image: "/images/testimonials/tes-3.png",
        learnerType: 'Inspired Creator',
        review:
            `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`
    },
];

export default function Testimonials() {
    return (
        <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
            {/* Decorative glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[30%] -top-30 z-0 h-140 w-140 rounded-full"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.56) 0%, rgba(203, 252, 1, 0.2) 53%, rgba(203, 252, 1, 0.1) 75%, rgba(203, 252, 1, 0) 100%)",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-70 top-[10%] z-0 h-140 w-140 rounded-full"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.3) 53%, rgba(203, 252, 1, 0.1) 75%, rgba(203, 252, 1, 0) 100%)",
                }}
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-45.75 -left-128.75 z-0 h-284.25 w-284.25 rounded-full opacity-50"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.5) 0%, rgba(0, 59, 226, 0.3) 53%, rgba(0, 59, 226, 0.1) 75%, rgba(0, 59, 226, 0) 100%)",
                }}
            />
            <div className="mx-auto w-full max-w-350 px-5 py-20 sm:px-8 sm:py-24 lg:px-28 lg:py-24 z-20">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-y-5">
                    <h2 className="md:w-1/2 text-3xl font-semibold leading-[120%] tracking-[-0.5px] text-[#16181D] sm:text-2xl lg:text-[38px]">
                        Discover What Our <br />Community Is Saying
                    </h2>

                    <p className="md:w-1/2 satoshi text-sm font-extralight text-gray-700 leading-6 z-30">
                        At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10.25">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            name={testimonial.name}
                            image={testimonial.image}
                            learnerType={testimonial.learnerType}
                            review={testimonial.review}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}