import React from 'react';

export default function WelcomeSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
              Welcome to Our Community
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-sans">
              In neighborhoods across San Carlos, Bahá&apos;ís and friends from all backgrounds are engaged in a community-building process that cultivates love and translates it into action.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              We&apos;re committed to fostering unity, nurturing the potential in every person, and contributing to the betterment of our shared home. Whether you&apos;re seeking spiritual connection, meaningful service, or simply a welcoming community, we invite you to join us.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/study_circle_3.jpg"
                alt="Diverse community gathering"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="font-semibold text-lg font-serif italic">
                &ldquo;The earth is but one country, and mankind its citizens.&rdquo;
              </p>
              <p className="text-sm text-amber-100 mt-2 font-sans">— Bahá&apos;u&apos;lláh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
