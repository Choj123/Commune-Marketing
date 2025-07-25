import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import HowItWorksSection from './HowItWorksSection';
import BenefitsSection from './BenefitsSection';
import PricingSection from './PricingSection';
import JoinCTASection from './JoinCTASection';
import ContactFooter from './ContactFooter';
import Navigation from './Navigation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <JoinCTASection />
      <ContactFooter />
    </div>
  );
};

export default HomePage;