import AuthNavbar from "@/components/auth/AuthNavbar";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen">
            <AuthNavbar />

            <main>{children}</main>
        </div>
    );
}