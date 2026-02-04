import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Signal, Battery, Phone, Loader2 } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [volume, setVolume] = useState(0);

  // Refs for SDK and Conversation
  const conversationRef = useRef<any>(null);
  const ConversationClassRef = useRef<any>(null);

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

  // Load ElevenLabs SDK from ESM.sh to avoid npm install issues
  useEffect(() => {
    const loadSDK = async () => {
      try {
        // Dynamic import to bypass local resolution
        // @ts-ignore
        const module = await import(/* @vite-ignore */ 'https://esm.sh/@elevenlabs/client');
        ConversationClassRef.current = module.Conversation;
        console.log("ElevenLabs SDK loaded");
      } catch (err) {
        console.error("Failed to load ElevenLabs SDK", err);
      }
    };
    loadSDK();

    return () => {
      if (conversationRef.current) {
        conversationRef.current.endSession();
      }
    };
  }, []);

  const startConversation = async () => {
    if (!ConversationClassRef.current) {
      console.error("SDK not loaded yet");
      return;
    }

    try {
      setIsConnecting(true);

      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const conversation = await ConversationClassRef.current.startSession({
        agentId: 'agent_9301kgm7s9v7e5z9ptmdzgqjcsn0',
        onConnect: () => {
          console.log("Connected to ElevenLabs");
          setIsConnecting(false);
          setIsConnected(true);
        },
        onDisconnect: () => {
          console.log("Disconnected from ElevenLabs");
          setIsConnected(false);
          setIsConnecting(false);
          setVolume(0);
        },
        onError: (error: any) => {
          console.error("ElevenLabs Error:", error);
          setIsConnecting(false);
          setIsConnected(false);
        },
        onModeChange: (mode: { mode: string }) => {
          console.log("Mode changed:", mode);
          // If accessing speaking/listening state becomes available
        },
      });

      conversationRef.current = conversation;

    } catch (err) {
      console.error("Failed to start conversation:", err);
      setIsConnecting(false);
    }
  };

  const stopConversation = async () => {
    if (conversationRef.current) {
      await conversationRef.current.endSession();
      conversationRef.current = null;
    }
  };

  const handleCallToggle = () => {
    if (isConnected) {
      stopConversation();
    } else {
      startConversation();
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
              {isConnected ? 'Live' : (isConnecting ? 'Connecting...' : 'Ready to Chat')}
            </span>
          </div>
        </div>

        {/* Waveform Visualization - Animated when live */}
        <div className="relative z-10 flex-grow flex items-center justify-center gap-1.5 h-32 px-12">
          {isConnected ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="waveform-bar w-2 bg-white rounded-full h-1/2" style={{
                animationDuration: `${0.6 + Math.random() * 0.4}s`
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