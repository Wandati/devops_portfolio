// components/Contact.jsx
import { FaLinkedin, FaGitlab, FaGithub, FaEnvelope } from 'react-icons/fa';
import React from 'react';

const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-white dark:bg-gray-900"> {/* Changed background */}
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary"> {/* Use theme color */}
            Let's Connect
          </h2>

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 dark:text-white"> {/* Improved text styling */}
              🚀 <strong>Looking for exciting DevOps opportunities or collaborations? Let's connect!</strong>
            </p>

            {/* Social Links - Refined Styling */}
            <div className="flex flex-wrap gap-4 mt-5 justify-center">
              <a
                href="https://www.linkedin.com/in/marvin-wandati/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg"
                // SEO & Accessibility: More specific aria-label
                aria-label="Connect with Marvin Wandati on LinkedIn (opens in new tab)"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://gitlab.com/wandat2/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg"
                 // SEO & Accessibility: More specific aria-label
                aria-label="View Marvin Wandati's GitLab Profile (opens in new tab)"
              >
                <FaGitlab size={24} />
              </a>
              <a
                href="https://github.com/Wandati"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 text-white rounded-full flex items-center justify-center font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg"
                 // SEO & Accessibility: More specific aria-label
                aria-label="View Marvin Wandati's GitHub Profile (opens in new tab)"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:wandatimarvin23@gmail.com"
                className="p-3 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg"
                 // SEO & Accessibility: More specific aria-label
                aria-label="Contact Marvin Wandati via Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Contact;