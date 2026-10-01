import Image from "next/image";
import Link from "next/link";

export default function AuthNavbar() {
    return (
        <header className="w-full">
            <div className="mx-auto flex w-full items-center px-5 py-7 sm:px-8 sm:py-8 lg:px-28 lg:py-9">
                <Link
                    href="/"
                    aria-label="ByteSpace home"
                    className="inline-flex items-center"
                >
                    <Image
                        src="/images/vector.svg"
                        alt="ByteSpace"
                        width={31}
                        height={31}
                        className="size-7.75 object-contain"
                    />
                </Link>
            </div>
        </header>
    );
}