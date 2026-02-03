import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const cases = [
    {
      company: "BrightSmile Dental",
      industry: "Healthcare",
      metric: "$15k+",
      desc: "Monthly revenue recovered from missed weekend calls.",
      quote: "It's like having a receptionist who never sleeps. Our patients love that they can book appointments on Sunday nights."
    },
    {
      company: "Apex HVAC Services",
      industry: "Field Services",
      metric: "20hrs",
      desc: "Admin time saved per week on appointment reminders.",
      quote: "The outbound confirmation calls reduced our no-show rate by 40%. The AI sounds incredibly real, our customers can't tell."
    },
    {
      company: "Miller & Associates",
      industry: "Legal",
      metric: "100%",
      desc: "Inbound leads qualified and routed instantly.",
      quote: "We used to lose leads because we couldn't answer while in court. Now Ansero Labs captures every detail and books consults for us."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Real Results</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Results that speak for themselves</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="glass-dark rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 reveal">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-orange-400 fill-orange-400" />
                ))}
              </div>
              
              <div className="mb-8">
                 <h3 className="text-5xl font-extrabold text-white mb-2 tracking-tight">{item.metric}</h3>
                 <p className="text-slate-400 text-sm uppercase tracking-wide font-medium">{item.desc}</p>
              </div>
              
              <blockquote className="text-slate-300 leading-relaxed italic mb-6 border-l-2 border-primary/50 pl-4">
                "{item.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/10">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center font-bold text-white text-xs">
                  {item.company.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.company}</h4>
                  <span className="text-slate-500 text-xs">{item.industry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;