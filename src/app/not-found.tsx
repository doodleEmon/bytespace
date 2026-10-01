import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";


export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <section className="relative overflow-hidden bg-[#063BE8] text-white">
                <Navbar />

                <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.45) 1px, transparent 1px)", backgroundSize: "93px 93px" }} />

                <main className="relative flex min-h-170 flex-col items-center justify-center px-5 pb-20 pt-24 sm:min-h-[700px] sm:px-8 lg:min-h-[750px] lg:px-12 lg:pb-24 lg:pt-28">
                    <div className="relative flex flex-col items-center text-center">
                        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] select-none text-[250px] font-bold leading-none tracking-[-18px] text-transparent opacity-90 [background:linear-gradient(180deg,#D4FB20_15%,#D4FB20_50%,#8DAE61_100%)] bg-clip-text sm:text-[310px] sm:tracking-[-22px] md:text-[360px] md:tracking-[-28px] lg:text-[430px] lg:tracking-[-35px]">
                            404
                        </div>

                        <div className="relative z-10 max-w-190">
                            <h1 className="text-[42px] font-semibold leading-[1.08] tracking-[-1.5px] sm:text-[50px] md:text-[56px] lg:text-[58px]">
                                The page you are looking
                                <br />
                                for doesn&apos;t exist
                            </h1>

                            <p className="mx-auto mt-7 max-w-107 text-sm leading-6 text-white/80 sm:text-[15px]">
                                Try to use a correct url or go back to homepage to start again
                            </p>

                            <Link href="/" className="mt-6 inline-flex h-9 items-center justify-center rounded-full bg-[#D4FB20] px-5 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </main>
            </section>

            <Footer />
        </div>
    );
}