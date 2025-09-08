import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="text-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
        I'm a B.Tech IT student passionate about AI, IoT, and Android Development. 
        I love building smart systems and exploring tech innovations.
      </p>
    </motion.div>
  );
};

export default About;
