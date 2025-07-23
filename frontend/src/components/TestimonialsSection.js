import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Since joining, we've had consistent walk-ins who found us just by seeing our ad across town. The exposure has been incredible!",
      author: "Sarah Martinez",
      business: "Local Café Owner",
      image: "https://images.unsplash.com/photo-1610896011699-bf6f466b024e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxsb2NhbCUyMGJ1c2luZXNzJTIwb3duZXJzfGVufDB8fHx8MTc1MzMwOTk3OXww&ixlib=rb-4.1.0&q=85",
      rating: 5
    },
    {
      quote: "The Community Advertising Group transformed our visibility. We're reaching customers we never could have reached before.",
      author: "Mike Thompson",
      business: "Barbershop Owner",
      image: "https://images.unsplash.com/photo-1610896011699-bf6f466b024e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxsb2NhbCUyMGJ1c2luZXNzJTIwb3duZXJzfGVufDB8fHx8MTc1MzMwOTk3OXww&ixlib=rb-4.1.0&q=85",
      rating: 5
    },
    {
      quote: "Professional service, amazing results. Our business has grown significantly since we started with them.",
      author: "Lisa Chen",
      business: "Boutique Owner",
      image: "https://images.unsplash.com/photo-1610896011699-bf6f466b024e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxsb2NhbCUyMGJ1c2luZXNzJTIwb3duZXJzfGVufDB8fHx8MTc1MzMwOTk3OXww&ixlib=rb-4.1.0&q=85",
      rating: 5
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
            Real Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Partners
            <span className="text-emerald-600 block">Are Saying</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-600 text-sm">{testimonial.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;