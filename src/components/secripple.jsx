import React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";

export default function SecurityRipple() {
  const baseSize = 140;
  const circles = 5;

  return (
    <div className="relative flex  h-52 w-full items-center justify-center ">
      {/* Ripple background */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 pointer-events-none select-none"
        )}
      >
        {Array.from({ length: circles }).map((_, i) => {
          const size = baseSize + i * 40;
          const opacity = 0.25 - i * 0.04;
          const animationDelay = `${i * 0.1}s`;

          return (
            <div
              key={i}
              className="absolute animate-ripple rounded-full border border-white/20 bg-white/15"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
                opacity,
                animationDelay,
              }}
            />
          );
        })}
      </div>

      {/* Center icon */}
      <ShieldCheck className="z-10 h-20 w-20 text-white" />
    </div>
  );
}
