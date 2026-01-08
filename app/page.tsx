import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { DestinationsPreview } from "@/components/sections/DestinationsPreview";
import { Stats } from "@/components/sections/Stats";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ParallaxGallery } from "@/components/sections/ParallaxGallery";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SM Tours Sri Lanka | #1 Travel Agency for Safaris & Heritage Tours",
  description: "Plan your perfect Sri Lanka holiday with SM Tours. Rated top travel agency for Yala safaris, cultural triangles, and luxury beach getaways. 24/7 Support.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <ParallaxGallery />
      <FeaturedTours />
      <VideoShowcase />
      <DestinationsPreview />
      <Testimonials />
      <FAQ />
    </>
  );
}
