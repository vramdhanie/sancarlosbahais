import React from 'react';
import { Heart, Users, BookOpen, Sparkles, ExternalLink } from 'lucide-react';

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Core Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four complementary activities form the heart of our community-building efforts, open to all who wish to participate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Children's Classes */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2086"
                alt="Children learning together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Children&apos;s Classes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Classes for children ages 5-10 that nurture their spiritual qualities, including love, kindness, truthfulness, and generosity. Through stories, songs, prayers, and creative activities, children explore their capacity to contribute to the world around them.
              </p>
              <a href="https://www.bahai.org/action/family-life-children/childrens-classes" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-semibold hover:text-pink-700 inline-flex items-center gap-1">
                Learn more <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Junior Youth Groups */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032"
                alt="Youth engaged in activities"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Junior Youth Spiritual Empowerment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A program for ages 11-14 that helps young people navigate a crucial stage of life. Through interactive texts, service projects, arts, and discussions, junior youth explore their purpose and discover how they can be agents of positive change.
              </p>
              <a href="https://www.bahai.org/action/youth" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-1">
                Learn more <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Study Circles */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049"
                alt="People studying together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Study Circles</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Small gatherings where participants study Bahá&apos;í writings together and reflect on how to apply spiritual principles to daily life and community service. These circles foster deep conversations, mutual support, and collective learning.
              </p>
              <a href="https://www.bahai.org/action/response-call-bahaullah/training-institute" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Learn more <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Devotional Gatherings */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070"
                alt="Community gathering for prayer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Devotional Gatherings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcoming spaces where people of all backgrounds come together to share prayers, meditations, and sacred writings from various traditions. These gatherings create an atmosphere of peace and reflection, strengthening bonds of friendship.
              </p>
              <a href="https://www.bahai.org/action/devotional-life/devotional-meetings" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center gap-1">
                Learn more <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 italic">
            These activities work together as a unified pattern of community life. Each reinforces the others, creating an environment where people of all ages can develop their spiritual capacities and work together for the betterment of society.
          </p>
        </div>
      </div>
    </section>
  );
}
