import React from 'react';
import { PhoneIncoming, PhoneOutgoing, Settings, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">Comprehensive Voice Solutions</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Whether you need to capture inbound leads or re-engage past customers, our agents handle it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Service 1: Inbound (POPULAR) */}
          <div className="flex flex-col h-full bg-white border border-slate-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 relative overflow-hidden reveal delay-100 ring-4 ring-primary/5">
             {/* Highlight badge for popular service */}
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
              Popular
            </div>

            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-green-100">
              <PhoneIncoming size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Inbound Receptionist</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              Let our AI handle your incoming calls 24/7 with natural, human-like conversations. Never let a lead go to voicemail again.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide opacity-80 mb-2">Top Use Cases</h4>
              {[
                "Appointment scheduling",
                "Customer support & FAQs",
                "Lead qualification",
                "After-hours handling",
                "Order status inquiries"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 2: Outbound */}
          <div className="flex flex-col h-full glass-card rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 reveal delay-200">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
              <PhoneOutgoing size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Automated Outbound</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              Automate reminders, follow-ups, and notifications. We strictly do not offer cold calling—only warm, consent-based engagement.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide opacity-80 mb-2">Top Use Cases</h4>
              {[
                "Appointment reminders",
                "Inquiry follow-ups",
                "Payment reminders",
                "Customer surveys",
                "Re-activation campaigns"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 3: Support */}
          <div className="flex flex-col h-full glass-card rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 reveal delay-300">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-purple-100">
              <Settings size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Support & Optimization</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              We don't just build it and leave. We keep your AI voice agents running at peak performance with ongoing monitoring and tuning.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide opacity-80 mb-2">Top Use Cases</h4>
              {[
                "24/7 uptime monitoring",
                "Script optimization",
                "Conversation analysis",
                "Monthly reporting",
                "Integration maintenance"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;