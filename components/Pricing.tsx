import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Simple Plans.<br />
                        <span className="text-primary">Real Revenue Impact.</span>
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Card 1: Starter */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-slate-100 flex flex-col relative reveal">
                        <div className="absolute top-6 right-6">
                            <span className="bg-orange-100 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                Most Popular for Small Teams
                            </span>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter Plan</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900">$297</span>
                                <span className="text-slate-500 font-medium">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "AI Receptionist (Inbound)",
                                "Up to 500 minutes included",
                                "Standard CRM Integration",
                                "Email support",
                                "Basic AI Scripting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" fullWidth>Get Started</Button>
                    </div>

                    {/* Card 2: Growth */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-slate-100 flex flex-col reveal delay-100">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth Plan</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900">$497</span>
                                <span className="text-slate-500 font-medium">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
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
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" fullWidth>Get Started</Button>
                    </div>
                </div>

                {/* Founding Partner Offer Box */}
                <div className="max-w-5xl mx-auto reveal delay-200">
                    <div className="bg-gradient-to-br from-primary to-orange-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden">
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="lg:max-w-xl">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Founding Partner Offer</h3>
                                <p className="text-orange-50 mb-8 text-lg leading-relaxed">
                                    We’re onboarding 3 early partners at a reduced founding rate in exchange for feedback and a testimonial.
                                </p>

                                <div className="flex flex-wrap gap-x-8 gap-y-4">
                                    {[
                                        "No setup fee",
                                        "Priority onboarding",
                                        "Locked-in pricing for 12 months"
                                    ].map((bullet, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={12} className="text-white" />
                                            </div>
                                            <span className="text-sm font-medium">{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-auto text-center">
                                <Button
                                    onClick={() => (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/sumit-anserolabs/strategy-call' })}
                                    className="!bg-primary !text-white ring-4 ring-white/20 hover:!bg-primary-hover font-bold px-10 py-5 text-lg shadow-2xl shadow-orange-500/40"
                                >
                                    Claim Founding Spot
                                </Button>
                                <p className="mt-4 text-xs text-orange-100 opacity-90 font-medium tracking-wide">
                                    Limited to only 3 spots. Secure yours today.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Line */}
                    <p className="text-center mt-8 text-slate-500 font-medium">
                        No long-term contracts. Cancel anytime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
