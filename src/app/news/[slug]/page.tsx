import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getNewsPost, getAllNewsPosts } from '@/lib/news';
import MDXContent from '@/components/MDXContent';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const posts = getAllNewsPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    notFound();
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
            backgroundImage: post.image 
              ? `url(${post.image})` 
              : 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/75"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 font-semibold transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
            <div className="text-sm text-blue-200 mb-4 font-semibold">
              {formatDate(post.date)}
            </div>
            <h1 className="text-5xl font-bold mb-6 font-serif">{post.title}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {post.image && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 md:p-12">
                <MDXContent content={post.content} />
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All News
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

