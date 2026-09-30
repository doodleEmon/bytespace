import ProfessionalGrowthFirstSection from "./ProfessionalGrowthFirstSection";
import ProfessionalGrowthSecondSection from "./ProfessionalGrowthSecondSection";

export default function ProfessionalGrowth() {
    return (
        <section className=" bg-[#F5F5F6] overflow-hidden">
            <div className="mx-auto h-full w-full">
                {/* max-w-280 */}
                {/* first portion */}
                <ProfessionalGrowthFirstSection/>

                {/* second portion */}
                <ProfessionalGrowthSecondSection/>
            </div>
        </section>
    );
}