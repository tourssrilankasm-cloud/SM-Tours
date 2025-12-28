import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="bg-[#020202] min-h-screen text-white selection:bg-secondary selection:text-black">
            {/* Header */}
            <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-[#020202]" />

                <div className="relative z-10 text-center px-4">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4">Legal</p>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6">Privacy Policy</h1>
                    <p className="text-white/60 max-w-xl mx-auto font-light">
                        How we collect, use, and protect your data at SM Tours.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container-custom max-w-4xl pb-32">
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-secondary hover:prose-a:text-white transition-colors">

                    <p className="text-xl text-white/80 font-light leading-relaxed mb-12 border-l-2 border-secondary pl-6">
                        At SM Tours, we value your privacy and are committed to protecting your personal data. This policy outlines our practices regarding data collection and usage.
                    </p>

                    <h2 className="flex items-center gap-3 text-2xl mb-6 mt-12">
                        <Eye className="w-6 h-6 text-white/40" />
                        1. Information We Collect
                    </h2>
                    <p>
                        We collect information that you strictly provide to us directly when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
                        <li>Fill out a contact form (Name, Email, Phone Number).</li>
                        <li>Book a tour or service.</li>
                        <li>Subscribe to our newsletter.</li>
                    </ul>

                    <h2 className="flex items-center gap-3 text-2xl mb-6 mt-12">
                        <CheckCircle2 className="w-6 h-6 text-white/40" />
                        2. How We Use Your Information
                    </h2>
                    <p>
                        Your data is used solely for the purpose of organizing your travel experience. We do not sell your data to third parties. We use your information to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
                        <li>Process bookings and payments.</li>
                        <li>Communicate with you regarding your itinerary.</li>
                        <li>Send optional promotional updates (only if you opted in).</li>
                    </ul>

                    <h2 className="flex items-center gap-3 text-2xl mb-6 mt-12">
                        <Lock className="w-6 h-6 text-white/40" />
                        3. Data Security
                    </h2>
                    <p>
                        We implement industry-standard security measures to protect your personal information. All transactions are securely processed, and our website uses SSL encryption to ensure your data is safe during transmission.
                    </p>

                    <h2 className="flex items-center gap-3 text-2xl mb-6 mt-12">
                        <Shield className="w-6 h-6 text-white/40" />
                        4. Cookies
                    </h2>
                    <p>
                        Our website uses essential cookies to improve your browsing experience. These cookies help us understand how you interact with our site so we can make improvements. You can choose to disable cookies through your browser settings, though this may affect your experience.
                    </p>

                    <div className="mt-16 p-8 border border-white/10 bg-white/5 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
                        <p className="text-base text-white/60 mb-0">
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@smtourssrilanka.com">info@smtourssrilanka.com</a>.
                        </p>
                    </div>

                    <p className="text-sm text-white/20 mt-12">
                        Last Updated: December 28, 2025
                    </p>
                </div>
            </div>
        </div>
    );
}
