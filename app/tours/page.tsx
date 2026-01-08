import { Suspense } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { ToursGrid } from "@/components/sections/ToursGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tour Packages | Safari, Heritage & Beach Tours",
    description: "Browse our exclusive collection of Sri Lanka tour packages. From 1-day city tours to 7-day island-wide adventures. Best prices guaranteed.",
    alternates: {
        canonical: '/tours',
    },
};

export default function ToursPage() {
    return (
        <div className="bg-black min-h-screen">
            <PageHero
                image="/tours/tours-hero-new.jpg"
                title={<span>Exclusive <span className="italic text-secondary">Journeys</span></span>}
                subtitle="Curated Experiences"
                description="Designed for the discerning traveler. Explore the unexplore in the Pearl of the Indian Ocean."
            />
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
                <ToursGrid />
            </Suspense>
        </div>
    );
}
