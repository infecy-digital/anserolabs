import React from 'react';
import { CheckCircle2, ShieldCheck, Activity, Database, UserCheck } from 'lucide-react';
import Button from './ui/Button';

const Pricing: React.FC = () => {
    const handleCalendlyClick = () => {
        if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/sumit-anserolabs/strategy-call' });
        }
    };

    return (
        <section id="pricing" className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                        Simple Plans. <span className="text-primary">Real Revenue Impact.</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Built to convert missed calls into predictable monthly growth.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
                    {/* Card 1: Starter */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-slate-100 flex flex-col reveal transition-all duration-300 hover:shadow-xl">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">Starter Plan</h3>
                            <p className="text-slate-500 text-sm font-medium mb-4">Best for local service businesses capturing inbound calls.</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900">$297</span>
                                <span className="text-slate-500 font-medium">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "AI Receptionist (Inbound)",
                                "Up to 500 minutes included",
                                "Standard CRM Integration",
                                "Email support",
                                "Basic AI scripting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* ROI Framing Block */}
                        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100/50">
                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                If you close just 2 additional jobs per month at $300/job<br />
                                <span className="text-primary">→ That’s $600 recovered revenue.</span>
                            </p>
                            <p className="text-xs text-slate-400 mt-2 italic">Starter Plan pays for itself.</p>
                        </div>

                        <div className="mt-auto">
                            <Button
                                variant="primary"
                                fullWidth
                                onClick={handleCalendlyClick}
                                className="mb-4"
                            >
                                Start Revenue Demo
                            </Button>
                            <p className="text-center text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                                No long-term contracts. Cancel anytime.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Growth */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-slate-100 flex flex-col reveal delay-100 transition-all duration-300 hover:shadow-xl">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">Growth Plan</h3>
                            <p className="text-slate-500 text-sm font-medium mb-4">For businesses scaling inbound and outbound revenue.</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900">$497</span>
                                <span className="text-slate-500 font-medium">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "AI Receptionist + Outbound",
                                "Up to 1,500 minutes included",
                                "Advanced CRM Integration",
                                "Priority Support",
                                "Custom AI Script Tuning",
                                "Performance Analytics"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* ROI Framing Block */}
                        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100/50">
                            <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                If you recover 5 additional jobs at $400/job<br />
                                <span className="text-primary">→ That’s $2,000 in additional monthly revenue.</span>
                            </p>
                            <p className="text-xs text-slate-400 mt-2 italic">Growth Plan is built for scale.</p>
                        </div>

                        <div className="mt-auto">
                            <Button
                                variant="secondary"
                                fullWidth
                                onClick={handleCalendlyClick}
                                className="mb-4"
                            >
                                Book Strategy Call
                            </Button>
                            <p className="text-center text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                                Includes onboarding & optimization support.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-col items-center mb-24 reveal delay-200">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Built for real businesses.</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                        {[
                            { icon: Database, label: "CRM Integration Ready" },
                            { icon: ShieldCheck, label: "Secure Infrastructure" },
                            { icon: Activity, label: "Performance Tracking Included" },
                            { icon: UserCheck, label: "Cancel Anytime" }
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <badge.icon size={16} className="text-slate-600" />
                                <span className="text-[11px] font-bold text-slate-600 tracking-wide">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Limited Onboarding Capacity Block */}
                <div className="max-w-5xl mx-auto reveal delay-300">
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl shadow-orange-500/20 relative overflow-hidden">
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="lg:max-w-xl">
                                <h3 className="text-3xl md:text-4xl font-bold mb-6">Limited Monthly Onboarding Capacity</h3>
                                <p className="text-orange-50 mb-6 text-lg leading-relaxed">
                                    To ensure performance quality and hands-on optimization, we onboard a limited number of new clients each month.
                                </p>
                                <p className="text-orange-100 mb-10 font-medium italic opacity-90">
                                    Every deployment is tailored for measurable revenue impact — not generic automation.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        "No setup fee",
                                        "Priority onboarding",
                                        "Dedicated optimization support",
                                        "Transparent monthly pricing"
                                    ].map((bullet, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={14} className="text-white" />
                                            </div>
                                            <span className="text-sm font-semibold tracking-tight">{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-auto text-center">
                                <Button
                                    onClick={handleCalendlyClick}
                                    className="!bg-white !text-primary hover:!bg-orange-50 font-extrabold px-12 py-5 text-xl shadow-2xl shadow-black/10 transition-transform active:scale-95"
                                >
                                    Secure Your Strategy Call
                                </Button>
                                <p className="mt-6 text-xs text-orange-100 font-bold uppercase tracking-widest opacity-90">
                                    We onboard up to 5 new clients per month.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
