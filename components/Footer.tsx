import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return(
        <footer className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link href="/">
                    <div className="flex items-center mb-6 md:mb-0">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center">
                        <Image 
                          src="./curie.png"
                          width={25}
                          height={25}
                          className="rounded-lg flex items-center justify-center"
                          alt="Curie logo"
                        />
                      </div>
                      <span className="ml-3 text-xl font-bold text-white">Curie</span>
                    </div>
                    </Link>
                    <div className="mt-4 flex space-x-4 text-center text-white pb-4">
                      <p>&copy; 2025 Curie Research Platform.</p> 
                      <p>All rights reserved.</p>
                      <p>829 University Ave, Palo Alto, CA 94301</p>
                    </div>
                    <div className="flex space-x-8 text-white">
                      <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                  </div>
                  
                </div>
        </footer>
    );
}