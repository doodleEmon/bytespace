// components/Logo.tsx
import Link from 'next/link';
import Image from 'next/image';
import { clashDisplay } from '@/app/fonts'; // Update path if needed

interface LogoProps {
    onClick?: () => void;
    className?: string;
    textClassName?: string;
}

export default function Logo({
    onClick,
    className = '',
    textClassName = 'text-white',
}: LogoProps) {
    return (
        <Link
            href="/"
            className={`flex items-end gap-1 ${className}`}
            onClick={onClick}
        >
            <Image
                src="/images/vector.svg"
                alt="ByteSpace logo"
                width={31}
                height={31}
                priority
                className="size-6 lg:size-7"
            />

            <span
                className={`h-7 text-base font-bold md:text-xl ${clashDisplay.className} -mb-2 md:-mb-1 ${textClassName}`}
            >
                ByteSpace
            </span>
        </Link>
    );
}