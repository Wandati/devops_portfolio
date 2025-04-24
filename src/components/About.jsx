// component/About.jsx
// Description: This component serves as the "About Me" section of the portfolio, providing a brief introduction and skills list.
import React from 'react';

const About = () => {
    return (
      // About Section
      <section id="about" className="py-16 bg-white dark:bg-gray-900"> 
        <div className="container max-w-4xl mx-auto px-4"> 
          <h2 className="text-3xl font-bold text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary"> 
            About Me
          </h2>

          <div className="flex flex-col items-center text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 dark:text-white"> 
              I'm a <strong>certified DevOps Engineer</strong> with <strong>3+ years of experience</strong>, specializing in <strong>cloud infrastructure, automation, and containerization</strong>. My expertise lies in designing and implementing scalable <strong>CI/CD pipelines, Kubernetes orchestration, and DevSecOps solutions</strong>. Based in Nairobi, Kenya, I am passionate about <strong>optimizing infrastructure performance</strong> and <strong>automating workflows</strong> for <strong>efficient software delivery</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-3 my-5">

              <span className=" bg-yellow-400 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1">
                 AWS
              </span>
              <span className="bg-green-600 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1">
                Kubernetes
              </span>
              <span className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1"> 
                 Docker
              </span>
              <span className="bg-purple-500 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1">
                 Terraform
              </span>
               <span className="bg-red-500 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm flex items-center gap-1"> 
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