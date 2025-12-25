"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Car, Map, UserCheck, Hotel, Plane, Camera, Calendar, Users, Heart, Shield, Coffee, Globe } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <LuxuryFleet />
            <PersonalizedPlanning />
            <AdditionalServices />
            <CTASection />
        </>
    );
}

function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[80vh] overflow-hidden bg-black">
            <motion.div style={{ y }} className="absolute inset-0">
                <Image
                    src="/services/safari-jeep.jpg"
                    alt="Our Services"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative h-full flex flex-col items-center justify-center text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-9xl font-serif text-white mb-6 tracking-tight">
                        Premium <span className="italic text-secondary">Services</span>
                    </h1>
                    <div className="h-[2px] w-32 bg-secondary mx-auto mb-8" />
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light leading-relaxed">
                        Elevating your Sri Lankan journey with world-class hospitality and seamless logistics
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}

function ServicesGrid() {
    const services = [
        {
            icon: Map,
            title: "Custom Tour Planning",
            desc: "Bespoke itineraries crafted around your specific interests, pace, and travel style.",
            image: "/services/tour-guide.jpg"
        },
        {
            icon: Hotel,
            title: "Luxury Accommodation",
            desc: "Exclusive booking access to the island's finest boutique villas, resorts, and eco-lodges.",
            image: "/services/villa.jpg"
        },
        {
            icon: Car,
            title: "Premium Transport",
            desc: "Travel in style with our fleet of modern luxury sedans, VIP vans, and 4x4 safari jeeps.",
            image: "/services/luxury-car.jpg"
        },
        {
            icon: Globe,
            title: "Visa & Logistics",
            desc: "Seamless handling of ETA visas, airport fast-track services, and local documentation.",
            image: "/services/airport.jpg"
        },
        {
            icon: Heart,
            title: "Wellness Residencies",
            desc: "Curated Ayurveda and yoga retreats at premier wellness sanctuaries.",
            image: "/services/ayurveda.jpg"
        },
        {
            icon: Calendar,
            title: "Event Management",
            desc: "Destination weddings, MICE events, and special celebrations details managed to perfection.",
            image: "/services/wedding.jpg"
        }
    ];

    return (
        <section className="py-32 bg-black text-white">
            <div className="container-custom">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-6xl font-serif mb-6">
                        Curated <span className="italic text-secondary">Experiences</span>
                    </h2>
                    <p className="text-white/60">Comprehensive support for every aspect of your journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] overflow-hidden rounded-sm border border-white/10"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="w-14 h-14 bg-secondary/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-500">
                                    <service.icon className="h-7 w-7 text-secondary group-hover:text-black transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                                <p className="text-white/80 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function LuxuryFleet() {
    return (
        <section className="py-32 bg-white text-black">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-serif mb-8">
                            Travel in <span className="italic text-secondary">Comfort</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Our fleet represents the highest standard of safety and luxury. Whether you choose a private sedan for two or a luxury coach for a group, expect pristine condition and modern amenities.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Luxury Sedans", desc: "BMW 5 Series, Mercedes E-Class" },
                                { title: "Premium Vans", desc: "Toyota KDH High-Roof (6-8 Seater)" },
                                { title: "Safari Jeeps", desc: "Modified Toyota Hilux 4x4" },
                                { title: "Executive Coaches", desc: "Luxury 20-30 Seater Buses" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                    <div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[600px]"
                    >
                        <Image
                            src="/services/luxury-car.jpg"
                            alt="Luxury Fleet"
                            fill
                            className="object-cover rounded-sm shadow-2xl"
                        />
                        <div className="absolute -bottom-10 -left-10 bg-black text-white p-10 shadow-2xl hidden md:block">
                            <p className="text-5xl font-bold text-secondary mb-2">100%</p>
                            <p className="tracking-widest uppercase text-sm">Insured & Safety Rated</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function PersonalizedPlanning() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container-custom text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <UserCheck className="h-16 w-16 text-secondary mx-auto mb-8" />
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">
                        Expert <span className="italic text-secondary">Chauffeur Guides</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                        More than just drivers, our specialized chauffeur guides are government-licensed storytellers. Fluent in English, German, French, and Mandarin, they transform your journey with deep local insights and warm hospitality.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["History Experts", "Wildlife Trackers", "Culinary Guides", "Adventure Pros"].map((skill, i) => (
                            <div key={i} className="bg-white p-6 shadow-sm border border-gray-100">
                                <Shield className="h-8 w-8 text-black mx-auto mb-3" />
                                <p className="font-bold text-sm uppercase tracking-wider">{skill}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function AdditionalServices() {
    const extras = [
        { icon: Coffee, title: "SIM Cards & Data", desc: "Pre-arranged 4G/5G connectivity upon arrival" },
        { icon: Camera, title: "Photography", desc: "Professional drone & photography packages" },
        { icon: Shield, title: "Travel Insurance", desc: "Comprehensive coverage options for peace of mind" },
        { icon: Globe, title: "Currency Exchange", desc: "Best rates and secure handling assistance" }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {extras.map((extra, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-8 border border-gray-100 hover:border-secondary transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <extra.icon className="h-6 w-6 text-black" />
                            </div>
                            <h3 className="text-lg font-bold mb-3">{extra.title}</h3>
                            <p className="text-sm text-gray-500">{extra.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-32 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="container-custom text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-8xl font-serif text-black mb-8">
                        Ready to <span className="text-white">Experience?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto mb-12">
                        Let us handle the details while you create the memories.
                    </p>
                    <Link href="/contact">
                        <button className="bg-black text-white px-12 py-5 text-lg font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl hover:shadow-xl">
                            Book Your Services
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
