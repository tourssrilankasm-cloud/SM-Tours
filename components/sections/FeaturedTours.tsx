"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const tours = [
    {
        title: "Signature Sri Lanka",
        image: "/tours/signature.jpg",
        days: "14 Days",
        type: "Luxury"
    },
    {
        title: "Wilderness Echoes",
        image: "/tours/wildlife.jpg",
        days: "7 Days",
        type: "Wildlife"
    },
    {
        title: "Cultural Odyssey",
        image: "/tours/cultural.jpg",
        days: "10 Days",
        type: "Heritage"
    },
    {
        title: "Coastal Bliss",
        image: "/tours/beach.jpg",
        days: "5 Days",
        type: "Beach"
    },
];

export function FeaturedTours() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden perspective-1000">
                {/* Background Title */}
                <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none mix-blend-difference">
                    <h2 className="text-[12vw] font-serif font-black leading-none text-white/10 select-none">
                        SIGNATURE
                    </h2>
                </div>

                <div className="relative w-[300px] md:w-[500px] h-[400px] md:h-[600px] perspective-1000">
                    {tours.map((tour, index) => {
                        return <Card key={index} tour={tour} index={index} progress={scrollYProgress} total={tours.length} />;
                    })}
                </div>

                <div className="absolute bottom-10 left-0 w-full text-center z-10">
                    <Link href="/contact">
                        <button className="bg-secondary text-black px-12 py-4 font-black uppercase tracking-widest hover:bg-white transition-colors text-lg">
                            Curate Your Journey
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function Card({ tour, index, progress, total }: { tour: any, index: number, progress: any, total: number }) {
    // Stack Logic: Cards flying in from bottom/z-space
    const step = 1 / total;
    const start = index * step;
    const end = start + step;

    // Adjust ranges for a smoother "deck deal" feel
    const scale = useTransform(progress, [start, end], [0.5, 1]);
    const y = useTransform(progress, [start, end], [800, 0]);
    const rotate = useTransform(progress, [start, end], [index % 2 === 0 ? 15 : -15, 0]);
    const opacity = useTransform(progress, [start, end], [0, 1]);

    return (
        <motion.div
            style={{
                scale,
                y,
                rotateZ: rotate,
                opacity,
                zIndex: index
            }}
            className="absolute inset-0 bg-white shadow-2xl overflow-hidden group border-4 border-white transform-gpu origin-bottom"
        >
            <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-secondary font-bold uppercase tracking-widest mb-2">{tour.type}</p>
                <h3 className="text-4xl md:text-5xl font-black font-serif text-white leading-none mb-4">{tour.title}</h3>
                <div className="flex justify-between items-end border-t border-white/20 pt-4">
                    <span className="text-white font-medium">{tour.days}</span>
                    <ArrowRight className="text-secondary group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
}
