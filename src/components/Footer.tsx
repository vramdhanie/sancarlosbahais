import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-gray-300 mb-6 text-lg">
          The Bahá&apos;í Community of San Carlos, California
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="https://www.bahai.us" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            Bahá&apos;ís of the United States
          </a>
          <a href="https://www.bahai.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            International Bahá&apos;í Website
          </a>
          <a href="https://www.bahai.us/beliefs/building-community/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            Building Community
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Bahá&apos;ís of San Carlos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
