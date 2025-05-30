import React, { useState, useEffect } from 'react';
import { Folder, UploadCloud, BarChart4, Sparkles, ArrowRight } from 'lucide-react';

const Process = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      icon: Folder,
      title: "Write and Organize Code",
      description: "Draft your serverless functions in an intuitive editor, categorize them by project, and prepare them for deployment.",
      number: 1
    },
    {
      icon: UploadCloud,
      title: "Deploy Across Clouds",
      description: "Deploy functions seamlessly to your preferred cloud provider — AWS, GCP, Azure — with full portability and zero configuration.",
      number: 2
    },
    {
      icon: BarChart4,
      title: "Monitor and Optimize",
      description: "Track performance metrics, logs, and resource usage in real time to optimize costs and improve efficiency.",
      number: 3
    }
  ];

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className={`mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <div
              className={`inline-flex items-center space-x-3 bg-white/10 border border-purple-500/30 rounded-full px-6 py-2 mb-10 backdrop-blur-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Sparkles className="w-5 h-5 text-purple-300 animate-pulse" />
              <span className="text-sm text-gray-200 font-medium">
                Process
              </span>
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Serverless deployment<br />in 3 simple steps
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            CloudPulse makes building, deploying, and optimizing<br />serverless functions effortless and cloud-agnostic.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-700 hover:border-white/20 transition-all duration-500 hover:shadow-lg h- flex flex-col relative overflow-hidden">
                {/* Step number */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-gray-600 group-hover:border-white/40 flex items-center justify-center text-sm font-bold transition-all duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center transition-all duration-500">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
