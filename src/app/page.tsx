import CompanyLogos from "@/components/landing/CompanyLogos";
import CourseCategories from "@/components/landing/CourseCategories";
import CourseSection from "@/components/landing/CourseSection";
import Hero from "@/components/landing/Hero";
import ProfessionalGrowth from "@/components/landing/ProfessionalGrowth";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-persian-blue-800
        bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_2px,transparent_2px)]
        bg-size-[110px_105px]
      "
    >
      <div className="mx-auto w-full">
        {/* Navbar */}
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <Navbar />
        </div>

        {/* Hero */}
        <section className="relative w-full">
          <div className="mx-auto w-full max-w-350 px-0 sm:px-8 lg:px-12 relative">
            <Hero />
          </div>
          <Image
            src="/images/3dOrnament.svg"
            alt="3D Ornament"
            width={1719}
            height={803}
            className="absolute bottom-0 z-50 w-full object-contain"
          />
        </section>

        {/* Companies */}
        <CompanyLogos />

        {/* Courses */}
        <CourseSection />

        {/* Course Categories */}
        <CourseCategories />

        {/* Professional Growth */}
        <ProfessionalGrowth />
      </div>
    </main>
  );
}