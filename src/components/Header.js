import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hey, I'm Ilakkiya 👋";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="text-center mb-8">
      <motion.img
        src="/profile.jpeg"
        alt="Ilakkiya's Photo"
        className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          delay: 0.2 
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      />
      
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <span className="text-primary">{displayText}</span>
        {currentIndex < fullText.length && (
          <motion.span
            className="inline-block w-0.5 h-8 bg-primary ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity,
              repeatDelay: 0.2 
            }}
          />
        )}
      </motion.h1>
    </div>
  );
};

export default Header;
