import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <Header />
          <About />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {[
              { id: 'skills', title: '✨ Skills', emoji: '✨' },
              { id: 'projects', title: '📁 Projects', emoji: '📁' },
              { id: 'contact', title: '📫 Contact', emoji: '📫' }
            ].map((section) => (
              <motion.div
                key={section.id}
                className="bg-blue-50 rounded-xl p-6 cursor-pointer card-hover border-2 border-transparent hover:border-primary"
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (['skills', 'projects', 'contact'].indexOf(section.id) * 0.1) }}
              >
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  {section.title}
                </h2>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeSection && (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <motion.div
                  className="bg-gray-50 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {sections[activeSection]}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <Resume />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
