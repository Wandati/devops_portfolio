// Filename: Hero.jsx
// components/Footer.jsx
import React from 'react';

const Footer = () => {
    // Content matches the GitHub README
    const quote = `"Automate everything. Deploy anywhere. Optimize continuously."`;
    const hashtags = "#DevOps #Kubernetes #CI/CD #AWS #Terraform #Automation";

    return (
      // SEO: Using footer element
      <footer className="bg-gray-50 dark:bg-gray-900  py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300 italic text-lg mb-4"> {/* Increased text size */}
            💡 <em>{quote}</em> {/* Using em for emphasis */}
          </p>
          {/* <p className="text-primary font-semibold mt-4"> 
            🚀 <strong>{hashtags}</strong>
          </p> */}
          {/* Consider adding profile views if you want to replicate the README exactly */}
          {/* <img src="https://komarev.com/ghpvc/?username=Wandati&style=flat-square&color=blue" alt="Profile views" className="mx-auto my-4" /> */}
          <p className="text-gray-400 mt-6 text-sm"> {/* Added margin-top */}
            &copy; {new Date().getFullYear()} Marvin Wandati Kinyanjui. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };

export default Footer;