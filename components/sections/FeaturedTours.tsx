"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Tour {
    id: string;
    title: string;
    image: string;
    duration: string;
    type: string;
}

const tours: Tour[] = [
    {
        id: "classic-island-loop",
        title: "Classic Island Loop",
        image: "/tours/tour-kandy-lake.jpg",
        duration: "6 Days",
        type: "Heritage"
    },
    {
        id: "wild-sri-lanka-safari",
        title: "Wild Sri Lanka Safari",
        image: "/tours/tour-card-wildlife.jpg",
        duration: "7 Days",
        type: "Wildlife"
    },
    {
        id: "heritage-nature-hills",
        title: "Heritage, Nature & Hills",
        image: "/tours/tour-sigiriya-rock.jpg",
        duration: "6 Days",
        type: "Heritage"
    },
    {
        id: "southern-explorer",
        title: "Southern Explorer",
        image: "/tours/tour-galle-lighthouse.jpg",
        duration: "6 Days",
        type: "Beach"
    },
];

export function FeaturedTours() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const displayTours = tours;

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden perspective-1000">
                {/* Background Title */}
                <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none mix-blend-difference">
                    <h2 className="text-8xl md:text-[12vw] font-serif font-black leading-none text-white/10 select-none">
                        SIGNATURE
                    </h2>
                </div>

                <div className="relative w-[300px] md:w-[500px] h-[400px] md:h-[600px] perspective-1000">
                    {displayTours.map((tour, index) => {
                        return <Card key={index} tour={tour} index={index} progress={scrollYProgress} total={displayTours.length} />;
                    })}
                </div>

                <div className="absolute bottom-10 left-0 w-full text-center z-10">
                    <Link href="/contact">
                        <button className="bg-secondary text-black px-12 py-4 font-black uppercase tracking-widest hover:bg-white transition-colors text-lg">
                            Create Your Journey
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function Card({ tour, index, progress, total }: { tour: Tour, index: number, progress: any, total: number }) {
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
            className="absolute inset-0 bg-white shadow-2xl overflow-hidden group border-4 border-white transform-gpu origin-bottom cursor-pointer"
        >
            <Link href={`/tours/${tour.id}`} className="block w-full h-full relative">
                <Image
                    src={tour.image || "/images/placeholder.jpg"} // Fallback image
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <p className="text-secondary font-bold uppercase tracking-widest mb-2">{tour.type}</p>
                    <h3 className="text-4xl md:text-5xl font-black font-serif text-white leading-none mb-4">{tour.title}</h3>
                    <div className="flex justify-between items-end border-t border-white/20 pt-4">
                        <span className="text-white font-medium">{tour.duration}</span>
                        <ArrowRight className="text-secondary group-hover:translate-x-2 transition-transform" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
