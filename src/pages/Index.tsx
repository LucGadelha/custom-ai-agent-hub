
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AgentsSection from '@/components/AgentsSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <AgentsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
