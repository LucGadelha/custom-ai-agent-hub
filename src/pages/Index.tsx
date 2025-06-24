
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AgentsSection from '@/components/AgentsSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Header onDemoClick={() => navigate('/demo')} />
      <Hero onDemoClick={() => navigate('/demo')} />
      <AgentsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
