"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text = "We don't just show you Sri Lanka. We invite you to live it. From the misty heights of Ella to the golden shores of Mirissa, every journey is a masterfully curated narrative of luxury, culture, and untold adventure.";

export function Intro() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = text.split(" ");

    return (
        <section ref={containerRef} className="py-32 bg-black text-white min-h-[50vh] flex items-center justify-center relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[128px]" />
            </div>

            <div className="container-custom max-w-5xl px-6 relative z-10">
                <p className="text-3xl md:text-5xl lg:text-7xl font-serif font-medium leading-[1.1] flex flex-wrap gap-x-4 gap-y-2">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
                    })}
                </p>

                <div className="mt-16 flex items-center gap-6">
                    <div className="h-[1px] w-24 bg-gradient-to-r from-secondary to-transparent" />
                    <span className="text-secondary uppercase tracking-[0.3em] font-bold text-xs md:text-sm">Our Philosophy</span>
                </div>
            </div>
        </section>
    );
}

const Word = ({ word, progress, range }: { word: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <motion.span style={{ opacity }} className="relative transition-colors">
            {word}
        </motion.span>
    );
}
