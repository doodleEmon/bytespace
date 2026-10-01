"use client";

import { useMemo, useState } from "react";
import CourseCard, { Course } from "./CourseCard";

const categories = [
    "Featured",
    "Development",
    "Design",
    "Business",
    "Marketing",
    "Photography",
    "Music",
    "Finance",
    "Technology",
    "Lifestyle",
    "Health",
    "Personal Growth",
    "Writing",
    "Data Science",
    "AI & ML",
    "UI/UX",
    "Freelancing",
    "Career",
];

const extraCategories = [
    "Leadership",
    "Productivity",
    "Entrepreneurship",
    "Communication",
    "Animation",
    "Video Editing",
];

const courses: Course[] = [
    {
        id: 1,
        title: "Complete Web Development",
        provider: "ByteSpace Academy",
        category: "Development",
        rating: 4.5,
        price: 25,
        image: "/images/courses/course-1.jpg",
        badge: "Bestseller",
        enrolled: "1.2K+",
        students: [
            "/images/students/student-1.jpg",
            "/images/students/student-2.jpg",
            "/images/students/student-3.jpg",
        ],
    },
    {
        id: 2,
        title: "UI/UX Design Masterclass",
        provider: "Design Studio",
        category: "UI/UX",
        rating: 4.8,
        price: 25,
        image: "/images/courses/course-2.jpg",
        badge: "Popular",
        enrolled: "980+",
        students: [
            "/images/students/student-2.jpg",
            "/images/students/student-3.jpg",
            "/images/students/student-4.jpg",
        ],
    },
    {
        id: 3,
        title: "Digital Marketing Strategy",
        provider: "Growth Academy",
        category: "Marketing",
        rating: 4.6,
        price: 25,
        image: "/images/courses/course-3.jpg",
        badge: "Trending",
        enrolled: "1.5K+",
        students: [
            "/images/students/student-3.jpg",
            "/images/students/student-4.jpg",
            "/images/students/student-5.jpg",
        ],
    },
    {
        id: 4,
        title: "Business & Entrepreneurship",
        provider: "Business Hub",
        category: "Business",
        rating: 4.7,
        price: 25,
        image: "/images/courses/course-4.jpg",
        badge: "Featured",
        enrolled: "750+",
        students: [
            "/images/students/student-1.jpg",
            "/images/students/student-4.jpg",
            "/images/students/student-5.jpg",
        ],
    },
    {
        id: 5,
        title: "Modern Photography",
        provider: "Creative Lab",
        category: "Photography",
        rating: 4.5,
        price: 25,
        image: "/images/courses/course-5.jpg",
        badge: "Popular",
        enrolled: "620+",
        students: [
            "/images/students/student-2.jpg",
            "/images/students/student-3.jpg",
            "/images/students/student-5.jpg",
        ],
    },
    {
        id: 6,
        title: "Artificial Intelligence",
        provider: "Tech Academy",
        category: "AI & ML",
        rating: 4.9,
        price: 25,
        image: "/images/courses/course-6.jpg",
        badge: "New",
        enrolled: "1.8K+",
        students: [
            "/images/students/student-1.jpg",
            "/images/students/student-2.jpg",
            "/images/students/student-5.jpg",
        ],
    },
];

export default function CourseSection() {
    const [activeCategory, setActiveCategory] = useState("Featured");
    const [showMore, setShowMore] = useState(false);

    const visibleCategories = showMore
        ? [...categories, ...extraCategories]
        : categories;

    const filteredCourses = useMemo(() => {
        if (activeCategory === "Featured") {
            return courses;
        }

        return courses.filter(
            (course) => course.category === activeCategory
        );
    }, [activeCategory]);

    return (
        <section className="bg-white py-20 sm:py-24 lg:py-18">
            <div className="mx-auto w-full max-w-280 px-5 sm:px-8 lg:px-12">
                {/* Heading */}
                <div className="mx-auto max-w-212.5 text-center">
                    <h2 className="text-[32px] font-semibold leading-[120%] tracking-[-0.44px] text-[#16181D] sm:text-[38px] lg:text-[40px]">
                        Discover Your Passion, <br /> Build Your Skills
                    </h2>

                    <p className="mt-5 text-sm leading-6 font-light text-[#82868E]">
                        At Bytespace Courses, we bring you closer to life-changing
                        knowledge. Explore a variety of courses across different fields,
                        from technology to the arts, and make a difference in your career
                        and life.
                    </p>
                </div>

                {/* Filters */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-y-5 gap-x-4 px-8 sm:px-5.5">
                    {visibleCategories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button 
                            key={category} 
                            type="button" 
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-3xl px-3.5 py-2.5 text-sm font-normal transition-colors duration-200
                  ${isActive ? "bg-[#D4FB20] text-[#16181D]" : "bg-[#F5F5F6] text-[#82868E] hover:bg-[#D4FB20] hover:text-[#16181D]"}`}>{category}</button>);
                    })}

                    {/* More */}
                    <button
                        type="button"
                        onClick={() => setShowMore((previous) => !previous)}
                        className="px-4 py-3 text-sm font-medium text-persian-blue-800 transition-opacity hover:opacity-70"
                    >
                        {showMore ? "-Less" : "+More"}
                    </button>
                </div>

                {/* Courses */}
                <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* No Results */}
                {filteredCourses.length === 0 && (
                    <div className="flex min-h-62.5 items-center justify-center">
                        <p className="text-sm text-[#82868E]">
                            No courses available in this category yet.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}