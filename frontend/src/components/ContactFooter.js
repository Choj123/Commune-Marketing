import React from 'react';
import { motion } from 'framer-motion';

const ContactFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Pre-footer CTA */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business Visibility?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the growing network of local businesses that are thriving with Community Advertising Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('join')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </button>
              <a 
                href="tel:(561) 501-0701"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Call (561) 501-0701
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <div className="text-white font-bold text-xl">COMMUNE</div>
                  <div className="text-sm font-normal tracking-wider text-slate-400">
                    MARKETING
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                A locally rooted, professionally run marketing network built to grow small businesses through real visibility in the community.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-400">📧</span>
                  <a 
                    href="mailto:CommunityAdvertising@gmail.com"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    CommunityAdvertising@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-400">📞</span>
                  <a 
                    href="tel:(561) 501-0701"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    (561) 501-0701
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('join')}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Join Network
                  </button>
                </li>
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
              <div className="space-y-2 mb-6">
                <div className="text-slate-300">Instagram - Coming Soon</div>
                <div className="text-slate-300">Facebook - Coming Soon</div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Community Advertising Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">Powered by</span>
              <a 
                href="https://emergent.sh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-semibold"
              >
                Emergent AI
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default ContactFooter;