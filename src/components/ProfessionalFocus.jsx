// src/components/ProfessionalFocus.jsx
import React from 'react';
import { FaSearchDollar, FaCogs, FaSitemap, FaShippingFast } from 'react-icons/fa'; // Example icons

const ProfessionalFocus = () => {
    // Updated focus areas based on resume and request
    const focusAreas = [
      {
        icon: <FaSearchDollar size={24} className="text-primary mb-3" />, // Icon for Observability/Cost
        title: "AI-Driven Observability & FinOps", // Combined based on resume emphasis
        description: "Implementing observability stacks (ELK, Prometheus) and AI-driven analytics (CAST AI) for proactive alerting, performance tuning, and significant cloud cost optimization."
      },
      {
        icon: <FaCogs size={24} className="text-primary mb-3" />, // Icon for Automation
        title: "Infrastructure Automation (IaC)",
        description: "Building scalable and repeatable infrastructure using Terraform and Ansible, managing cloud resources (AWS) and ensuring GitOps principles with tools like Argo CD."
      },
      {
        icon: <FaSitemap size={24} className="text-primary mb-3" />, // Icon for Kubernetes
        title: "Kubernetes Operations & Security",
        description: "Designing, deploying, and managing secure Kubernetes clusters (EKS) with resilient storage (Longhorn) and backup strategies (Kasten K10), including service mesh (Istio) implementation."
      },
      {
        icon: <FaShippingFast size={24} className="text-primary mb-3" />, // Icon for CI/CD
        title: "DevSecOps & CI/CD Optimization",
        description: "Creating efficient and secure CI/CD pipelines (Jenkins, GitHub Actions) with integrated automated testing, security scanning (Trivy, SonarQube), and GitOps deployment strategies."
      }
    ];

    return (
      // Added dark mode background
      <section id="focus" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Added dark mode text and used theme color for underline */}
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            Professional Focus
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Adjusted grid for responsiveness */}
            {focusAreas.map((area, index) => (
              <div
                key={index}
                // Added dark mode styles, enhanced hover effects, padding, and text alignment
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md dark:shadow-lg dark:shadow-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center"
              >
                {/* Render the icon */}
                {area.icon}
                {/* Added dark mode text color */}
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                  {area.title}
                </h3>
                {/* Added dark mode text color */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"> {/* Adjusted text size/leading */}
                    {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ProfessionalFocus;