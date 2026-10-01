"use client";

import Image from "next/image";
import Link from "next/link";
import { SubmitEvent, useState } from "react";

export type AuthMode = "login" | "register";

interface AuthFormProps {
    mode: AuthMode;
}

export default function AuthForm({ mode }: AuthFormProps) {
    const isRegister = mode === "register";

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            ...(isRegister ? { fullName } : {}),
            email,
            password,
        };

        console.log(isRegister ? "Register:" : "Login:", data);

        // We'll connect your actual API here.
    };

    return (
        <div className="w-full max-w-130 rounded-3xl bg-white px-7 py-10 shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Heading */}
            <div>
                <p className="text-sm font-normal text-persian-blue-800 sm:text-base">
                    {isRegister ? "Create an Account" : "Sign In"}
                </p>

                <h1 className="mt-2 text-[36px] font-semibold leading-[120%] tracking-[-1px] text-[#202124] sm:text-[40px] lg:text-[42px]">
                    {isRegister ? (
                        <>
                            Welcome to
                            <br />
                            ByteSpace
                        </>
                    ) : (
                        "Welcome Back"
                    )}
                </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-9">
                {/* Full Name - Register only */}
                {isRegister && (
                    <div>
                        <label
                            htmlFor="fullName"
                            className="text-sm font-medium text-[#202124]"
                        >
                            Full Name
                        </label>

                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            placeholder="Jamie Davis"
                            autoComplete="name"
                            required
                            className="mt-2 h-[47px] w-full rounded-[10px] border border-[#E1E2E5] bg-white px-5 text-sm text-[#202124] outline-none transition-colors placeholder:text-[#9699A1] focus:border-[#003BE2]"
                        />
                    </div>
                )}

                {/* Email */}
                <div className={isRegister ? "mt-5" : ""}>
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#202124]"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="designer@example.com"
                        autoComplete="email"
                        required
                        className="mt-2 h-[47px] w-full rounded-[10px] border border-[#E1E2E5] bg-white px-5 text-sm text-[#202124] outline-none transition-colors placeholder:text-[#9699A1] focus:border-[#D4FB20]"
                    />
                </div>

                {/* Password */}
                <div className="mt-5">
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-[#202124]"
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="*********"
                        autoComplete={isRegister ? "new-password" : "current-password"}
                        required
                        className="mt-2 h-[47px] w-full rounded-[10px] border border-[#E1E2E5] bg-white px-5 text-sm text-[#202124] outline-none transition-colors placeholder:text-[#9699A1] focus:border-[#D4FB20]"
                    />
                </div>

                {/* Submit */}
                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        className="rounded-full bg-[#D4FB20] px-5 py-3 text-sm font-medium text-[#202124] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer hover:shadow-lg"
                    >
                        {isRegister ? "Continue" : "Sign In"}
                    </button>
                </div>

                {/* Social Login - Login only */}
                {!isRegister && (
                    <>
                        <div className="mb-10 mt-16 flex items-center gap-3">
                            <div className="h-px flex-1 bg-[#D9DADD]" />

                            <span className="text-sm text-[#9699A1]">or</span>

                            <div className="h-px flex-1 bg-[#D9DADD]" />
                        </div>

                        <div className="flex justify-center gap-4">
                            <button
                                type="button"
                                aria-label="Continue with Facebook"
                                className="flex size-16.5 items-center justify-center rounded-[20px] border border-[#D9DADD] text-2xl font-bold text-[#111] cursor-pointer hover:border-[#D4FB20] transition-colors"
                            >
                                <Image src="/images/auth/auth-facebook.svg" alt="Facebook" width={40} height={40} />
                            </button>

                            <button
                                type="button"
                                aria-label="Continue with Google"
                                className="flex size-16.5 items-center justify-center rounded-[20px] border border-[#D9DADD] text-2xl font-bold text-[#111] cursor-pointer hover:border-[#D4FB20] transition-colors"
                            >
                                <Image src="/images/auth/auth-google.svg" alt="Google" width={40} height={40} />
                            </button>
                        </div>
                    </>
                )}
            </form>

            {/* Bottom link */}
            <div className="mt-16 text-center text-sm text-[#8A8C92]">
                {isRegister ? (
                    <>
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-persian-blue-800 hover:underline"
                        >
                            Login
                        </Link>
                    </>
                ) : (
                    <>
                        New user?{" "}
                        <Link
                            href="/register"
                            className="text-persian-blue-800 hover:underline"
                        >
                            Create an account
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}