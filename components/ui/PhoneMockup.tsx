import React, { useState, useEffect, useRef } from 'react';
import { Phone, Wifi, Signal, Battery, Loader2 } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";

// --- Audio Helper Functions ---

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function createBlob(data: Float32Array): { data: string; mimeType: string } {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

// --- Component ---

const PhoneMockup: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  // Audio & AI Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

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

  // Cleanup Effect
  useEffect(() => {
    return () => {
      stopSession();
    };
  }, []);

  const stopSession = () => {
    // Stop microphone stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    // Close AI session
    if (sessionRef.current) {
      sessionRef.current = null;
    }

    // Close Audio Contexts
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }

    // Stop all playing sources
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) { }
    });
    sourcesRef.current.clear();

    setIsConnected(false);
    setIsConnecting(false);
  };

  const startSession = async () => {
    try {
      setIsConnecting(true);

      // Check API Key
      // Access window safely
      const win = window as any;
      if (win.aistudio && win.aistudio.hasSelectedApiKey) {
        const hasKey = await win.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await win.aistudio.openSelectKey();
          // Race condition mitigation: assume success if they returned
        }
      }

      // Initialize Audio Contexts
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      inputAudioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      outputAudioContextRef.current = new AudioContextClass({ sampleRate: 24000 });

      const inputNode = inputAudioContextRef.current.createGain();
      const outputNode = outputAudioContextRef.current.createGain();
      outputNode.connect(outputAudioContextRef.current.destination);

      // Get Microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // Initialize AI Client
      // Ensure apiKey is defined. If process is not defined, this might throw, but standard envs handle it.
      const apiKey = process.env.API_KEY;
      const ai = new GoogleGenAI({ apiKey: apiKey });

      const config = {
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: 'You are Ansa, a helpful, professional AI assistant for Ansero Labs. You are concise, polite, and efficient. When you start, greet the user by introducing yourself as "Ansa from Ansero Labs". Your job is to demonstrate your capabilities as a voice agent.',
        },
      };

      let nextStartTime = 0;

      // Connect to Live API
      const sessionPromise = ai.live.connect({
        ...config,
        callbacks: {
          onopen: () => {
            console.log("AI Session Opened");
            setIsConnecting(false);
            setIsConnected(true);

            // Setup Input Processing
            if (!inputAudioContextRef.current || !streamRef.current) return;

            const source = inputAudioContextRef.current.createMediaStreamSource(streamRef.current);
            const scriptProcessor = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);

            scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
              const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);

              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContextRef.current.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            // Handle Audio Output
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio && outputAudioContextRef.current) {
              const ctx = outputAudioContextRef.current;
              nextStartTime = Math.max(nextStartTime, ctx.currentTime);

              const audioBuffer = await decodeAudioData(
                decode(base64Audio),
                ctx,
                24000,
                1
              );

              const source = ctx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputNode);

              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
              });

              source.start(nextStartTime);
              nextStartTime += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            // Handle Interruption
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(source => {
                try { source.stop(); } catch (e) { }
              });
              sourcesRef.current.clear();
              nextStartTime = 0;
            }
          },
          onclose: () => {
            console.log("AI Session Closed");
            stopSession();
          },
          onerror: (err) => {
            console.error("AI Session Error", err);
            // Don't immediately stop session on generic errors if possible, but Network Error usually is fatal
            stopSession();
          }
        }
      });

      sessionRef.current = sessionPromise;

    } catch (error) {
      console.error("Failed to start session:", error);
      setIsConnecting(false);
      stopSession();
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
              {isConnected ? 'Live' : 'Ready'}
            </span>
          </div>
        </div>

        {/* Waveform Visualization */}
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

          {!isConnected && !isConnecting && (
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={startSession}
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
                onClick={stopSession}
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