import Image from "next/image";

export interface Course {
    id: number;
    title: string;
    provider: string;
    category: string;
    rating: number;
    price: number;
    image: string;
    badge: string;
    enrolled: string;
    students: string[];
}

interface CourseCardProps {
    course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
    return (
        <article className="w-full rounded-3xl border border-[#E5E5E7] hover:border-[#D4FB20] bg-white p-3.5">
            {/* Course Image */}
            <div className="relative h-45 w-full overflow-hidden rounded-xl">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover rounded-xl"
                />

                {/* Image Bottom Badges */}
                <div className="absolute bottom-4 left-3 flex flex-wrap gap-2">
                    <span className="rounded-3xl bg-[#f6f6f688] px-3 py-1 text-[11px] font-light text-gray-600 backdrop-blur-md">
                        {course.badge}
                    </span>

                    <span className="rounded-3xl bg-[#f6f6f688] px-3 py-1 text-[11px] font-light text-gray-600 backdrop-blur-md">
                        {course.category}
                    </span>

                    <span className="rounded-3xl bg-[#f6f6f688] px-3 py-1 text-[11px] font-light text-gray-600 backdrop-blur-md">
                        {course.enrolled}
                    </span>
                </div>
            </div>

            {/* Course Information */}
            <div className="px-2 pt-4">
                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h3 className="truncate text-[18px] font-semibold leading-[120%] tracking-[-0.2px] text-[#16181D]">
                            {course.title}
                        </h3>

                        <p className="mt-1 text-[10px] text-[#82868E]">
                            by <span className="text-persian-blue-800">{course.provider}</span>
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-1 text-sm text-[#16181D]">
                        <span className="text-[16px] font-extralight text-gray-500">{course.rating}</span>

                        <span className="text-[#D4FB20] font-bold">
                            <Image src="/images/rating-star.svg" alt="Star" width={13} height={13} />
                        </span>
                    </div>
                </div>

                {/* Students */}
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="rounded-3xl bg-[#F5F5F6] px-3 py-1.5 text-[10px] text-[#82868E] flex items-center justify-center gap-x-1">
                            <Image src="/images/course-level.svg" alt="Course level" width={17} height={18} />
                            <span>Beginner</span>
                        </div>
                        {/* {course.students.map((student, index) => (
                            <div
                                key={`${student}-${index}`}
                                className={`relative h-7 w-7 overflow-hidden rounded-full border-2 border-white ${index !== 0 ? "-ml-2" : ""
                                    }`}
                            >
                                <Image
                                    src={student}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))} */}
                        <Image
                            src={"/images/enrolledStudents.svg"}
                            alt="Enrolled Students"
                            width={110}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-[18px] font-semibold leading-none text-persian-blue-800">
                        ${course.price}
                    </span>

                    <span className="text-[10px] text-[#82868E]">/lifetime</span>
                </div>
            </div>
        </article>
    );
}