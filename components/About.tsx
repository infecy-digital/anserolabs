import React from 'react';
import { Cpu, MessageSquare, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">What are AI Voice Agents?</h2>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-slate-100">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Our AI voice agents are <span className="font-semibold text-slate-900">intelligent computer programs</span> that can talk and listen like a human. They utilize advanced natural language processing to understand spoken words, process complex information, and respond naturally in real time—without the robotic delay.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Think of it like a virtual assistant (Siri or Alexa) but <span className="text-primary font-semibold">purpose-built for business revenue</span>. They don't just answer questions; they handle real customer calls, qualify leads, and secure appointments on your calendar while you sleep.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-100">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Cpu size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Natural Intelligence</h3>
                <p className="text-sm text-slate-500">Understands context, nuance, and intent.</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Available 24/7</h3>
                <p className="text-sm text-slate-500">Never takes a break, sick day, or vacation.</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 bg-orange-50 text-primary rounded-full flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Human-like Voice</h3>
                <p className="text-sm text-slate-500">Indistinguishable from a real staff member.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;