import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Java"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Embedded Systems",
      skills: ["ESP32", "Arduino"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Mobile Development",
      skills: ["Android Studio", "Firebase"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Tools & Design",
      skills: ["Git", "Figma", "Canva"],
      color: "bg-orange-100 text-orange-800"
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
        ✨ My Skills
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-white rounded-lg p-4 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <h4 className="font-semibold text-gray-700 mb-3">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.3 + (index * 0.1) + (skillIndex * 0.05),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
