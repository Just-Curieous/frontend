'use client'

import React from 'react';

interface Logo {
  id: string;
  src: string;
  alt: string;
  name?: string;
}

interface LogoGridProps {
  logos?: Logo[];
  columns?: number;
  gap?: string;
  showNames?: boolean;
}

const LogoGrid: React.FC<LogoGridProps> = ({
  logos = [],
  columns = 3,
  gap = '2rem',
  showNames = false
}) => {
  // Default logos for demonstration
  const defaultLogos: Logo[] = [
    {
      id: '1',
      src: './logos/Umich-white-logo.png',
      alt: 'University of Michigan',
      name: 'University of Michigan'
    },
    {
      id: '2',
      src: './logos/logo-ucberkeley-white.png',
      alt: 'UC Berkeley',
      name: 'UC Berkeley'
    },
    {
      id: '3',
      src: './logos/Rice_Logo_White.png',
      alt: 'Rice University',
      name: 'Rice University'
    },
    {
      id: '4',
      src: './logos/cisco-white-logo.png',
      alt: 'Cisco Systems',
      name: 'Cisco Systems'
    },
    {
      id: '5',
      src: './logos/unc-logo.png',
      alt: 'UNC',
      name: 'UNC'
    },
    {
      id: '6',
      src: './logos/meta-white-logo.png',
      alt: 'Meta',
      name: 'Meta'
    },
    {
      id: '7',
      src: './logos/UPenn.png',
      alt: 'UPenn',
      name: 'UPenn'
    }
  ];

  const displayLogos = logos.length > 0 ? logos : defaultLogos;


  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  const gapClasses = {
    '0.5rem': 'gap-2',
    '1rem': 'gap-4',
    '1.5rem': 'gap-6',
    '2rem': 'gap-8',
    '2.5rem': 'gap-10',
    '3rem': 'gap-12'
  };

  const gridClass = gridCols[columns as keyof typeof gridCols] || 'grid-cols-3';
  const gapClass = gapClasses[gap as keyof typeof gapClasses] || 'gap-6';

  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-8">
          Trusted By
        </h2>
        
        <div className={`grid ${gridClass} ${gapClass} p-6 max-w-6xl mx-auto md:grid-cols-3 sm:grid-cols-2`}>
          {displayLogos.map((logo, index) => {
          const isLast = index === displayLogos.length - 1;
          const isOddLastRow =
            displayLogos.length % columns === 1 && isLast;

          return (
            <React.Fragment key={logo.id}>
              {isOddLastRow && (
                <div className={`col-span-${Math.floor(columns / 2)}`} />
              )}

              <div className="flex flex-col items-center rounded-lg">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`w-full h-15 object-contain ${
                    showNames ? 'mb-2' : ''
                  }`}
                  loading="lazy"
                />
                {showNames && logo.name && (
                  <span className="text-sm font-medium text-gray-700 text-center mt-2">
                    {logo.name}
                  </span>
                )}
              </div>
            </React.Fragment>
            );
            })}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;