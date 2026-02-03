import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Does the AI sound robotic?",
      a: "Not at all. We use the latest generative voice models (like the one in the demo above) that include pauses, filler words (like 'um' or 'ah'), and natural intonation. Most callers cannot distinguish it from a human receptionist."
    },
    {
      q: "How long does setup take?",
      a: "Typically 5-7 days. We start with a discovery call to map your workflow, build the agent, test it internally, and then do a live hand-off. It's a Done-For-You service."
    },
    {
      q: "Can it integrate with my calendar?",
      a: "Yes! We integrate seamlessly with Calendly, Google Calendar, Clio, Salesforce, HighLevel, and many other CRM/Scheduling tools to book appointments directly."
    },
    {
      q: "What happens if the AI doesn't know the answer?",
      a: "We program 'graceful fallbacks'. If a caller asks something complex, the AI can take a detailed message, mark it as urgent, or forward the call to a specific human team member immediately."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative">
       <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
       
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-600 mt-4">Everything you need to know about replacing voicemail with AI.</p>
        </div>

        <div className="space-y-4 reveal delay-100">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === idx ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-white border-slate-100'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === idx ? 'text-primary' : 'text-slate-900'}`}>
                  {faq.q}
                </span>
                {openIndex === idx ? 
                  <Minus className="text-primary shrink-0" /> : 
                  <Plus className="text-slate-400 shrink-0" />
                }
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;