import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="text-slate-800 font-bold text-xl">
              COMMUNE
              <div className="text-sm font-normal tracking-wider text-slate-600">
                MARKETING
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('join')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;