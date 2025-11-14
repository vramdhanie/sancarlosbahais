import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none 
      text-gray-900 
      [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-4 [&_h1]:font-serif
      [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:font-serif
      [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-serif
      [&_p]:text-gray-900 [&_p]:text-lg
      [&_li]:text-gray-900 [&_li]:text-lg
      [&_strong]:text-gray-900 [&_strong]:font-semibold
      [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mt-4
      [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mt-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

