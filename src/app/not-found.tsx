import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";


export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <section className="relative overflow-hidden bg-[#063BE8] text-white">
                <Navbar />

                <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.45) 1px, transparent 1px)", backgroundSize: "93px 93px" }} />

                <main className="flex min-h-[calc(100svh-70px)] w-full items-center justify-center px-4 sm:px-6 lg:min-h-[calc(100vh-70px)] lg:px-8 lg:pt-18 lg:pb-28">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative">
                            <h1 className="bg-[linear-gradient(180deg,#D4FB20_0%,rgba(212,251,32,0.96)_25%,rgba(212,251,32,0.81)_50.5%,rgba(212,251,32,0.61)_68%,rgba(255,255,255,0)_100%)] bg-clip-text lg:text-[420px] font-semibold tracking-tight text-transparent lg:leading-none">
                                404
                            </h1>
                            <h1 className="ml-5 text-2xl font-semibold text-white lg:text-6xl absolute -bottom-10 leading-18">
                                The page you are looking
                                <br />
                                for doesn&apos;t exist
                            </h1>
                        </div>

                        <div className="z-10 max-w-190 mt-10 text-center">
                            <p className="mx-auto mt-7 text-sm leading-6 text-white/80 sm:text-[15px]">
                                Try to use a correct url or go back to homepage to start again
                            </p>

                            <Link href="/" className="mt-10 inline-flex h-9 items-center justify-center rounded-full bg-[#D4FB20] px-5 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
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