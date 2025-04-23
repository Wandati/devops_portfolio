// src/components/BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Using react-icons

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Show button after scrolling down 300px (adjust threshold as needed)
    // A threshold is generally more user-friendly than only appearing *exactly* at the bottom.
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Alternative: Logic to show only near the bottom (less common)
    // const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100; // 100px threshold from bottom
    // setIsVisible(nearBottom);
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50"> {/* Fixed position */}
      {isVisible && ( // Only render the button if isVisible is true
        <button
          onClick={scrollToTop}
          // Styling with Tailwind, including dark mode
          className="bg-blue-500 dark:bg-secondary dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          aria-label="Scroll back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;