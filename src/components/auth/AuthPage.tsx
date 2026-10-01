import Image from "next/image";
import AuthForm, { AuthMode } from "@/components/auth/AuthForm";

interface AuthPageProps {
    mode: AuthMode;
}

export default function AuthPage({ mode }: AuthPageProps) {
    return (
        <section className="min-h-screen px-4 md:px-8 lg:px-16 pb-5 md:pb-10 lg:pb-16">
            <div className="w-full flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-14 lg:px-12">
                {/* Left visual area */}
                <div className="w-full lg:w-1/2 overflow-hidden">
                    <div className="text-white">
                        <p className="text-[18px] font-semibold">{mode === "login" ? "Sign in with ease" : "Sign up and come in"}</p>

                        <p className="mt-4 max-w-120 text-sm leading-6 text-gray-200 sm:text-[15px] font-thin">
                            {mode === "login" ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge." : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."}
                        </p>
                    </div>

                    <Image src="/images/auth/auth-whole-image.svg" alt="auth-visual" width={1000} height={1000} className="lg:-ml-6 mt-8 md:mt-12 lg:mt-18" />
                </div>

                {/* Right form area */}
                <div className="flex w-full lg:w-1/2 md:justify-stretch lg:justify-center h-fit mt-5 lg:mt-0">
                    <AuthForm mode={mode} />
                </div>
            </div>
        </section>
    );
}