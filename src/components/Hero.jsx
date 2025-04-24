// component/Hero.jsx
// Description: This component serves as the hero section of the application, showcasing the user's name, title, and social links with animations and icons.
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Linkedin, Gitlab, Github, Mail } from 'lucide-react'; 
import profileImage from '../assets/dev.jpg'; 

const Hero = () => {
  const titles = [
    "Cloud & DevOps Engineer",
    "Kubernetes Enthusiast",
    "Automation Specialist",
    "Infrastructure as Code Expert"
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);

  // Timer to cycle through titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000); // Change title every 4 seconds (adjust timing as needed)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [titles.length]); // Rerun effect if the number of titles changes

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <header className="bg-white text-white py-16 text-center overflow-hidden dark:bg-gray-900"> 
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center relative z-10">
         {/* Profile Image */}
         <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className="w-40 h-40 rounded-full border-4 border-primary mb-5 overflow-hidden shadow-lg" 
         >
            <img
              src={profileImage}
              alt="Marvin Wandati Kinyanjui - DevOps Engineer"
              className="w-full h-full object-cover"
              width="160"
              height="160"
            />
         </motion.div>

          {/* Name */}
          <motion.h2
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white" 
          >
            Marvin Wandati Kinyanjui
          </motion.h2>

          {/* Animated Titles with Framer Motion */}
          <div className="h-12 my-4 flex items-center justify-center"> 
            <AnimatePresence mode="wait"> {/* Ensures one text exits before the next enters */}
              <motion.p
                key={titleIndex} 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }} 
                className="text-xl md:text-2xl text-blue-400 " 
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Social Links with Lucide Icons */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
            
             className="flex flex-wrap gap-5 mt-5 justify-center"
          >
            {/* LinkedIn: Dark default, Blue on hover */}
            <a
              href="https://www.linkedin.com/in/marvin-wandati/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 rounded" 
              aria-label="Connect with Marvin Wandati on LinkedIn (opens in new tab)"
            >
              <Linkedin size={28} /> 
            </a>
            {/* GitLab: Dark default, Orange on hover */}
            <a
              href="https://gitlab.com/wandat2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 rounded" 
              aria-label="View Marvin Wandati's GitLab Profile (opens in new tab)"
            >
              <Gitlab size={28} /> 
            </a>
            {/* GitHub: Dark default, Lighter Gray/White on hover */}
            <a
              href="https://github.com/Wandati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 rounded" 
              aria-label="View Marvin Wandati's GitHub Profile (opens in new tab)"
            >
              <Github size={28} /> 
            </a>
            {/* Mail: Dark default, Green on hover */}
            <a
              href="mailto:wandatimarvin23@gmail.com"
              className="text-gray-500 hover:text-green-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 rounded"
              aria-label="Contact Marvin Wandati via Email"
            >
              <Mail size={28} /> 
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;