import { toursData } from "@/lib/tours-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TourDetailsClient } from "@/components/sections/TourDetailsClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const tour = toursData.find((t) => t.id === id);

    if (!tour) {
        return {
            title: "Tour Not Found",
        };
    }

    return {
        title: tour.title,
        description: tour.description,
        openGraph: {
            title: tour.title + " | SM Tours Sri Lanka",
            description: tour.description,
            images: [
                {
                    url: tour.image,
                    width: 1200,
                    height: 630,
                    alt: tour.title,
                },
            ],
        },
        alternates: {
            canonical: `/tours/${id}`,
        },
    };
}

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const tour = toursData.find((t) => t.id === id);

    if (!tour) {
        return notFound();
    }

    return (
        <>
            <TourDetailsClient tour={tour} />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TouristTrip",
                        "name": tour.title,
                        "description": tour.description,
                        "image": `https://www.smtourssrilanka.com${tour.image}`,
                        "touristType": tour.category,
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "url": `https://www.smtourssrilanka.com/tours/${tour.id}`,
                            "priceCurrency": "USD"
                        },
                        "itinerary": tour.itinerary.map((day) => ({
                            "@type": "CreativeWork",
                            "name": day.title,
                            "description": day.desc
                        }))
                    })
                }}
            />
        </>
    );
}
