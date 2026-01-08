import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactClient } from "@/components/sections/ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Plan Your Trip",
    description: "Get in touch with SM Tours Sri Lanka. Contact us for custom tour packages, price quotes, or travel advice. We are available 24/7.",
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="bg-[#020202] min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
            <PageHero
                image="/gallery/galle-fort.jpg"
                title="CONTACT."
                subtitle="Get in Touch"
                description=""
            />
            <ContactClient />
        </div>
    );
}
