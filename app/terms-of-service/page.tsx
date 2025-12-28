import { FileText, CreditCard, AlertTriangle, Scale } from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="bg-[#020202] min-h-screen text-white selection:bg-secondary selection:text-black">
            {/* Header */}
            <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-[#020202]" />

                <div className="relative z-10 text-center px-4">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4">Legal</p>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6">Terms of Service</h1>
                    <p className="text-white/60 max-w-xl mx-auto font-light">
                        Please read these terms carefully before booking your journey with SM Tours.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container-custom max-w-4xl pb-32">
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-secondary hover:prose-a:text-white transition-colors">

                    <p className="text-xl text-white/80 font-light leading-relaxed mb-12 border-l-2 border-secondary pl-6">
                        By accessing this website and booking our services, you agree to be bound by these Terms and Conditions.
                    </p>

                    <h2 className="flex items-center gap-3 text-2xl mb-6 mt-12">
                        <FileText className="w-6 h-6 text-white/40" />
                        1. Booking & Reservations
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
                        <li>All bookings are subject to availability.</li>
                        <li>A deposit of 50% is required to confirm your reservation.</li>
                        <li>The remaining balance must be paid 14 days prior to your arrival date.</li>
                        <li>Last-minute bookings (within 14 days) require full payment upfront.</li>
                    </ul>

                    <h2 className="flex items-center gap-3 text-2xl mb-6 mt-12">
                        <CreditCard className="w-6 h-6 text-white/40" />
                        2. Cancellation & Refunds
                    </h2>
                    <p>
                        We understand that plans can change. Our cancellation policy is as follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
                        <li><strong>30+ Days Prior:</strong> Full refund minus a small administrative fee.</li>
                        <li><strong>15-29 Days Prior:</strong> 50% refund of the total booking value.</li>
                        <li><strong>0-14 Days Prior:</strong> No refund.</li>
                    </ul>

                    <h2 className="flex items-center gap-3 text-2xl mb-6 mt-12">
                        <AlertTriangle className="w-6 h-6 text-white/40" />
                        3. Liability & Insurance
                    </h2>
                    <p>
                        SM Tours acts as an agent for transport companies, hotels, and other contractors. We are not liable for any injury, damage, loss, delay, or irregularity that may be caused by force majeure or the actions of third parties.
                    </p>
                    <p>
                        We strongly recommend that all travelers purchase comprehensive travel insurance to cover medical expenses, trip cancellations, and lost luggage.
                    </p>

                    <h2 className="flex items-center gap-3 text-2xl mb-6 mt-12">
                        <Scale className="w-6 h-6 text-white/40" />
                        4. Code of Conduct
                    </h2>
                    <p>
                        We respect the culture, nature, and people of Sri Lanka. We expect our guests to do the same. Any behavior that is disrespectful, illegal, or endangers others may result in the immediate termination of the tour without refund.
                    </p>

                    <div className="mt-16 p-8 border border-white/10 bg-white/5 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-2">Questions?</h3>
                        <p className="text-base text-white/60 mb-0">
                            For clarification on any of these terms, please contact our legal team at <a href="mailto:info@smtourssrilanka.com">info@smtourssrilanka.com</a>.
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
