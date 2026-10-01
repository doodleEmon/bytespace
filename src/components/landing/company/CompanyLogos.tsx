import CompanyLogo from "./CompanyLogo";
import styles from "./CompanyLogos.module.css";

const companies = [
    { name: "Company One", src: "/images/companies/company-1.svg" },
    { name: "Company Two", src: "/images/companies/company-2.svg" },
    { name: "Company Three", src: "/images/companies/company-3.svg" },
    { name: "Company Four", src: "/images/companies/company-4.svg" },
    { name: "Company Five", src: "/images/companies/company-5.svg" },
];

export default function CompanyLogos() {
    return (
        <section className="bg-[#F5F5F6] py-8 md:py-16">
            <div className="mx-auto w-full max-w-full px-5 sm:px-8 lg:max-w-350 lg:px-12">
                <div className={styles.marquee}>
                    <div className={styles.track}>
                        {[...companies, ...companies].map((company, i) => (
                            <CompanyLogo
                                key={`${company.name}-${i}`}
                                name={company.name}
                                src={company.src}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}