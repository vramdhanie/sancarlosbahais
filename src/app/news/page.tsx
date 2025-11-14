import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllNewsPosts } from '@/lib/news';
import Footer from '@/components/Footer';

export default function NewsPage() {
  const posts = getAllNewsPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
                <Link href="/#activities" className="hover:text-blue-700 transition">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-blue-700 font-bold">
                  News
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-700 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative text-white py-20 overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/75"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 font-serif">Community News</h1>
            <p className="text-xl text-blue-100 font-sans">
              Stay updated on our latest activities and events
            </p>
          </div>
        </div>
      </header>

      {/* News List */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 font-sans">
                  No news articles yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {post.image && (
                      <Link href={`/news/${post.slug}`}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 object-cover"
                        />
                      </Link>
                    )}
                    <div className="p-8">
                      <div className="text-sm text-blue-600 font-semibold mb-3">
                        {formatDate(post.date)}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                        <Link
                          href={`/news/${post.slug}`}
                          className="hover:text-blue-700 transition"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-600 mb-6 text-lg font-sans">
                          {post.excerpt}
                        </p>
                      )}
                      <Link
                        href={`/news/${post.slug}`}
                        className="inline-block text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center gap-2 transition"
                      >
                        Read Full Article
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
