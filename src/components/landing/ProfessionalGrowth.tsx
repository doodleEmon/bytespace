import ProfessionalGrowthFirstSection from "./ProfessionalGrowthFirstSection";
import ProfessionalGrowthSecondSection from "./ProfessionalGrowthSecondSection";

export default function ProfessionalGrowth() {
    return (
        <section className=" bg-[#F5F5F6] py-20 sm:py-24 lg:py-24 overflow-hidden">
            <div className="mx-auto h-full w-full px-5 sm:px-8 lg:px-12">
                {/* max-w-280 */}
                {/* first portion */}
                <ProfessionalGrowthFirstSection/>

                {/* second portion */}
                <ProfessionalGrowthSecondSection/>
            </div>
        </section>
    );
}