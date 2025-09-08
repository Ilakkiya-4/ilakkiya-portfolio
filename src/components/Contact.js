import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      platform: "Email",
      value: "ilakkiyajothi040804@gmail.com",
      link: "mailto:ilakkiyajothi040804@gmail.com",
      icon: "📧",
      color: "bg-red-100 text-red-800"
    },
    {
      platform: "GitHub",
      value: "github.com/Ilakkiya-4",
      link: "https://github.com/Ilakkiya-4",
      icon: "🐙",
      color: "bg-gray-100 text-gray-800"
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/ilakkiya-jothi-v-p-488a90333",
      link: "https://www.linkedin.com/in/ilakkiya-jothi-v-p-488a90333/",
      icon: "💼",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <div>
      <motion.h3 
        className="text-2xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        📫 Contact Me
      </motion.h3>
      
      <div className="space-y-4">
        {contactInfo.map((contact, index) => (
          <motion.a
            key={contact.platform}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div 
                className="text-2xl"
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                {contact.icon}
              </motion.div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {contact.platform}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {contact.value}
                </p>
              </div>
              
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
      
      <motion.div 
        className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-blue-100 rounded-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-center text-gray-700 font-medium">
          Let's connect and build something amazing together! 🚀
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
