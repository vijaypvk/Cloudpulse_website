import { ChevronDown } from 'lucide-react';

const Header = () => {
    return (
        <div>
            <div className="text-2xl font-extrabold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">CloudPulse</div>
                    <div className="hidden md:flex items-center space-x-8 text-sm text-gray-400">
          <div className="flex items-center space-x-1 hover:text-white cursor-pointer transition-all duration-300">
            <span>Features</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </div>
          <span className="hover:text-white cursor-pointer transition">Docs</span>
          <span className="hover:text-white cursor-pointer transition">Pricing</span>
          <span className="hover:text-white cursor-pointer transition">Use Cases</span>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300">Start for Free</button>
          <button className="border border-gray-600 px-6 py-2 rounded-xl hover:border-gray-500 hover:bg-gray-800 transition-all duration-300">Docs</button>
        </div>
        </div>
    );
};
export default Header;