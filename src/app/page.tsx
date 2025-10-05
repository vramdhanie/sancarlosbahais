import React from 'react';
import {
  Header,
  WelcomeSection,
  ActivitiesSection,
  AboutSection,
  ContactSection,
  Footer
} from '@/components';

export default function BahaiSanCarlos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WelcomeSection />
      <ActivitiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}