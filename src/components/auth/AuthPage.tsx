import Image from "next/image";
import AuthForm, { AuthMode } from "@/components/auth/AuthForm";

interface AuthPageProps {
    mode: AuthMode;
}

export default function AuthPage({ mode }: AuthPageProps) {
    return (
        <section className="min-h-screen px-4 md:px-8 lg:px-16 pb-5 md:pb-10 lg:pb-16">
            <div className="w-full flex flex-col lg:flex-row gap-5 md:gap-16 lg:gap-28 lg:px-12">
                {/* Left visual area */}
                <div className="w-1/2">
                    <div className="text-white">
                        <p className="text-[18px] font-semibold">Sign in with ease</p>
                        <p className="text-sm leading-6 text-gray-200 mt-4">Experience a seamless and efficient sign-in process that <br /> grants you instant access to a world of knowledge.</p>
                    </div>
                    <div className="relative h-145 w-full overflow-hidden mt-20">
                        <Image
                            src="/images/auth/auth-course-2.svg"
                            alt="auth-course-2"
                            height={384}
                            width={373}
                            className="z-0 absolute top-[13%] left-0"
                        />
                        <Image
                            src="/images/auth/auth-course-1.svg"
                            alt="auth-course-1"
                            height={384}
                            width={373}
                            className="z-10 absolute top-0 right-0"
                        />
                        <Image
                            src="/images/auth/auth-ellipse.svg"
                            alt="auth-ellipse"
                            height={146}
                            width={146}
                            className="z-10 absolute top-2 left-9"
                        />
                        <Image
                            src="/images/auth/auth-cone.svg"
                            alt="auth-cone"
                            height={188}
                            width={188}
                            className="z-10 absolute bottom-0 -left-6"
                        />
                        <Image
                            src="/images/auth/auth-students.svg"
                            alt="auth-students"
                            height={123}
                            width={258}
                            className="z-10 absolute bottom-8 right-0"
                        />
                        <Image
                            src="/images/auth/auth-twist.svg"
                            alt="auth-twist"
                            height={175}
                            width={175}
                            className="z-20 absolute bottom-24 -right-7"
                        />
                    </div>
                </div>

                {/* Right form area */}
                <div className="flex w-1/2 justify-center h-fit">
                    <AuthForm mode={mode} />
                </div>
            </div>
        </section>
    );
}