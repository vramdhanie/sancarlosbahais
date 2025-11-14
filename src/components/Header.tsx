'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

      {/* Fixed Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Baha'i Symbol" 
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <div className="text-xl font-bold leading-tight font-serif text-gray-900">
                  Bahá&apos;ís
                </div>
                <div className="text-sm font-medium leading-tight font-serif text-gray-700">
                  of San Carlos
                </div>
              </div>
            </Link>
            <ul className="flex gap-6 text-gray-700 font-semibold">
              <li>
                <a href="#activities" className="hover:text-blue-700 transition">
                  Activities
                </a>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-700 transition">
                  News
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-700 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 relative z-10 mt-16 pb-8">
        
        <div className="grid md:grid-cols-2 gap-8 items-start w-full">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight font-serif">
              Building Community in San Carlos
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed font-sans">
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

          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-sm">
              <p className="text-lg md:text-xl text-white italic leading-relaxed font-serif mb-3">
                &quot;The betterment of the world can be accomplished through pure and goodly deeds, through commendable and seemly conduct.&quot;
              </p>
              <p className="text-sm text-blue-200 font-semibold">
                — Bahá&apos;u&apos;lláh
              </p>
            </div>
          </div>

          {/* Mobile: Show quote below heading */}
          <div className="md:hidden mt-4 sm:mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/20 mx-auto max-w-full">
              <p className="text-sm sm:text-base text-white italic leading-relaxed font-serif mb-2 sm:mb-3">
                &quot;The betterment of the world can be accomplished through pure and goodly deeds, through commendable and seemly conduct.&quot;
              </p>
              <p className="text-xs text-blue-200 font-semibold">
                — Bahá&apos;u&apos;lláh
              </p>
            </div>
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
