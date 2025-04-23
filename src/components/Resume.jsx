// src/components/ResumeDownload.jsx
import React from 'react';
import { Download } from 'lucide-react'; // Import download icon


const Resume = () => {
  // IMPORTANT: Replace this with the actual name of your resume file in the public folder
  const resumeFileName = 'Marvin_Wandati_Devops.pdf';
  const resumePath = `/${resumeFileName}`; // Path relative to the public folder

  return (
    // Consistent section styling with dark mode
    <section id="resume-download" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Interested in More Details?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Download my full resume for a comprehensive overview of my experience and skills.
        </p>

        {/* Download Button */}
        <a
          href={resumePath}
          download // This attribute prompts the browser to download the file
          className="inline-flex items-center gap-2 px-8 py-3 bg-gray-500 hover:bg-blue-500 dark:bg-secondary dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:ring-opacity-75"
          aria-label={`Download resume (${resumeFileName})`}
        >
          <Download size={20} /> {/* Download Icon */}
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;