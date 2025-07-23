import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      name: "Prime Monthly",
      price: "$79.99",
      period: "/mo",
      yearlyPrice: "$959.88",
      yearlyPeriod: "/yr",
      description: "Perfect for getting started with local advertising",
      features: [
        "Access to advertising slots in all member businesses",
        "Advertisement creation for $20 (if needed)",
        "Advertisement redesign for $20 (anytime)",
        "One-time initiation fee: $15"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Ultimate Yearly",
      price: "$849.99",
      period: "/yr",
      yearlyPrice: "$849.99",
      yearlyPeriod: "/yr",
      description: "Discounted annual rate with premium benefits",
      features: [
        "All Prime Monthly benefits included",
        "No initiation fee (waived)",
        "Featured Business status for 4 months of your choosing",
        "Two additional showings per slide rotation",
        "3 free advertisement redesigns per year"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Platinum+",
      price: "$999.99", 
      period: "/yr",
      yearlyPrice: "$999.99",
      yearlyPeriod: "/yr",
      description: "Our best membership with the most perks",
      features: [
        "Two free 32\" smart TVs included",
        "Business of the Month for 4 months of your choosing",
        "Two additional showings per slide rotation",
        "Free advertisement creation to your liking",
        "4 free advertisement redesigns per year",
        "Free TV mounting service",
        "No initiation fee (waived)"
      ],
      popular: false,
      cta: "Best Value",
      badge: "BEST VALUE"
    }
  ];

  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
            Membership Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose Your
            <span className="text-emerald-600 block">Perfect Plan</span>
          </h2>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${!isYearly ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-slate-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isYearly ? 'transform translate-x-8 bg-emerald-600' : ''
              }`}></div>
            </button>
            <span className={`text-lg ${isYearly ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>
              Yearly
            </span>
            <span className="text-emerald-600 text-sm font-semibold bg-emerald-100 px-2 py-1 rounded">
              Save up to 15%
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl p-8 shadow-lg h-full transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-emerald-500 transform scale-105' 
                  : 'hover:shadow-xl hover:scale-105'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">
                      {isYearly ? plan.yearlyPrice : plan.price}
                    </span>
                    <span className="text-slate-600">
                      {isYearly ? plan.yearlyPeriod : plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-emerald-500 mr-3 mt-1">✓</span>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={scrollToJoin}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compare Plans Button */}
        <div className="text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors"
          >
            {showComparison ? 'Hide' : 'Compare'} Plans
            <span className="ml-2">{showComparison ? '↑' : '↓'}</span>
          </button>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Detailed Plan Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 text-slate-600">Features</th>
                      <th className="text-center py-4 text-slate-900 font-bold">Prime</th>
                      <th className="text-center py-4 text-emerald-600 font-bold">Ultimate</th>
                      <th className="text-center py-4 text-slate-900 font-bold">Platinum+</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-slate-600">Ad Creation/Design</td>
                      <td className="text-center py-3">$20 fee</td>
                      <td className="text-center py-3 text-emerald-600">✓ Free</td>
                      <td className="text-center py-3 text-emerald-600">✓ Free</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-slate-600">Featured Placement</td>
                      <td className="text-center py-3">—</td>
                      <td className="text-center py-3 text-emerald-600">4x/year</td>
                      <td className="text-center py-3 text-emerald-600">Priority</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-slate-600">Display Time</td>
                      <td className="text-center py-3">Standard</td>
                      <td className="text-center py-3 text-emerald-600">2x Standard</td>
                      <td className="text-center py-3 text-emerald-600">2x Standard</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-slate-600">TV Installations</td>
                      <td className="text-center py-3">—</td>
                      <td className="text-center py-3">—</td>
                      <td className="text-center py-3 text-emerald-600">2 TVs</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-slate-600">Account Manager</td>
                      <td className="text-center py-3">—</td>
                      <td className="text-center py-3">—</td>
                      <td className="text-center py-3 text-emerald-600">✓ Dedicated</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;