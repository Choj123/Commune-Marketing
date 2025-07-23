import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Join the Network",
      description: "Subscribe to a plan and become part of a curated group of local businesses.",
      icon: "🤝"
    },
    {
      number: "02", 
      title: "We Create + Display Your Ad",
      description: "We design or update your ad and place it on screens in 20+ other businesses nearby.",
      icon: "🎨"
    },
    {
      number: "03",
      title: "Get Seen All Month",
      description: "You get an estimated 222+ hours of exposure across the network—every month.",
      icon: "📈"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Three Easy Steps to
            <span className="text-emerald-600 block">Maximum Exposure</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined process gets your business visible across the local network in no time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-emerald-600 font-bold text-sm mb-2">STEP {step.number}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-300 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;