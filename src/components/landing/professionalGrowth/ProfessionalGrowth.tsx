import ProfessionalGrowthFirstSection from "./ProfessionalGrowthFirstSection";
import ProfessionalGrowthSecondSection from "./ProfessionalGrowthSecondSection";

export default function ProfessionalGrowth() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F6]">
      <div className="mx-auto w-full max-w-350 px-5 sm:px-8 lg:px-28">
        <ProfessionalGrowthFirstSection />
        <ProfessionalGrowthSecondSection />
      </div>
    </section>
  );
}