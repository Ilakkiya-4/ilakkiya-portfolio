import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Inhaler Assistant",
      description: "ESP32 based health alert system that monitors inhaler usage and provides AI-powered health insights",
      tech: ["ESP32", "AI", "Health Tech"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "SkillSet CV",
      description: "Android resume builder app that helps users create professional resumes with modern templates",
      tech: ["Android Studio", "Firebase", "Java"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Travel Blog with Maps",
      description: "Interactive tourism website featuring dynamic maps and travel experiences",
      tech: ["Web Development", "Maps API", "JavaScript"],
      color: "from-purple-500 to-purple-600"
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
        📁 My Projects
      </motion.h3>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-xl font-bold text-gray-800">{project.title}</h4>
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.3 + (index * 0.1) + (techIndex * 0.05),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "#e6f0ff" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
