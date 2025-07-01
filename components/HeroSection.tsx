'use client'

import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of Scientific Research is
            <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent"> Automated</span>
          </h1>
          <p className="text-xl md:text-xl text-gray-300 mb-8 max-w-5xl mx-auto">
            Curie Research Platform helps answer your curiosity through end-to-end experimental automation, ensuring that every step—from hypothesis formulation to result interpretation—is conducted with precision, reliability, and reproducibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://github.com/Just-Curieous">
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center group">
                Github
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}