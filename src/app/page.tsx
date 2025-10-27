import React from 'react';
import {
  Header,
  WelcomeSection,
  ActivitiesSection,
  AboutSection,
  ContactSection,
  Footer,
  RecentNews
} from '@/components';
import { getRecentNewsPosts } from '@/lib/news';

export default function BahaiSanCarlos() {
  const recentPosts = getRecentNewsPosts(3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WelcomeSection />
      <ActivitiesSection />
      <AboutSection />
      <RecentNews posts={recentPosts} />
      <ContactSection />
      <Footer />
    </div>
  );
}