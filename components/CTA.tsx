import React from 'react';
import Button from './ui/Button';

const CTA: React.FC = () => {
  const handleCalendlyClick = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/sumit-anserolabs/strategy-call' });
    }
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="relative z-10 max-w-4xl mx-auto reveal">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Stop Letting Missed Calls <br />
            <span className="text-primary italic">Decide Your Revenue.</span>
          </h2>

          <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-8 max-w-3xl mx-auto">
            Every unanswered call is a potential customer choosing your competitor.
          </h3>

          <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            In 15 minutes, we’ll calculate your missed call impact
            and show you how AI can recover it.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button
              onClick={handleCalendlyClick}
              className="text-xl px-12 py-5 shadow-2xl shadow-orange-500/30 transform transition-transform hover:scale-105 active:scale-95 font-black uppercase tracking-tight"
            >
              Calculate My Missed Call Revenue
            </Button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors duration-300 font-bold text-sm uppercase tracking-widest"
            >
              <span className="w-8 h-px bg-slate-200 group-hover:bg-primary transition-colors"></span>
              Or test the live demo above
              <span className="w-8 h-px bg-slate-200 group-hover:bg-primary transition-colors"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;