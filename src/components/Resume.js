import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      className="text-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <motion.a
        href="/Ilakkiya_resume.pdf"
        download="Ilakkiya_Resume.pdf"
        className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-dark transition-all duration-300 group"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(77, 166, 255, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.span
          className="mr-2 text-xl"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          📄
        </motion.span>
        Download My Resume
        <motion.svg
          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </motion.svg>
      </motion.a>
    </motion.div>
  );
};

export default Resume;
