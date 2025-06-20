'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ScrollText, Microscope, ChartColumn, Rocket, Settings2 } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-stone-500 to-orange-500">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-stone-500/60 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center">
                <Image 
                  src="/favicon.ico"
                  width={25}
                  height={25}
                  className="rounded-lg flex items-center justify-center"
                  alt="Curie logo"
                />
              </div>
              <span className="ml-3 text-xl font-bold text-white">Curie</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="https://www.just-curieous.com/" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="https://github.com/Just-Curieous/Curie" className="text-gray-300 hover:text-white transition-colors">Github</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white py-2">Features</a>
              <a href="#demo" className="block text-gray-300 hover:text-white py-2">Demo</a>
              <a href="https://www.just-curieous.com/" className="block text-gray-300 hover:text-white py-2">Blog</a>
              <a href="https://github.com/Just-Curieous/Curie" className="block text-gray-300 hover:text-white py-2">Github</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Move Scientific Research at the Speed of
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent"> Thought</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto">
              Curie helps answer your curiosity through end-to-end experimentation automation, ensuring that every step—from hypothesis formulation to result interpretation—is conducted with precision, reliability, and reproducibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://github.com/Just-Curieous/Curie">
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center group">
                Github
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              </a>
              <a href="https://www.just-curieous.com/">
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Blog
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Features
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Automated Experimentation",
                description: "From hypothesis formulation and experimental execution to analysis of results."
              },
              {
                icon: <ChartColumn className="w-8 h-8" />,
                title: "Rigor Enhancement",
                description: "Built-in verification modules enforce methodical procedure, agent reliability and reproducibility."
              },
              {
                icon: <Microscope className="w-8 h-8" />,
                title: "Broad Applicability",
                description: "Supports ML Engineering, system analysis, and general scientific discovery."
              },
              {
                icon: <Settings2 className="w-8 h-8" />,
                title: "Highly Customizable",
                description: "Supports integration with custom starter code and arbitrary datasets."
              },
              {
                icon: <ScrollText className="w-8 h-8" />,
                title: "Automatic, Insightful Reporting",
                description: "Experimental processes and outcomes are clearly documented with insightful figures."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-orange-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            See It In Action
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Watch how Curie automates complex experimental workflows and generates a report in just minutes.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-3xl p-2">
              <div className="bg-black rounded-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src={"https://www.youtube.com/embed/Qn_T5mm2OP4"}
                    title="Product Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center">
                <Image 
                  src="/favicon.ico"
                  width={25}
                  height={25}
                  className="rounded-lg flex items-center justify-center"
                  alt="Curie logo"
                />
              </div>
              <span className="ml-3 text-xl font-bold text-white">Curie</span>
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 Just Curieous. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}