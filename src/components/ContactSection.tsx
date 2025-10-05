'use client';

import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const handleContact = () => {
    window.location.href = 'mailto:info@sancarlosbahais.org?subject=Inquiry%20from%20San%20Carlos%20Bah%C3%A1%27%C3%AD%20Website';
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-blue-100">
            We&apos;d love to hear from you! Whether you&apos;re interested in joining an activity, attending a devotional gathering, or simply learning more about our community, please reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Card */}
          <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email Us</h4>
                  <a
                    href="mailto:info@sancarlosbahais.org"
                    className="text-blue-600 hover:text-blue-700 text-lg break-all"
                  >
                    info@sancarlosbahais.org
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    We&apos;ll get back to you as soon as possible
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">
                    San Carlos, California
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Activities take place in various homes and venues throughout the community
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleContact}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Send Email
            </button>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="font-bold text-white mb-3 text-xl">Join Us for a Devotional</h4>
              <p className="text-blue-100 mb-4">
                Devotional gatherings are a wonderful way to experience our community. Contact us to learn about upcoming gatherings or information meetings in San Carlos.
              </p>
              <p className="text-sm text-blue-200 italic">
                &ldquo;So powerful is the light of unity that it can illuminate the whole earth.&rdquo; — Bahá&apos;u&apos;lláh
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="font-bold text-white mb-3 text-xl">What to Expect</h4>
              <p className="text-blue-100">
                Our community welcomes everyone, regardless of background or belief. All activities are free and open to participation. When you reach out, we&apos;ll share information about current activities and help you find the best way to get involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
