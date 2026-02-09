import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const RevenueCalculator: React.FC = () => {
    const [callsPerDay, setCallsPerDay] = useState(20);
    const [missedCallRate, setMissedCallRate] = useState(25);
    const [conversionRate, setConversionRate] = useState(15);
    const [avgJobValue, setAvgJobValue] = useState(350);
    const [monthlyRevenueLost, setMonthlyRevenueLost] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Calculation: (Calls * Missed%) * Conversion% * JobValue * 30 days
        const missedCallsPerDay = callsPerDay * (missedCallRate / 100);
        const missedOpportunities = missedCallsPerDay * (conversionRate / 100);
        const dailyLoss = missedOpportunities * avgJobValue;
        const monthlyLoss = dailyLoss * 30;
        setMonthlyRevenueLost(Math.round(monthlyLoss));
    }, [callsPerDay, missedCallRate, conversionRate, avgJobValue]);

    return (
        <section
            ref={sectionRef}
            className={`pt-10 pb-16 lg:pt-16 lg:pb-24 bg-slate-50 overflow-hidden transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between">

                    {/* Left Column - Content */}
                    <div className="lg:w-[48%] pr-0 lg:pr-12 text-center lg:text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6 mx-auto">
                            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            Missed call revenue calculator
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Estimate what <span className="text-orange-500">missed calls</span> may be costing your business each month
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-[1.6]">
                            Every unanswered call is a potential customer walking away to your competitor.
                            Small businesses miss an average of 20 - 30% of calls daily. See what that actually costs your bottom line.
                        </p>

                        <div className="space-y-4 mb-10 flex flex-col items-center">
                            {[
                                "Instant calculation based on industry averages",
                                "See the hidden cost of 'busy' times",
                                "Discover how AI pays for itself in days"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 text-orange-500">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-[52%] w-full flex justify-center lg:justify-end">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden w-full max-w-[500px]">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>

                            <div className="space-y-6">
                                {/* Input 1: Calls Per Day */}
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <label className="text-sm font-semibold text-slate-700">Average Calls Per Day</label>
                                        <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{callsPerDay}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={callsPerDay}
                                        onChange={(e) => setCallsPerDay(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                    />
                                </div>

                                {/* Input 2: Missed Call % */}
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <label className="text-sm font-semibold text-slate-700">Missed Call Percentage</label>
                                        <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{missedCallRate}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={missedCallRate}
                                        onChange={(e) => setMissedCallRate(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                                        <span>0%</span>
                                        <span>Industry Avg: 22%</span>
                                        <span>100%</span>
                                    </div>
                                </div>

                                {/* Input 3: Conversion Rate */}
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <label className="text-sm font-semibold text-slate-700">Customer Conversion Rate</label>
                                        <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{conversionRate}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={conversionRate}
                                        onChange={(e) => setConversionRate(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                    />
                                </div>

                                {/* Input 4: Job Value */}
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <label className="text-sm font-semibold text-slate-700">Average Job Value ($)</label>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                        <input
                                            type="number"
                                            value={avgJobValue}
                                            onChange={(e) => setAvgJobValue(Number(e.target.value))}
                                            className="w-full pl-8 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none font-semibold text-slate-900 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="h-px bg-slate-100 my-4"></div>

                                {/* Result Display */}
                                <div className="bg-orange-50/50 rounded-2xl p-5 border border-orange-100 flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
                                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1 relative z-10">Estimated Monthly Loss</span>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1 relative z-10 tracking-tight">
                                        ${monthlyRevenueLost.toLocaleString()}
                                    </div>
                                    <p className="text-xs text-slate-500 relative z-10">that could be recovered with AI</p>
                                </div>

                                <div className="flex justify-center pt-2 w-full">
                                    <Button href="https://calendly.com" className="!bg-orange-500 hover:!bg-orange-600 !shadow-orange-500/20 text-base py-3 px-6 group w-full max-w-[340px]">
                                        <div className="flex items-center justify-center gap-2 w-full whitespace-nowrap">
                                            <span>See How AI Recovers This</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                        </div>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RevenueCalculator;
