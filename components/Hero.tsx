import React from 'react';
import Button from './ui/Button';
import PhoneMockup from './ui/PhoneMockup';
import { Briefcase, Building2, Stethoscope, Scale } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
      {/* Background decoration with Noise */}
      <div className="absolute inset-0 bg-noise opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Tightened gap from lg:gap-24 to lg:gap-16 for a more packed look */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100 rounded-full text-orange-600 text-xs font-semibold uppercase tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Now onboarding new partners
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Turn Missed Calls into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Revenue on Autopilot.</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-medium text-slate-600 mb-6">
              Stop losing leads to voicemail. 
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              85% of callers won’t leave a voicemail — they call your competitor instead. 
              Our AI voice agents capture every lead, qualify prospects, and book jobs 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button href="https://calendly.com" className="text-lg px-8 py-4 shadow-orange-500/20" withIcon>
                Get Your Custom Demo
              </Button>
            </div>
            
            {/* Trusted By Strip - Inline */}
            <div className="pt-8 border-t border-slate-200/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Trusted by modern businesses</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Stethoscope size={24} /> <span>ApexDental</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Scale size={24} /> <span>Miller Law</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Building2 size={24} /> <span>CityHVAC</span>
                </div>
                 <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Briefcase size={24} /> <span>ProAgency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-auto flex justify-center relative mt-8 lg:mt-0">
             <div className="relative z-10">
               <PhoneMockup />
             </div>
             {/* Decorative blob behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-tr from-slate-200 to-white rounded-[3rem] -z-10 rotate-6 blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;