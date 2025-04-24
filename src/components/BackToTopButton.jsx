// component/BackToTopButton.jsx
// Description: This component provides a button that scrolls the page back to the top when clicked. It appears when the user scrolls down a certain distance.
// It uses React hooks for state management and side effects, and includes smooth scrolling functionality.
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Show the button when scrolled down 300px from the top
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
  }, []); 

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50"> {/* Fixed position for the button */}
      {isVisible && ( // Only render the button if isVisible is true
        <button
          onClick={scrollToTop}
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