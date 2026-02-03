import React from 'react';
import { PhoneCall, AudioWaveform, Bot, Sparkles, Activity } from 'lucide-react';

const LogoShowcase: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-50/95 backdrop-blur-sm overflow-y-auto p-4 md:p-10 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">

        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Choose Your Brand Identity</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            I've designed three variations for the Ansero Labs brand. Please review them below and let me know which one resonates with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Option 1: The Modern Connector */}
          <div className="group relative bg-slate-50 rounded-2xl p-8 border-2 border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
            <div className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Option 1</div>

            <div className="h-32 flex flex-col items-center justify-center gap-6">
              {/* Render */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-tr from-primary to-orange-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary/30">
                  <PhoneCall size={20} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  Ansero<span className="text-primary">Labs</span>
                </span>
              </div>
            </div>

            <div className="text-center border-t border-slate-200 pt-6">
              <h3 className="font-bold text-slate-900 mb-2">The "Connector"</h3>
              <p className="text-xs text-slate-500 leading-relaxed px-4">
                Friendly, established, and direct. The gradient rounded square suggests a modern app icon. Best for SaaS appeal.
              </p>
            </div>
          </div>

          {/* Option 2: The Sonic Wave */}
          <div className="group relative bg-slate-50 rounded-2xl p-8 border-2 border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
            <div className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Option 2</div>

            <div className="h-32 flex flex-col items-center justify-center gap-6">
              {/* Render */}
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-full text-primary">
                  <AudioWaveform size={20} />
                </div>
                <div className="flex flex-col justify-center h-10">
                  <span className="text-xl font-extrabold text-slate-900 tracking-tighter leading-none">ANSERO</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] leading-none ml-0.5 mt-1">Labs</span>
                </div>
              </div>
            </div>

            <div className="text-center border-t border-slate-200 pt-6">
              <h3 className="font-bold text-slate-900 mb-2">The "Sonic Wave"</h3>
              <p className="text-xs text-slate-500 leading-relaxed px-4">
                Tech-focused and precise. The dark circle creates high contrast, emphasizing the audio/voice nature of the business.
              </p>
            </div>
          </div>

          {/* Option 3: The Intelligent Agent */}
          <div className="group relative bg-slate-50 rounded-2xl p-8 border-2 border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
            <div className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Option 3</div>

            <div className="h-32 flex flex-col items-center justify-center gap-6">
              {/* Render */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 border-2 border-slate-900 rounded-lg flex items-center justify-center text-slate-900 relative">
                  <Bot size={20} strokeWidth={2.5} />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                </div>
                <span className="text-2xl font-semibold text-slate-900 tracking-tight">
                  Ansero<span className="font-light text-slate-400">Labs</span>
                </span>
              </div>
            </div>

            <div className="text-center border-t border-slate-200 pt-6">
              <h3 className="font-bold text-slate-900 mb-2">The "Agent"</h3>
              <p className="text-xs text-slate-500 leading-relaxed px-4">
                Futuristic and clean. The notification dot on the icon signifies "active" status. Best for an AI-first brand image.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 p-4 bg-slate-50 rounded-xl text-center border border-slate-200">
          <p className="text-slate-600 font-medium">
            👇 Please tell me in the chat: <span className="text-primary font-bold">"I choose Option 1 / 2 / 3"</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;