import Image from "next/image";
import AuthForm, { AuthMode } from "./AuthForm";

interface AuthPageProps {
    mode: AuthMode;
}

export default function AuthPage({ mode }: AuthPageProps) {
    return (
        <section className="
        min-h-screen 
        bg-persian-blue-800 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_2px,transparent_2px)] 
        bg-size-[110px_105px]
        lg:px-16
        ">
            <div className="mx-auto min-h-screen w-full flex flex-col lg:flex-row items-center lg:gap-14 lg:px-12">
                {/* Left visual area */}
                <div className="w-1/2 mb-8.5">
                    <div className="text-white">
                        <p className="text-[18px] font-semibold">Sign in with ease</p>
                        <p className="text-sm leading-6 text-gray-200 mt-4">Experience a seamless and efficient sign-in process that <br /> grants you instant access to a world of knowledge.</p>
                    </div>
                    <Image
                        src="/images/auth/register-login-page-image.svg" alt="register-login-page-image"
                        width={500}
                        height={585}
                        className="mt-16 -ml-6"
                    />
                </div>

                {/* Right form area */}
                <div className="flex w-1/2 min-h-screen items-center justify-center px-5 py-24 sm:px-8 lg:px-0 lg:py-28">
                    <AuthForm mode={mode} />
                </div>
            </div>
        </section>
    );
}