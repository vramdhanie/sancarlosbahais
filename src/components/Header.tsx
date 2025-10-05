'use client';

import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/75"></div>
      </div>
       {/* Logo */}
       <div className="absolute top-2 left-4 md:left-8 flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Baha'i Symbol" 
            width={48}
            height={48}
            className="h-12 w-12 filter brightness-0 invert"
            priority
          />
          <div className="text-white">
            <div className="text-2xl md:text-3xl font-bold leading-tight font-serif">
              Bahá&apos;ís
            </div>
            <div className="text-lg md:text-xl font-medium leading-tight font-serif">
              of San Carlos
            </div>
          </div>
        </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-serif">
            Building Community in San Carlos
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-sans">
            Join us in creating a more unified, loving neighborhood through service, study, and spiritual growth
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition inline-flex items-center gap-2 text-lg shadow-lg"
            >
              Get Involved
            </a>
            <a
              href="#activities"
              className="bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition border-2 border-white inline-flex items-center gap-2 text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
}
