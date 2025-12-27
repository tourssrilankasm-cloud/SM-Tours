"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 tracking-tight">Unlock Exclusive <span className="text-secondary italic">Journeys</span></h2>
                <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Join our elite community of travelers. Get insider tips, hidden gem reveals, and early access to our seasonal curated tours.
                </p>

                <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border-b border-white/30 focus-within:border-secondary transition-colors duration-500 pb-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                        placeholder="Enter your email address"
                        className="bg-transparent border-none h-14 text-white placeholder:text-white/30 text-xl flex-1 outline-none px-4"
                    />
                    <button className="h-14 px-8 text-white font-bold uppercase tracking-widest hover:text-secondary transition-colors flex items-center gap-2">
                        Subscribe <ArrowRight className="h-5 w-5" />
                    </button>
                </form>

                <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.3em]">
                    No Spam. Unsubscribe Anytime.
                </p>
            </div>
        </section>
    );
}
