import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <section className="relative overflow-hidden bg-[#063BE8] text-white">
                <Navbar />

                <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.45) 1px, transparent 1px)",
                        backgroundSize: "93px 93px",
                    }}
                />

                <main className="flex min-h-[calc(100svh-70px)] w-full items-center justify-center px-4 pb-16 sm:px-6 sm:pb-20 md:min-h-[calc(100svh-80px)] md:px-8 md:pb-24 lg:min-h-[calc(100vh-70px)] lg:px-8 lg:pt-18 lg:pb-28">
                    <div className="flex w-full flex-col items-center text-center">
                        <div className="relative flex w-full flex-col items-center">
                            {/* 404 */}
                            <h1 className="bg-[linear-gradient(180deg,#D4FB20_0%,rgba(212,251,32,0.96)_25%,rgba(212,251,32,0.81)_50.5%,rgba(212,251,32,0.61)_68%,rgba(255,255,255,0)_100%)] bg-clip-text text-[150px] font-semibold leading-none tracking-tight text-transparent sm:text-[210px] md:text-[300px] lg:text-[420px] lg:leading-none">
                                404
                            </h1>

                            {/* Message */}
                            <h1 className="relative z-10 -mt-2 text-xl font-semibold leading-[1.25] text-white sm:-mt-4 sm:text-3xl md:-mt-7 md:text-4xl lg:absolute lg:-bottom-10 lg:ml-5 lg:mt-0 lg:text-6xl lg:leading-18">
                                The page you are looking
                                <br />
                                for doesn&apos;t exist
                            </h1>
                        </div>

                        <div className="z-10 mt-8 w-full max-w-[760px] text-center sm:mt-10 md:mt-12 lg:mt-10">
                            <p className="mx-auto max-w-[600px] text-xs leading-5 text-white/80 sm:text-sm sm:leading-6 md:text-[15px]">
                                Try to use a correct url or go back to homepage to start again
                            </p>

                            <Link
                                href="/"
                                className="mt-7 inline-flex h-9 items-center justify-center rounded-full bg-[#D4FB20] px-5 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:mt-8"
                            >
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