import CompanyLogos from "@/components/landing/CompanyLogos";
import CourseCategories from "@/components/landing/CourseCategories";
import CourseSection from "@/components/landing/CourseSection";
import Hero from "@/components/landing/Hero";
import JoinByteSpace from "@/components/landing/JoinByteSpace";
import ProfessionalGrowth from "@/components/landing/ProfessionalGrowth";
import Testimonials from "@/components/landing/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mx-auto w-full">
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

        {/* Join Byte Space */}
        <JoinByteSpace />

        {/* Testimonials */}
        <Testimonials />
      </div>
    </main>
  );
}