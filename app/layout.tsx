import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smtourssrilanka.com'),
  title: {
    default: "SM Tours Sri Lanka | Premium Travel & Tourism Agency",
    template: "%s | SM Tours Sri Lanka"
  },
  description: "Discover the wonder of Sri Lanka with SM Tours. We specialize in tailor-made wildlife safaris, heritage tours, luxury beach holidays, and cultural experiences. Book your dream vacation with expert local guides today.",
  keywords: ["Sri Lanka Tourism", "Best Travel Agency Sri Lanka", "Sri Lanka Tour Packages", "Yala Safari", "Sigiriya Rock Fortress", "Ella Train Ride", "Whale Watching Mirissa", "Luxury Travel Sri Lanka", "SM Tours", "Private Driver Sri Lanka"],
  authors: [{ name: "SM Tours Sri Lanka" }],
  creator: "SM Tours Sri Lanka",
  publisher: "SM Tours Sri Lanka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SM Tours Sri Lanka | Explore the Pearl of the Indian Ocean",
    description: "Experience the ultimate Sri Lankan adventure. From the misty heights of Ella to the golden coasts of Mirissa and the wilds of Yala.",
    url: 'https://www.smtourssrilanka.com',
    siteName: 'SM Tours Sri Lanka',
    images: [
      {
        url: '/tours/tours-hero-new.jpg', // Using a high-quality existing image
        width: 1200,
        height: 630,
        alt: 'SM Tours Sri Lanka - Premium Travel Experiences',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SM Tours Sri Lanka | Premium Travel Agency",
    description: "Your gateway to Sri Lanka. Wildlife, Culture, and Beach tours tailored just for you.",
    images: ['/tours/tours-hero-new.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable)}>
      <body className="antialiased bg-background text-foreground font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "SM Tours Sri Lanka",
              "url": "https://www.smtourssrilanka.com",
              "logo": "https://www.smtourssrilanka.com/icon.png",
              "description": "Premier travel agency in Sri Lanka specializing in wildlife safaris, heritage tours, and beach holidays.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 105, Kahanthota Road",
                "addressLocality": "Malabe",
                "addressCountry": "LK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+94 77 640 4091",
                "contactType": "customer service",
                "email": "info@smtourssrilanka.com"
              },
              "priceRange": "$$"
            }),
          }}
        />
      </body>
    </html>
  );
}
