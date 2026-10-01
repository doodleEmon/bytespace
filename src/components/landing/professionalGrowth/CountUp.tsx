"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    /** decimal places to show */
    decimals?: number;
    className?: string;
}

export default function CountUp({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
    decimals = 0,
    className,
}: CountUpProps) {
    const [count, setCount] = useState<number>(0);
    const ref = useRef<HTMLSpanElement | null>(null);
    const hasAnimated = useRef<boolean>(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    observer.disconnect();

                    const start = performance.now();

                    const tick = (now: number): void => {
                        const progress = Math.min((now - start) / duration, 1);
                        // easeOutQuad
                        const eased = 1 - (1 - progress) * (1 - progress);
                        const value = eased * end;

                        setCount(decimals > 0 ? Number(value.toFixed(decimals)) : Math.floor(value));

                        if (progress < 1) {
                            requestAnimationFrame(tick);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [end, duration, decimals]);

    const formatted =
        decimals > 0
            ? count.toFixed(decimals)
            : count.toLocaleString();

    return (
        <span ref={ref} className={className}>
            {prefix}
            {formatted}
            {suffix}
        </span>
    );
}