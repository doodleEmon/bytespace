import Hero from "@/components/landing/Hero";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-persian-blue-800
        bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_2px,transparent_2px)]
        bg-size-[110px_105px]
      "
    >
      <div className="mx-auto w-full max-w-350 px-0 sm:px-8 lg:px-12">
        {/* Navbar */}
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <Navbar />
        </div>

        {/* Hero */}
        <section>
          <div className="mx-auto w-full max-w-350 px-0 sm:px-8 lg:px-12">
            <Hero />
          </div>
        </section>
      </div>
    </main>
  );
}