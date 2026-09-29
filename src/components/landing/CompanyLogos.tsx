import CompanyLogo from "@/components/landing/CompanyLogo";

const companies = [
    {
        name: "Company One",
        src: "/images/companies/company-1.svg",
    },
    {
        name: "Company Two",
        src: "/images/companies/company-2.svg",
    },
    {
        name: "Company Three",
        src: "/images/companies/company-3.svg",
    },
    {
        name: "Company Four",
        src: "/images/companies/company-4.svg",
    },
    {
        name: "Company Five",
        src: "/images/companies/company-5.svg",
    },
];

export default function CompanyLogos() {
    return (
        <section className="h-48 bg-[#F5F5F6]">
            <div className="mx-auto flex h-full w-full max-w-350 items-center justify-center px-5 sm:px-8 lg:px-12">
                <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
                    {companies.map((company) => (
                        <CompanyLogo
                            key={company.name}
                            name={company.name}
                            src={company.src}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}