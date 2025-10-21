import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-8">
              <img 
                src="/images/ridvan.jpg"
                alt="Unity in diversity"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About the Bahá&apos;í Faith
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Bahá&apos;í Faith is a world religion founded by Bahá&apos;u&apos;lláh in 19th-century Persia. Central to Bahá&apos;í belief is the conviction that humanity is one family and that the time has come for its unification into a peaceful global society.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">Oneness of Humanity</p>
                  <p className="text-gray-700">All people are part of one human family, regardless of background, nationality, or religion</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-purple-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">Equality of Women and Men</p>
                  <p className="text-gray-700">Full equality in all aspects of life is essential for human progress</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-green-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">Elimination of Prejudice</p>
                  <p className="text-gray-700">All forms of prejudice must be overcome for society to advance</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-amber-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">Harmony of Science and Religion</p>
                  <p className="text-gray-700">Both are essential sources of knowledge and must work together</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-pink-50 p-4 rounded-lg">
                <div className="w-3 h-3 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">Universal Education</p>
                  <p className="text-gray-700">Every person has the right to education and the development of their potential</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bahá&apos;ís see themselves as part of a global learning community, working alongside all people of goodwill to contribute to the transformation of society.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.bahai.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1"
              >
                National Bahá&apos;í Website <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.bahai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1"
              >
                International Bahá&apos;í Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
