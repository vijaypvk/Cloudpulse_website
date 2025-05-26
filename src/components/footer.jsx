// import { FaArrowLeft } from 'react-icons/fa';
// import { TextHoverEffect } from './title';

// const Footer = () => {
//   return (
//     <footer className="  text-white pt-16 pb-6 px-8 border-t border-gray-800"
//       style={{
//     background: 'radial-gradient(circle at top center, rgb(24, 24, 24), transparent 50%)',
//   }}>

//       <div className="absolute top-0 left-0 w-full h-1">
//         <div className="w-full h-full bg-blue-500 blur-md opacity-40"></div>
//       </div>
//       <div className="max-w-7xl mx-auto">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-800 pb-10">
//           {/* Logo & Tagline */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <div className="bg-white p-2 rounded-md text-black">
//                 <FaArrowLeft />
//               </div>
//               <span className="text-sm text-gray-400">Manage your cloud  with ease.</span>
//             </div>
//             <p className="text-sm">
//               Made by <span className="font-semibold">Vijay</span>
//             </p>
//           </div>

//           {/* Footer Columns */}
//           <div>
//             <h4 className="font-semibold mb-4">Product</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               {['Features', 'Pricing', 'Testimonials', 'Integration'].map(item => (
//                 <li key={item} className="hover:text-white transition duration-200 cursor-pointer">{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Integrations</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map(item => (
//                 <li key={item} className="hover:text-white transition duration-200 cursor-pointer">{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Resources</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               {['Blog', 'Support'].map(item => (
//                 <li key={item} className="hover:text-white transition duration-200 cursor-pointer">{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Company</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               {['About Us', 'Privacy Policy', 'Terms & Conditions'].map(item => (
//                 <li key={item} className="hover:text-white transition duration-200 cursor-pointer">{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Text Hover Effect - Branding */}
//         <div className="flex justify-center pt-6">
//           <TextHoverEffect text="PULSE" />
//         </div>

//         {/* Bottom Section */}
//         <div className="text-sm text-gray-500 pt-6 text-center">
//           © 2025 CLOUDPULSE INC. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { FaArrowLeft } from 'react-icons/fa';
import { TextHoverEffect } from './title';

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-16 pb-6 px-8 border-t border-gray-800"
      style={{
        background: 'radial-gradient(circle at top center, rgb(24, 24, 24), transparent 40%)',
      }}
    >
      {/* Pill-shaped bar at top center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-1.5 rounded-full bg-white opacity-90 shadow-md" />

      {/* Optional background blur glow */}
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="w-full h-full bg-blue-500 blur-md opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-800 pb-10">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-md text-black">
                <FaArrowLeft />
              </div>
              <span className="text-sm text-gray-400">Manage your cloud with ease.</span>
            </div>
            <p className="text-sm">
              Made by <span className="font-semibold">Vijay</span>
            </p>
          </div>

          {/* Footer Columns */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Features', 'Pricing', 'Testimonials', 'Integration'].map(item => (
                <li key={item} className="hover:text-white transition duration-200 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Integrations</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map(item => (
                <li key={item} className="hover:text-white transition duration-200 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Blog', 'Support'].map(item => (
                <li key={item} className="hover:text-white transition duration-200 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['About Us', 'Privacy Policy', 'Terms & Conditions'].map(item => (
                <li key={item} className="hover:text-white transition duration-200 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Text Hover Effect - Branding */}
        <div className="flex justify-center pt-6">
          <TextHoverEffect text="PULSE" />
        </div>

        {/* Bottom Section */}
        <div className="text-sm text-gray-500 pt-6 text-center">
          © 2025 CLOUDPULSE INC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
