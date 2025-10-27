import React from 'react';
import Link from 'next/link';
import { NewsPost } from '@/lib/news';

interface RecentNewsProps {
  posts: NewsPost[];
}

export default function RecentNews({ posts }: RecentNewsProps) {
  if (posts.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3 font-serif">
                Community News
              </h2>
              <p className="text-xl text-gray-600 font-sans">
                Stay updated on our latest activities and events
              </p>
            </div>
            <Link
              href="/news"
              className="text-blue-700 hover:text-blue-800 font-semibold flex items-center gap-2 transition"
            >
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {formatDate(post.date)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3 font-sans">
                      {post.excerpt}
                    </p>
                  )}
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center gap-2 transition"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

