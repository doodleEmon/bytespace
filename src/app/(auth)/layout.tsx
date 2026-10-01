import AuthNavbar from "@/components/auth/AuthNavbar";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="
        min-h-screen
        bg-persian-blue-800 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_2px,transparent_2px)] 
        bg-size-[110px_105px]
        ">
            <AuthNavbar />

            <main>{children}</main>
        </div>
    );
}