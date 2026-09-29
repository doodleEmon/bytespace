interface CompanyLogoProps {
    name: string;
    src: string;
}

export default function CompanyLogo({
    name,
    src,
}: CompanyLogoProps) {
    return (
        <div
            className="group flex h-10.25 w-42.5 shrink-0 items-center justify-center"
            aria-label={name}
        >
            <div className="h-[90%] w-[90%] bg-[#82868E] transition-colors duration-200 group-hover:bg-[#bae10a]"
                style={{
                    maskImage: `url(${src})`,
                    WebkitMaskImage: `url(${src})`,
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                }}
            />
        </div>
    );
}