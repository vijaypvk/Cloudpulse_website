
// import { ChevronDown, ArrowRight, Sparkles, Zap, BarChart3, Shield } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import Footer from '../components/footer';
// import { TypewriterEffect } from '../components/typerwriter';
// import { ReviewCards } from '../components/reviewcards';
// import Header from '../components/header';
// import { GlowingEffectDemo } from '../components/feature';
// export default function Homepage() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);

//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const features = [
//     { icon: Zap, title: 'Serverless', desc: 'Functions without infrastructure complexity.' },
//     { icon: BarChart3, title: 'Auto Scale', desc: 'Seamlessly scale workloads without intervention.' },
//     { icon: Shield, title: 'Hybrid Ready', desc: 'Deploy across cloud or on-premise environments.' },
//   ];

//   return (
//     <div className="min-h-screen   text-white relative overflow-hidden font-sans">
//       {/* Dynamic Grid */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute inset-0 opacity-70 transition-all duration-1000 ease-out"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(147,51,234,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.15) 1px, transparent 1px)',
//             backgroundSize: '60px 60px',
//             transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
//           }}
//         />

//       </div>

//       {/* Navigation */}
//       <nav className={`relative z-10 max-w-7xl mx-auto px-8 py-6 flex items-center justify-between transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>

//         {/* <Header/> */}
//         <div className="text-2xl font-extrabold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">CloudPulse</div>
//         <div className="hidden md:flex items-center space-x-8 text-sm text-gray-400">
//           <div className="flex items-center space-x-1 hover:text-white cursor-pointer transition-all duration-300">
//             <span>Features</span>
//             <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//           </div>
//           <span className="hover:text-white cursor-pointer transition">Docs</span>
//           <span className="hover:text-white cursor-pointer transition">Pricing</span>
//           <span className="hover:text-white cursor-pointer transition">Use Cases</span>
//         </div>
//         <div className="flex space-x-4">
//           <button className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300">Start for Free</button>
//           <button className="border border-gray-600 px-6 py-2 rounded-xl hover:border-gray-500 hover:bg-gray-800 transition-all duration-300">Docs</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto ">

//         <div className={`inline-flex items-center space-x-3 bg-gray-800/50 border border-purple-500/30 rounded-full px-6 py-2 mb-10 backdrop-blur-md transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//           <Sparkles className="w-5 h-5 text-purple-400 animate-spin-slow" />
//           <span className="text-sm text-gray-300 font-medium">Next-gen Serverless Platform</span>
//           <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-300" />
//         </div>

//         <h1 className={`text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Build. Deploy. Scale.</h1>
//         <h2 className={`text-5xl md:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-[#9559f5] to-[#d447ef] bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>With CloudPulse</h2>

//         <p className={`text-lg text-gray-300 max-w-2xl mx-auto mb-12 font-light transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
//           Launch serverless functions anywhere — cloud or on-prem. Simplify DevOps, scale seamlessly, and focus on building amazing experiences.
//         </p>

//         <div>
//           <GlowingEffectDemo />
//         </div>
//         <div>
//           <div className={`inline-flex items-center space-x-3 bg-gray-800/50 border border-purple-500/30 rounded-full px-6 py-2 mb-10 backdrop-blur-md transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             <Sparkles className="w-5 h-5 text-purple-400 animate-spin-slow" />
//             <span className="text-sm text-gray-300 font-medium">Next-gen Serverless Platform</span>
//             <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-300" />
//           </div>
//           <ReviewCards />
//         </div>
//         <div className='flex flex-col  space-y-4'>
//           <p className=''>The road to freedom starts from here</p>
//           <TypewriterEffect


//             words={[
//               { text: 'Build.', className: 'text-purple-400' },
//               { text: 'Deploy.', className: 'text-pink-400' },
//               { text: 'Scale  ', className: 'text-blue-400' },
//             ]}
//           />
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 justify-center">
//             <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
//               Join now
//             </button>
//             <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
//               Signup
//             </button>
//           </div>
//         </div>

