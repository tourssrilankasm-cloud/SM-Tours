"use client";

import { useState } from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { TourCard } from "@/components/ui/TourCard";
import { cn } from "@/lib/utils";
import { toursData } from "@/lib/tours-data";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Heritage", "Wildlife", "Beach", "Nature", "Adventure", "Family"];

export default function ToursPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTours = activeCategory === "All"
        ? toursData
        : toursData.filter(tour => tour.category === activeCategory);

    return (
        <>
            <PageHeader
                title="Our Exclusive Journeys"
                subtitle="Curated itineraries designed to showcase the very best of Sri Lanka."
                image="/gallery/train-journey.jpg"
            />

            <section className="py-20 container-custom min-h-[800px]">
                {/* Filters */}
                <div className="flex flex-wrap gap-3 justify-center mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2",
                                activeCategory === category
                                    ? "bg-black text-white border-black shadow-lg scale-105"
                                    : "bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredTours.map((tour) => (
                            <TourCard
                                key={tour.id}
                                title={tour.title}
                                image={tour.image}
                                duration={tour.duration}
                                location={tour.category} // Using category as location-type indicator
                                description={tour.description}
                                category={tour.category}
                                id={tour.id} // Passing ID for linking
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredTours.length === 0 && (
                    <div className="col-span-full text-center py-20">
                        <p className="text-xl text-gray-400 font-light italic">No packages found for this category yet.</p>
                    </div>
                )}
            </section>
        </>
    );
}
