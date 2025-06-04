import React, { useEffect, useRef } from 'react';
import { cn } from "../lib/utils";

const ServerlessDeploymentAnimation = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrow = arrowRef.current;
    if (!arrow) return;

    arrow.setAttribute('stroke-dasharray', '120');
    arrow.setAttribute('stroke-dashoffset', '120');

    const animateArrow = () => {
      arrow.style.transition = 'none';
      arrow.setAttribute('stroke-dashoffset', '120');
      setTimeout(() => {
        arrow.style.transition = 'stroke-dashoffset 2s ease-in-out';
        arrow.setAttribute('stroke-dashoffset', '0');
      }, 100);
    };

    animateArrow();
    const interval = setInterval(animateArrow, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("w-full h-[200px] bg-black flex items-center justify-center p-4")}>
      <svg width="900" height="300" viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#272a2f" strokeWidth="2" opacity="0.5" />
          </pattern> */}
          <radialGradient id="codeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cloudGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <linearGradient id="functionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Code Box - Glowing Rectangle */}
        <rect x="100" y="115" width="80" height="80" rx="16" fill="url(#codeGlow)" />
        <rect x="110" y="125" width="60" height="60" rx="12" fill="#0a0a0a" stroke="#8a2be2" strokeWidth="2" />
        <rect x="115" y="130" width="50" height="50" rx="8" fill="#111111" />
        <text x="140" y="160" fontSize="24" fill="#8a2be2" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
          {"</>"}
        </text>

        {/* Particles on arrow path */}
        <path id="arrowPath" d="M 190 150 Q 300 100 460 150" fill="none" opacity="0" />
        <circle r="2" fill="#8a2be2" opacity="0.6">
          <animateMotion dur="2s" begin="0s" repeatCount="indefinite">
            <mpath xlinkHref="#arrowPath" />
          </animateMotion>
        </circle>
        <circle r="1.5" fill="#1e90ff" opacity="0.5">
          <animateMotion dur="2s" begin="0.5s" repeatCount="indefinite">
            <mpath xlinkHref="#arrowPath" />
          </animateMotion>
        </circle>

        {/* Arrow Line */}
        <path
          ref={arrowRef}
          d="M 190 150 Q 300 100 460 150"
          stroke="url(#arrowGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <polygon points="460,150 450,145 450,155" fill="url(#arrowGradient)" />


        {/* Cloud */}
        <path
          d="M500 135c0-15 12-25 25-25s25 10 25 25h8c12 0 20 8 20 18s-8 18-20 18h-70c-12 0-20-8-20-18s8-18 20-18h8z"
          fill="#111111"
          stroke="#00d4ff"
          strokeWidth="1.5"
        />

        {/* Lambda Functions */}
        <g>
          {[{ x: 620, y: 80, delay: 0 }, { x: 690, y: 130, delay: 0.5 }, { x: 620, y: 190, delay: 1 }].map((box, i) => (
            <g key={i}>
              <rect x={box.x} y={box.y} width="50" height="50" rx="8" fill="url(#functionGradient)" opacity="0.9">
                <animate attributeName="opacity" values="0;0.9;0" dur="3s" begin={`${box.delay}s`} repeatCount="indefinite" />
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 10;0 0;0 10"
                  dur="3s"
                  begin={`${box.delay}s`}
                  repeatCount="indefinite"
                />
              </rect>
              <text
                x={box.x + 25}
                y={box.y + 30}
                fontSize="16"
                fill="white"
                textAnchor="middle"
                fontFamily="monospace"
              >
                λ
              </text>
            </g>
          ))}
        </g>

        {/* Status Indicator */}
        <circle cx="790" cy="270" r="4" fill="#00ff88">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="800" y="275" fontSize="12" fill="#00ff88" fontFamily="monospace">DEPLOYING...</text>
      </svg>
    </div>
  );
};

export default ServerlessDeploymentAnimation;
