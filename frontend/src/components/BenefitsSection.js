import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "📺",
      title: "TV Screen Placement in Local Businesses",
      description: "Your ads displayed on premium digital screens in high-traffic local establishments."
    },
    {
      icon: "✍️",
      title: "Professional Ad Design or Redesign", 
      description: "Expert creative team designs stunning ads that capture attention and drive action."
    },
    {
      icon: "🔁",
      title: "Rotating Slide Network with 24+ Local Businesses",
      description: "Maximum exposure through our extensive network of partner locations."
    },
    {
      icon: "💼",
      title: "Hands-Free Setup and Ongoing Management",
      description: "We handle everything - installation, maintenance, and content management."
    },
    {
      icon: "💰",
      title: "Affordable Monthly and Yearly Plans",
      description: "Flexible pricing options that fit any business budget with maximum ROI."
    },
    {
      icon: "🤝",
      title: "Built-In Community Exposure",
      description: "Become part of a thriving local business ecosystem that supports each other."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
            What You Get
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to
            <span className="text-emerald-600 block">Grow Your Business</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-slate-50 rounded-2xl p-8 h-full hover:bg-emerald-50 transition-colors duration-300 border border-transparent hover:border-emerald-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;