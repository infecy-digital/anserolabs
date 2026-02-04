import React, { useState, useEffect } from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';

// Declare custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'agent-id': string };
    }
  }
}

const PhoneMockup: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  // Clock Effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Load ElevenLabs Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] p-4 shadow-2xl border-4 border-slate-800 ring-1 ring-white/20 select-none transform sm:hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
      {/* Glare Effect */}
      <div className="absolute top-0 right-0 w-[200%] h-full bg-gradient-to-l from-transparent via-white/5 to-transparent skew-x-12 z-20 pointer-events-none"></div>

      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 bg-slate-900 rounded-b-xl z-30"></div>

      {/* Screen Content */}
      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden relative flex flex-col text-white">

        {/* Background Blur Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[50%] bg-primary rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[50%] bg-blue-500 rounded-full blur-[80px]"></div>
        </div>

        {/* Status Bar */}
        <div className="relative z-10 pt-10 sm:pt-12 px-6 flex justify-between items-center text-xs font-medium text-white">
          <span>{currentTime}</span>
          <div className="flex items-center gap-1.5">
            <Signal size={14} className="fill-current" />
            <Wifi size={14} />
            <Battery size={16} className="fill-current" />
          </div>
        </div>

        {/* Caller Info */}
        <div className="relative z-10 flex flex-col items-center mt-8 sm:mt-12">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gray-200 to-white flex items-center justify-center mb-6 shadow-xl ring-4 ring-white/10 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Ansa AI Agent"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-center">Ansa (AI)</h3>
          <div className="flex items-center gap-2 mt-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/5">
            <span className="text-xs font-medium tracking-wide text-green-100">
              Ready to Chat
            </span>
          </div>
        </div>

        {/* Waveform Visualization - Static Placeholder */}
        <div className="relative z-10 flex-grow flex items-center justify-center gap-1.5 h-32 px-12">
          <div className="flex gap-1.5 items-center opacity-30">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2 bg-white rounded-full h-2"></div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="relative z-10 pb-12 sm:pb-16 px-8 flex justify-center items-center">
          {/* ElevenLabs Widget */}
          <elevenlabs-convai agent-id="agent_9301kgm7s9v7e5z9ptmdzgqjcsn0"></elevenlabs-convai>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;