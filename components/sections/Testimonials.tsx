"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    { text: "Absolutely unforgettable. The attention to detail was unmatched.", author: "Sarah Jenkins, UK" },
    { text: "Sri Lanka is beautiful, but SM Tours made it magical.", author: "Mark & Lisa, Australia" },
    { text: "The best travel agency I've ever dealt with. Professional and personal.", author: "David Chen, Singapore" },
    { text: "Luxury redefined. Highly recommended for premium travelers.", author: "Elena Rossi, Italy" },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[128px]" />
            </div>

            <div className="container-custom mb-16 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6">Voices of <span className="text-secondary italic">Delight</span></h2>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-white/20" />
                    <p className="text-white/60 uppercase tracking-[0.25em] text-xs font-bold">Don't just take our word for it</p>
                    <div className="h-[1px] w-12 bg-white/20" />
                </div>
            </div>

            <div className="flex w-full overflow-hidden relative z-10">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />

                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                        <div key={index} className="w-[85vw] md:w-[450px] h-[300px] bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-none border border-white/10 flex flex-col justify-between shrink-0 hover:border-secondary/50 transition-colors duration-500 group">
                            <Quote className="h-12 w-12 text-secondary/50 group-hover:text-secondary transition-colors" />
                            <p className="text-2xl font-serif text-white/90 whitespace-normal leading-relaxed italic">"{item.text}"</p>
                            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                <div className="h-[1px] w-8 bg-secondary" />
                                <p className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{item.author}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
