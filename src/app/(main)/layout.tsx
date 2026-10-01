import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen flex-col bg-persian-blue-800
        bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_2px,transparent_2px)]
        bg-size-[110px_105px]">
            <header className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
                <Navbar />
            </header>

            <main className="flex-1">{children}</main>

            <Footer />
        </div>
    );
}