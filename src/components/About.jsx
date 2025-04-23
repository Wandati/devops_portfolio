// Filename: Hero.jsx
import React from 'react';

const About = () => {
    return (
      <section id="about" className="py-16 bg-white dark:bg-gray-900"> {/* Changed background */}
        <div className="container max-w-4xl mx-auto px-4"> {/* Adjusted max-width */}
          {/* SEO: Using h2 for section heading */}
          <h2 className="text-3xl font-bold text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary"> {/* Use theme color */}
            About Me
          </h2>

          <div className="flex flex-col items-center text-center">
            {/* Content directly from README */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 dark:text-white"> {/* Improved text styling */}
              I'm a <strong>certified DevOps Engineer</strong> with <strong>3+ years of experience</strong>, specializing in <strong>cloud infrastructure, automation, and containerization</strong>. My expertise lies in designing and implementing scalable <strong>CI/CD pipelines, Kubernetes orchestration, and DevSecOps solutions</strong>. Based in Nairobi, Kenya, I am passionate about <strong>optimizing infrastructure performance</strong> and <strong>automating workflows</strong> for <strong>efficient software delivery</strong>.
            </p>

            {/* Keywords/Badges - slightly restyled */}
            <div className="flex flex-wrap justify-center gap-3 my-5">
              {/* Example badges matching README style */}
              <span className=" bg-yellow-400 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1">
                 AWS
              </span>
              <span className="bg-green-600 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1">
                Kubernetes
              </span>
              <span className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1"> {/* Adjusted Docker color */}
                 Docker
              </span>
              <span className="bg-purple-500 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1">
                 Terraform
              </span>
               <span className="bg-red-500 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1"> {/* Adjusted CI/CD color */}
                 CI/CD
              </span>
               <span className="bg-gray-700 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1">
                 Automation
              </span>
               <span className="bg-green-600 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1">
                 DevSecOps
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default About;