import React, { useState, useEffect } from 'react';
import { Loader, Code2, TerminalSquare } from 'lucide-react';

export default function CloudPulseIsolatedRunner() {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 100);
      setGlowIntensity(0.6 + 0.4 * Math.sin(Date.now() * 0.003));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-black flex items-center justify-center p-8 ">
      <div className="relative flex items-center justify-center space-x-20 ">
        {/* Input Icon */}
        <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-700 hover:scale-105 transition-transform duration-300">
          <Code2 className="w-7 h-7 text-gray-400" />
        </div>

        {/* Isolated Execution Core */}
        <div className="relative">
          {/* Glowing Ring */}
          <div
            className="absolute inset-0 rounded-3xl opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(147,51,234,0.2) 60%, transparent 80%)',
              transform: `scale(${2 + glowIntensity * 0.4})`,
              filter: 'blur(25px)',
              zIndex: 0,
            }}
          />

          {/* Orbiting Dots */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 36 + pulsePhase * 1.5}deg) translateY(-60px)`,
                opacity: 0.4 + 0.6 * Math.sin(pulsePhase * 0.12 + i),
              }}
            />
          ))}

          {/* Core */}
          <div
            className="relative w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-3xl flex items-center justify-center shadow-lg border border-white/10"
            style={{
              boxShadow: `0 0 ${40 + glowIntensity * 30}px rgba(147, 51, 234, 0.5),
                          inset 0 0 ${20 + glowIntensity * 10}px rgba(255,255,255,0.1)`,
              zIndex: 1,
            }}
          >
            <Loader
              className="w-10 h-10 text-white animate-spin"
              style={{
                filter: `drop-shadow(0 0 ${10 + glowIntensity * 5}px rgba(255, 255, 255, 0.9))`,
              }}
            />
          </div>

          {/* Pulse Border */}
          <div
            className="absolute inset-1 rounded-2xl border border-white/10 animate-pulse pointer-events-none"
            style={{
              opacity: 0.3 + glowIntensity * 0.4,
              zIndex: 1,
            }}
          />

          {/* Horizontal Beams */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
            <div
              className="absolute top-1/2 right-full w-24 h-0.5 transform -translate-y-1/2"
              style={{
                background: `linear-gradient(to left, rgba(99,102,241,${0.8 * glowIntensity}), transparent)`,
              }}
            />
            <div
              className="absolute top-1/2 left-full w-24 h-0.5 transform -translate-y-1/2"
              style={{
                background: `linear-gradient(to right, rgba(147,51,234,${0.8 * glowIntensity}), transparent)`,
              }}
            />
          </div>
        </div>

        {/* Output Icon */}
        <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-700 hover:scale-105 transition-transform duration-300">
          <TerminalSquare className="w-7 h-7 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
