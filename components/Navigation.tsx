'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-stone-500/60 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href='/'>
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center">
              <Image 
                src="./curie.png"
                width={23}
                height={23}
                className="rounded-lg flex items-center justify-center"
                alt="Curie logo"
              />
            </div>
            <span className="ml-3 text-xl font-bold text-white">Curie</span>
          </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <a href="https://github.com/Just-Curieous" className="text-gray-300 hover:text-white transition-colors">Github</a>
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
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <a href="https://github.com/Just-Curieous" className="block text-gray-300 hover:text-white py-2">Github</a>
          </div>
        </div>
      )}
    </nav>
  );
}