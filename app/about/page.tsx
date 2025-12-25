"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Globe, Users, ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";

export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <StorySection />
            <ValuesSection />
            <TimelineSection />
            <VisionSection />
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
        <section ref={containerRef} className="relative h-screen overflow-hidden bg-black">
            <motion.div style={{ y }} className="absolute inset-0">
                <Image
                    src="/gallery/temple.jpg"
                    alt="About SM Tours"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative h-full flex flex-col items-center justify-center text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">
                        Our <span className="italic text-secondary">Story</span>
                    </h1>
                    <div className="h-[2px] w-24 bg-secondary mx-auto mb-8" />
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light leading-relaxed">
                        Crafting unforgettable journeys across the Pearl of the Indian Ocean
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 text-secondary animate-bounce"
                >
                    <div className="w-[2px] h-12 bg-secondary mx-auto" />
                </motion.div>
            </motion.div>
        </section>
    );
}

function StorySection() {
    return (
        <section className="py-32 bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-serif text-black mb-6">
                            Born from <span className="italic text-secondary">Passion</span>
                        </h2>
                        <div className="h-[3px] w-16 bg-secondary mb-8" />
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Founded by a team of local travel enthusiasts, SM Tours emerged from a simple yet profound vision: to move beyond the standard tourist trail and offer genuine, immersive experiences of Sri Lanka.
                            </p>
                            <p>
                                We believe travel transcends mere sightseeing—it's about feeling the soul of a place. Each journey we craft is a carefully curated narrative, weaving together hidden gems, authentic cultural encounters, and breathtaking natural wonders.
                            </p>
                            <p>
                                Our guides aren't just drivers; they're storytellers, historians, and local friends who open doors to unique moments you won't find in guidebooks. They share insider knowledge passed down through generations, transforming your trip into a deeply personal adventure.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[600px] rounded-sm overflow-hidden group">
                            <Image
                                src="/gallery/tea-fields.jpg"
                                alt="Sri Lanka Experience"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-secondary text-black p-8 max-w-xs">
                            <p className="text-6xl font-bold mb-2">15+</p>
                            <p className="text-sm font-bold uppercase tracking-wider">Years of Excellence</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ValuesSection() {
    const values = [
        {
            icon: Heart,
            title: "Authentic Experiences",
            description: "Every journey celebrates genuine Sri Lankan culture, connecting you with local communities and traditions."
        },
        {
            icon: Award,
            title: "Excellence in Service",
            description: "Meticulous attention to detail ensures seamless experiences from arrival to departure."
        },
        {
            icon: Globe,
            title: "Sustainable Tourism",
            description: "We're committed to preserving Sri Lanka'snatural beauty and supporting local economies."
        },
        {
            icon: Users,
            title: "Personalized Journeys",
            description: "No two trips are alike. We craft each itinerary to match your unique interests and pace."
        }
    ];

    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[140px]" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-serif mb-6">
                        Our <span className="italic text-secondary">Values</span>
                    </h2>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        The principles that guide every journey we create
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-500"
                        >
                            <value.icon className="h-12 w-12 text-secondary mb-6 transition-transform group-hover:scale-110 duration-500" />
                            <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                            <p className="text-white/70 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineSection() {
    const milestones = [
        { year: "2010", event: "Founded", desc: "Started with a vision to showcase authentic Sri Lanka" },
        { year: "2015", event: "Expansion", desc: "Grew to 50+ expert local guides across the island" },
        { year: "2020", event: "Recognition", desc: "Awarded Best Tour Operator by Sri Lanka Tourism" },
        { year: "2025", event: "Innovation", desc: "Launching sustainable luxury eco-tours" }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-serif mb-6">
                        Our <span className="italic text-secondary">Journey</span>
                    </h2>
                    <div className="h-[2px] w-16 bg-secondary mx-auto" />
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block" />

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                <div className="bg-black text-white p-8 group hover:bg-secondary hover:text-black transition-colors duration-500">
                                    <p className="text-5xl font-bold font-serif mb-2">{milestone.year}</p>
                                    <h3 className="text-2xl font-bold mb-2">{milestone.event}</h3>
                                    <p className="opacity-80">{milestone.desc}</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function VisionSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/gallery/sunset-palm.jpg"
                    alt="Vision"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center text-white"
                >
                    <MapPin className="h-16 w-16 text-secondary mx-auto mb-8" />
                    <h2 className="text-5xl md:text-7xl font-serif mb-8">
                        Our <span className="italic text-secondary">Vision</span>
                    </h2>
                    <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12">
                        To be the bridge between curious travelers and the authentic heart of Sri Lanka, creating transformative journeys that inspire, educate, and leave a positive impact on both visitors and local communities.
                    </p>
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div>
                            <p className="text-5xl font-bold text-secondary mb-2">5000+</p>
                            <p className="text-sm uppercase tracking-wider">Happy Travelers</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-secondary mb-2">50+</p>
                            <p className="text-sm uppercase tracking-wider">Expert Guides</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-secondary mb-2">100%</p>
                            <p className="text-sm uppercase tracking-wider">Satisfaction</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-32 bg-secondary text-black">
            <div className="container-custom text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif mb-8">
                        Start Your Journey
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
                        Let's craft an unforgettable Sri Lankan adventure tailored just for you
                    </p>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white px-12 py-5 text-lg font-bold uppercase tracking-wider inline-flex items-center gap-3 hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Plan Your Trip
                            <ArrowRight className="h-6 w-6" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
