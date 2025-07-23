import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1633119747461-79f45df1913c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwc2NyZWVucyUyMGJ1c2luZXNzfGVufDB8fHx8MTc1MzMwODU2MHww&ixlib=rb-4.1.0&q=85"
          alt="Digital Business Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-emerald-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Real Ads. Real Screens.
            <span className="text-emerald-400 block">Real Customers.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            We put your business in front of thousands of locals every month—on actual screens inside the places they already visit.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => scrollToSection('join')}
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Started
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 transition-all duration-300 hover:scale-105"
            >
              How It Works
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">↓</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-8 text-white"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">222+</div>
            <div className="text-sm text-gray-300">Hours of Exposure</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">20+</div>
            <div className="text-sm text-gray-300">Partner Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">1000s</div>
            <div className="text-sm text-gray-300">Local Customers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;