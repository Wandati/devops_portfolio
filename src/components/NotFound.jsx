// component/NotFound.jsx
// Description: This component serves as a 404 Not Found page, providing a message and a link back to the home page.
import React from 'react';
//import { Link } from 'react-router-dom'; // Uncomment if using react-router-dom

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 text-center px-4 dark:bg-gray-900 dark:text-white">
      <div>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-600 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-8">
          Oops! The page you are looking for does not seem to exist.
        </p>
        {/* Basic link back home without router */}
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded font-semibold transition-colors hover:bg-blue-700"
        >
          Go Back Home
        </a>
        {/* Example if using react-router-dom */}
        {/* <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded font-semibold transition-colors hover:bg-blue-700">
          Go Back Home
        </Link> */}
      </div>
    </section>
  );
};

export default NotFound;