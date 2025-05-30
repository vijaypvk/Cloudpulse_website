
"use client";

import { Code, Cloud, Cpu, Lock, Rocket } from "lucide-react";
import { GlowingEffect } from "../components/glow-effect";
import { motion } from "framer-motion";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Cloud className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Seamless Serverless Deployments"
        description="Deploy and scale your functions instantly without worrying about infrastructure."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Cpu className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Run Complex Code in Isolation"
        description="Execute Python or JS logic in sandboxed environments with real-time outputs."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Rocket className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Cross-Cloud Portability Engine"
        description="Write once, deploy anywhere. Move your workloads across AWS, GCP, and Azure with ease."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Security & Isolation"
        description="Each execution environment is securely isolated to protect your data and workloads."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Developer-First UX"
        description="Enjoy a rich UI for writing, testing, and managing your functions just like in VS Code."
      />
    </ul>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <motion.li
      className={`min-h-[14rem] list-none ${area}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};