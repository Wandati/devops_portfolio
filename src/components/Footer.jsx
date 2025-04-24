// component/Footer.jsx
// Description: This component serves as the footer for the application, providing a quote and copyright information.

import React from 'react';

const Footer = () => {
  
    const quote = `"Automate everything. Deploy anywhere. Optimize continuously."`;

    return (
      // Footer Section
      <footer className="bg-gray-50 dark:bg-gray-900  py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 italic text-lg mb-4 dark:text-gray-300">
            💡 <em>{quote}</em> 
          </p>  
          <p className="text-gray-400 mt-6 text-sm"> 
            &copy; {new Date().getFullYear()} Marvin Wandati Kinyanjui. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };

export default Footer;