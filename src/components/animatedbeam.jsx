
'use client';

import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import {
  User,
  Atom,
  BadgeCheck,
  Cloud,
  Server,
  LayoutDashboard,
  Workflow,
} from 'lucide-react';

const Circle = forwardRef(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      'z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-zinc-900 text-white p-3 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl',
      className
    )}
  >
    {children}
  </div>
));

const AnimatedBeam = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 50,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.15,
  gradientStartColor = '#4d40ff',
  gradientStopColor = '#40bfff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : 'none';
  const gradientCoordinates = reverse
    ? {
        x1: ['90%', '-10%'],
        x2: ['100%', '0%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      }
    : {
        x1: ['10%', '110%'],
        x2: ['0%', '100%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    updatePath();

    return () => resizeObserver.disconnect();
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('pointer-events-none absolute left-0 top-0 transform-gpu', className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        initial={{ strokeWidth: pathWidth, strokeOpacity: 0 }}
        animate={{ strokeWidth: pathWidth * 1.5, strokeOpacity: 1 }}
        transition={{ duration: 2, delay }}
      />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: '0%', x2: '0%', y1: '0%', y2: '0%' }}
          animate={{ ...gradientCoordinates }}
          transition={{ delay, duration, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export default function CloudPulseBeam() {
  const containerRef = useRef(null);
  const refCloud = useRef(null);
  const refDashboard = useRef(null);
  const refUser = useRef(null);
  const refServer = useRef(null);
  const refAI = useRef(null);
  const refCheck = useRef(null);
  const refWorkflow = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-[600px] w-full max-w-5xl items-center justify-center rounded-xl  bg-black p-10 shadow-2xl"
    >
      <div className="absolute left-10 flex flex-col items-center gap-6">
        <Circle ref={refAI}>
          <Atom />
        </Circle>
        <Circle ref={refServer}>
          <Server />
        </Circle>
        <Circle ref={refDashboard}>
          <LayoutDashboard />
        </Circle>
      </div>

      <Circle className="h-20 w-20 z-20" ref={refCloud}>
        <Cloud />
      </Circle>

      <div className="absolute right-10 flex flex-col items-center gap-6">
        <Circle ref={refUser}>
          <User />
        </Circle>
        <Circle ref={refCheck}>
          <BadgeCheck />
        </Circle>
        <Circle ref={refWorkflow}>
          <Workflow />
        </Circle>
      </div>

      {[refAI, refServer, refDashboard, refUser, refCheck, refWorkflow].map((ref, index) => (
        <AnimatedBeam key={index} containerRef={containerRef} fromRef={ref} toRef={refCloud} duration={3} />
      ))}
    </div>
  );
}
