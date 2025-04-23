// Filename: Hero.jsx
import React from 'react';

const Skills = () => {
    // Data structure directly reflecting the README structure
    const expertiseAreas = [
      {
        icon: "☁️",
        title: "Cloud & Infrastructure",
        items: [
          { label: "AWS Services", details: "EKS, EC2, S3, CloudFormation, Lambda, IAM, VPC, Route53" },
          { label: "Other Cloud Platforms", details: "Digital Ocean, Linode" },
          { label: "Infrastructure as Code", details: "Terraform, Ansible, AWS CloudFormation" },
          { label: "Operating Systems", details: "Linux (Ubuntu, CentOS, Amazon Linux), Windows Server" }
        ]
      },
      {
        icon: "🏗️",
        title: "Containerization & Orchestration",
        items: [
          { label: "Containers", details: "Docker, Docker Compose, Container Registry (ECR, DockerHub)" },
          { label: "Orchestration", details: "Kubernetes (K8s), Helm, EKS" },
          { label: "Service Mesh", details: "Istio, Envoy" }
        ]
      },
      {
        icon: "🔄",
        title: "CI/CD & DevSecOps",
        items: [
          { label: "Pipeline Tools", details: "Jenkins, GitHub Actions, GitLab CI/CD, Argo CD" },
          { label: "Security Scanning", details: "Trivy, SonarQube, OWASP Dependency Check, AWS Security Hub" },
          { label: "Monitoring & Observability", details: "Prometheus, Grafana, ELK Stack, Jaeger, CloudWatch" }
        ]
      },
      {
        icon: "💻",
        title: "Development & Automation",
        items: [
          { label: "Scripting & Automation", details: "Python, Bash, Shell Scripting, PowerShell" },
          { label: "Version Control", details: "Git, GitHub, GitLab" },
          { label: "API Development", details: "RESTful APIs, API Gateway" }
        ]
      }
    ]; // Data matches the GitHub README provided

    return (
      <section id="expertise" className="py-16 bg-gray-50 dark:bg-gray-900"> {/* Changed background */}
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary"> {/* Use theme color */}
            Technical Expertise
          </h2>

          {/* Using grid for layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 "> {/* Adjusted gap and columns */}
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col dark:bg-gray-900 " // Added flex-col for better structure
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{area.icon}</span> {/* Adjusted icon size and margin */}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white"> {/* Use theme color */}
                    {area.title}
                  </h3>
                </div>

                <ul className="list-none space-y-2 text-gray-700 dark:text-white"> 
                  {area.items.map((item, itemIndex) => (
                     // SEO: Using <li> for list items
                    <li key={itemIndex} className="pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-primary before:font-bold"> {/* Use theme color */}
                      <strong>{item.label}:</strong> {item.details}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Skills;