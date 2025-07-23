import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmt8ZW58MHx8fHwxNzUzMzA4NTY2fDA&ixlib=rb-4.1.0&q=85"
                alt="Community Business Network"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
              About Community Advertising Group
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Locally Rooted,
              <span className="text-emerald-600 block">Professionally Run</span>
            </h2>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Welcome to the Community Advertising Group—a locally rooted, professionally run marketing network built to grow small businesses through real visibility.
              </p>
              <p>
                We install and manage digital screens across the top-rated local businesses in your area, creating a loop of exposure where your ad is displayed—live and repeatedly—inside the places your customers already go.
              </p>
              <p className="font-semibold text-slate-800">
                This isn't just advertising. It's mutual growth, exposure where it counts, and a network built to move the entire community forward.
              </p>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Local Focus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600">Visibility</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">0</div>
                <div className="text-sm text-slate-600">Setup Hassle</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;