//       </main>

//       {/* Footer Overlay */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
//       <Footer />

//     </div>
//   );
// }

{/* Grid Overlay */ }
{/* <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        /> */}




import {
  ChevronDown,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Footer from '../components/footer';
import { TypewriterEffect } from '../components/typerwriter';
import { ReviewCards } from '../components/reviewcards';
import { GlowingEffectDemo } from '../components/feature';
import { Spotlight } from '../components/spotlight';
import { GridBackground } from '../components/gridbackground';
import Process from '../components/process';

export default function Homepage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden font-sans bg-black">

      {/* ✨ Background Effects: Grid + Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Gradient */}
        <div className="absolute top-0 left-0 w-full h-[550px] z-0">
          <GridBackground />
        </div>

        {/* <div
          className="absolute inset-0 transition-all duration-1000 blur-2xl"
          style={{
            background:
              'radial-gradient(circle at 5% 5%, rgba(168,85,247,0.25), transparent 0%), radial-gradient(circle at 70% 80%, rgba(236,72,153,0.15), transparent 0%)',
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.03}px)`,
          }}
        /> */}

      </div>

      {/* 🌐 Navbar */}
      <nav
        className={`relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
      >

        <div className="text-2xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
          CloudPulse
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          <div className="flex items-center space-x-1 hover:text-white cursor-pointer transition group">
            <span>Features</span>
            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
          </div>
          <span className="hover:text-white cursor-pointer transition">Docs</span>
          <span className="hover:text-white cursor-pointer transition">Pricing</span>
          <span className="hover:text-white cursor-pointer transition">Use Cases</span>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-100 transition">
            Start for Free
          </button>
          <button className="border border-gray-600 px-5 py-2 rounded-xl hover:border-gray-400 hover:bg-gray-800 transition text-white">
            Docs
          </button>
        </div>
      </nav>

      {/* 🚀 Hero Section */}

      <main className="relative z-10 text-center px-6 py-24 max-w-6xl mx-auto">

        <Spotlight />

        <div
          className={`inline-flex items-center space-x-3 bg-white/10 border border-purple-500/30 rounded-full px-6 py-2 mb-10 backdrop-blur-md transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <Sparkles className="w-5 h-5 text-purple-300 animate-pulse" />
          <span className="text-sm text-gray-200 font-medium">
            Next-gen Serverless Platform
          </span>
          <ArrowRight className="w-5 h-5 text-purple-400" />
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          Build. Deploy. Scale.
        </h1>
        <h2
          className={`text-5xl md:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-[#9559f5] to-[#d447ef] bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          With CloudPulse
        </h2>

        <p
          className={`text-lg text-gray-300 max-w-2xl mx-auto mb-12 font-light transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          Launch serverless functions anywhere — cloud or on-prem. Simplify DevOps, scale seamlessly, and focus on building amazing experiences.
        </p>

        {/* 🎯 CTA */}
        <div className="flex justify-center space-x-4 mb-12 transition-all duration-1000 delay-200">
          <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="border border-gray-500 text-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
            Contact Sales
          </button>
        </div>

        {/* 🌟 Features/Effects */}
        <div className="py-12">

          <GlowingEffectDemo />

        </div>
        <div className="py-">

          <Process />

        </div>

        {/* ⭐ Reviews */}
        <div className="py-12">
          <ReviewCards />
        </div>

        {/* ⌨️ Typewriter CTA */}
        <div className="mt-24 space-y-6">
          <p className="text-md text-gray-400">The road to freedom starts here</p>
          <TypewriterEffect
            words={[
              { text: 'Build.', className: 'text-purple-400' },
              { text: 'Deploy.', className: 'text-pink-400' },
              { text: 'Scale.', className: 'text-blue-400' },
            ]}
          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 justify-center">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Signup
            </button>
          </div>
        </div>
      </main>

      {/* 🔻 Footer Overlay */}
      <div className=" absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0" />

      {/* 🧾 Footer */}

      <Footer />
    </div>
  );
}
