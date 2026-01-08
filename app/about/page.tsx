import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AboutClient } from "@/components/sections/AboutClient";

export const metadata: Metadata = {
    title: "About Us | Our Story & Vision",
    description: "Learn about SM Tours Sri Lanka, a trusted local tour operator dedicated to sustainable tourism, authentic experiences, and showcasing the true spirit of Ceylon.",
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                image="/about/about-hero-new.jpg"
                title={<span>Our <span className="italic text-secondary">Legacy</span></span>}
                subtitle="Since 2019"
                description="Curating extraordinary journeys through the heart of Sri Lanka."
            />
            <AboutClient />
        </>
    );
}
