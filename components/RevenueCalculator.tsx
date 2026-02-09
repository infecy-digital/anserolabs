import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const RevenueCalculator: React.FC = () => {
    const [callsPerDay, setCallsPerDay] = useState(20);
    const [missedCallRate, setMissedCallRate] = useState(25);
    const [conversionRate, setConversionRate] = useState(15);
    const [avgJobValue, setAvgJobValue] = useState(350);
    const [monthlyRevenueLost, setMonthlyRevenueLost] = useState(0);

    useEffect(() => {
        // Calculation: (Calls * Missed%) * Conversion% * JobValue * 30 days
        const missedCallsPerDay = callsPerDay * (missedCallRate / 100);
        const missedOpportunities = missedCallsPerDay * (conversionRate / 100);
        const dailyLoss = missedOpportunities * avgJobValue;
        const monthlyLoss = dailyLoss * 30;
        setMonthlyRevenueLost(Math.round(monthlyLoss));
    }, [callsPerDay, missedCallRate, conversionRate, avgJobValue]);

    return (
        <section className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between">

                    {/* Left Column - Content */}
                    <div className="lg:w-[48%] pr-0 lg:pr-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            ROI Calculator
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                            How Much Revenue Are <span className="text-orange-500">Missed Calls</span> Costing You?
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-[1.6]">
                            Every unanswered call is a potential customer walking away to your competitor.
                            Small businesses miss an average of 20 - 30% of calls daily. See what that actually costs your bottom line.
                        </p>

                        <div className="space-y-4 mb-10">
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
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col items-center text-center">
                                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Estimated Monthly Loss</span>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-1">
                                        ${monthlyRevenueLost.toLocaleString()}
                                    </div>
                                    <p className="text-xs text-slate-400">that could be recovered with AI</p>
                                </div>

                                <div>
                                    <Button href="https://calendly.com" fullWidth className="!bg-orange-500 hover:!bg-orange-600 !shadow-orange-500/30 text-base py-3 group">
                                        <span className="flex items-center justify-center gap-2">
                                            See How AI Recovers This <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
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
