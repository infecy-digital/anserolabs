import React from 'react';
import { Calendar, Headphones, Bot, PlayCircle, BarChart } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Discovery Call",
      desc: "We discuss your call flow and business goals."
    },
    {
      icon: Headphones,
      title: "Analysis",
      desc: "We analyze your current scripts and needs."
    },
    {
      icon: Bot,
      title: "Build & Train",
      desc: "We configure your custom AI agent."
    },
    {
      icon: PlayCircle,
      title: "Testing",
      desc: "We refine conversations for maximum realism."
    },
    {
      icon: BarChart,
      title: "Go Live",
      desc: "Launch and start capturing missed revenue."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">The Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">From Missed Calls to Booked Revenue</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-800 -translate-x-1/2 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group bg-slate-900 md:bg-transparent py-4 md:py-0">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 shadow-lg group-hover:bg-primary transition-colors duration-300 relative z-20">
                   <step.icon size={32} className="text-white" />
                   <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-sm font-bold shadow-md">
                     {index + 1}
                   </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;