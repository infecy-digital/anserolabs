import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Signal, Battery, Phone, Loader2 } from 'lucide-react';

// Define Retell Client interface loosely since we are dynamic importing
interface RetellWebClient {
  startConversation: (request: { callId: string; enableUpdate?: boolean; sampleRate?: number }) => Promise<void>;
  stopConversation: () => void;
  on: (event: string, callback: (data?: any) => void) => void;
  off: (event: string, callback: (data?: any) => void) => void;
}

const PhoneMockup: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false); // For visualizer

  // Refs
  const retellClientRef = useRef<any>(null);

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

  // Initialize Retell Client
  useEffect(() => {
    const initRetell = async () => {
      try {
        // Dynamic import from esm.sh
        const module = await import(/* @vite-ignore */ 'https://esm.sh/retell-client-js-sdk');
        const RetellWebClient = module.RetellWebClient;

        const client = new RetellWebClient();
        retellClientRef.current = client;

        // Setup Event Listeners
        client.on('call_started', () => {
          console.log('Call started');
          setIsConnecting(false);
          setIsConnected(true);
        });

        client.on('call_ended', () => {
          console.log('Call ended');
          setIsConnected(false);
          setIsConnecting(false);
          setIsSpeaking(false);
        });

        // "update" event provides audio data and state, but "agent_start_talking" is simpler for UI
        client.on('agent_start_talking', () => {
          setIsSpeaking(true);
        });

        client.on('agent_stop_talking', () => {
          setIsSpeaking(false);
        });

        client.on('error', (error: any) => {
          console.error('Retell error:', error);
          setIsConnecting(false);
          setIsConnected(false);
        });

        console.log("Retell SDK initialized");
      } catch (err) {
        console.error("Failed to load Retell SDK:", err);
      }
    };

    initRetell();

    // Cleanup
    return () => {
      if (retellClientRef.current) {
        retellClientRef.current.stopConversation();
      }
    };
  }, []);

  const handleCallToggle = async () => {
    if (isConnected) {
      if (retellClientRef.current) {
        retellClientRef.current.stopConversation();
      }
    } else {
      setIsConnecting(true);
      try {
        // 1. Get Access Token from our backend
        // Note: In development/CORS environments, ensure the backend allows the origin.
        // Assuming /api is proxied or same-origin in production.
        const response = await fetch('/api/retell/create-web-call', {
          method: 'POST',
        });

        if (!response.ok) throw new Error('Failed to get access token');
        const data = await response.json();

        if (retellClientRef.current && data.access_token) {
          // 2. Start Conversation
          await retellClientRef.current.startConversation({
            accessToken: data.access_token,
          });
        } else {
          throw new Error('Retell client not ready or no token');
        }

      } catch (err) {
        console.error('Error starting call:', err);
        setIsConnecting(false);
      }
    }
  };

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
            <span className={`w-2 h-2 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] bg-green-400 ${isConnected ? 'animate-pulse' : ''}`}></span>
            <span className="text-xs font-medium tracking-wide text-green-100">
              {isConnected ? 'Call in Progress' : (isConnecting ? 'Connecting...' : 'Online')}
            </span>
          </div>
        </div>

        {/* Waveform Visualization - Animated when live */}
        <div className="relative z-10 flex-grow flex items-center justify-center gap-1.5 h-32 px-12">
          {isConnected ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="waveform-bar w-2 bg-white rounded-full h-1/2" style={{
                animationDuration: `${0.6 + Math.random() * 0.4}s`,
                opacity: isSpeaking ? 1 : 0.3 // Dim when not speaking
              }}></div>
            ))
          ) : (
            <div className="flex gap-1.5 items-center opacity-30">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 bg-white rounded-full h-2"></div>
              ))}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="relative z-10 pb-12 sm:pb-16 px-8 flex justify-center items-center">

          {/* Custom UI Buttons */}
          {!isConnected && !isConnecting && (
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleCallToggle}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500 hover:bg-green-400 shadow-[0_8px_20px_rgba(34,197,94,0.3)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group border border-white/10"
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current" />
              </button>
              <span className="text-sm font-medium text-slate-300">Tap to call</span>
            </div>
          )}

          {isConnecting && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-700/80 backdrop-blur flex items-center justify-center border border-white/10">
                <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-spin" />
              </div>
              <span className="text-sm font-medium text-slate-300">Connecting...</span>
            </div>
          )}

          {isConnected && (
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleCallToggle}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500 hover:bg-red-400 shadow-[0_8px_20px_rgba(239,68,68,0.3)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-white/10"
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current rotate-[135deg]" />
              </button>
              <span className="text-sm font-medium text-slate-300">End Call</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;