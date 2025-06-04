
import React from "react";
import { cn } from "../lib/utils";
import CloudPulseBeam from "../components/animatedbeam";
import ServerlessDeploymentAnimation from "../components/serverlesssvg";
import SecurityRipple from "../components/secripple";
import CloudPulseIsolatedRunner from "../components/runcode";
import {
  Network,
  CloudUpload,
  ShieldCheck,
  CloudLightning,
} from "lucide-react";

const Skeleton = () => (
  <div className="w-full h-32 rounded-xl " />
);

const items = [
  {
    title: "Run Complex Code in Isolation",
    description:
      "Execute high-compute functions in secure, isolated environments with sandboxing.",
    header:<CloudPulseIsolatedRunner />,
    icon: <Network className="h-6 w-6 text-neutral-500" />,
  },
  
  {
    title: "Seamless Serverless Deployments",
    description:
      "Effortlessly deploy and manage serverless workloads across any infrastructure.",
    header:  <ServerlessDeploymentAnimation />,
    icon: <CloudLightning className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Cross-Cloud Portability Engine",
    description:
      "Write once, deploy anywhere – AWS, Azure, GCP – without changing a line of code.",
    header: <CloudPulseBeam  />,
    icon: <CloudUpload className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Security & Isolation",
    description:
      "Built-in encryption, access control, and container-level isolation for enterprise-grade safety.",
    header: <SecurityRipple className="z-10"/>,
    icon: <ShieldCheck className="h-6 w-6 text-neutral-500" />,
  },
];

export const GlowingEffectDemo = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 md:auto-rows-[22rem] gap-6 p-4 ">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "group/bento relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:border-white/20 dark:bg-black",
            i === 1 || i === 2 ? "md:col-span-2" : ""
          )}
        >
          {item.header}
          <div className="flex flex-col pt-4">
            <div className="flex items-center space-x-2">
              {item.icon}
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                {item.title}
              </h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
