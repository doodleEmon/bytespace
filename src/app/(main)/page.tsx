import CompanyLogos from "@/components/landing/company/CompanyLogos";
import CourseCategories from "@/components/landing/courseCategory/CourseCategories";
import CourseSection from "@/components/landing/courses/CourseSection";
import Hero from "@/components/landing/Hero";
import JoinByteSpace from "@/components/landing/JoinByteSpace";
import ProfessionalGrowth from "@/components/landing/ProfessionalGrowth";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="mx-auto w-full">
        {/* Hero */}
        <section className="relative w-full">
          {/* Hero Section */}
          <Hero />
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