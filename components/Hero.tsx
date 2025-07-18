// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';
// import { heroContent } from '@/app/data/content'; // Adjust path if needed

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const scrollToNext = () => {
//     const nextSection = document.getElementById('about');
//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       id="home"
//       aria-label="Hero section"
//       className="relative min-h-screen bg-gray-50 overflow-hidden"
//     >
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-amber-50 opacity-60 pointer-events-none"></div>

//       {/* Decorative SVG Curve */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg
//           viewBox="0 0 1440 120"
//           className="w-full h-auto text-white"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"
//             fill="currentColor"
//             opacity="0.1"
//           />
//         </svg>
//       </div>

//       {/* Main Container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-32">
          
//           {/* Left Column */}
//           <div
//             className={`w-full lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//             }`}
//           >
//             {/* Badge */}
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               {heroContent.badge}
//             </div>

//             {/* Headline */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
//                 {heroContent.title}
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
//               {heroContent.subtitle}
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <a
//                 href={heroContent.ctaPrimary.href}
//                 className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
//                 aria-label="Primary CTA"
//               >
//                 {heroContent.ctaPrimary.label}
//                 <svg
//                   className="w-5 h-5 ml-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//               </a>

//               <a
//                 href={heroContent.ctaSecondary.href}
//                 className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300"
//                 aria-label="Secondary CTA"
//               >
//                 {heroContent.ctaSecondary.label}
//                 <svg
//                   className="w-5 h-5 ml-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Right Column - Hero Image */}
//           <div
//             className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//             }`}
//           >
//             <div className="relative">
//               {/* Decorative background blobs */}
//               <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse delay-1000"></div>

//               <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
//                 <Image
//                   src={heroContent.image.src}
//                   alt={heroContent.image.alt}
//                   width={600}
//                   height={500}
//                   className="w-full h-auto rounded-xl object-cover"
//                   priority
//                   placeholder="empty"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Down Button */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//           <button
//             onClick={scrollToNext}
//             className="flex flex-col items-center text-gray-600 hover:text-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg p-2"
//             aria-label="Scroll to next section"
//           >
//             <span className="text-sm font-medium mb-2">Scroll Down</span>
//             <div className="animate-bounce">
//               <ChevronDown className="w-6 h-6" />
//             </div>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { heroContent } from "@/app/data/content";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen w-full bg-gray-100 overflow-hidden"
    >
      {/* Hero Background Image */}
      <Image
        src={heroContent.image.src}
        alt={heroContent.image.alt}
        fill
        priority
        placeholder="empty"
        className="absolute inset-0 object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 to-amber-600/30 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-6 lg:px-12 min-h-screen">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/80 text-blue-700 text-sm font-medium shadow-md backdrop-blur">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {heroContent.badge}
        </div>

        {/* Title */}
        <h1
          className={`text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {heroContent.title}
        </h1>

        {/* Subtitle */}
        <p
          className={`text-white/90 text-lg sm:text-xl mb-8 max-w-2xl transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {heroContent.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={heroContent.ctaPrimary.href}
            className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {heroContent.ctaPrimary.label}
          </a>
          <a
            href={heroContent.ctaSecondary.href}
            className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {heroContent.ctaSecondary.label}
          </a>
        </div>

        {/* Scroll Down Icon */}
        <button
          onClick={scrollToNext}
          className="mt-16 text-white/80 hover:text-white transition duration-300 flex flex-col items-center focus:outline-none"
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
