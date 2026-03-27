// component/ProfessionalFocus.jsx
// Description: This component highlights the professional focus areas of the individual, including observability, automation, Kubernetes, and CI/CD optimization. It uses icons to visually represent each area and is styled for responsiveness and dark mode compatibility.
import { FaSearchDollar, FaCogs, FaSitemap, FaShieldAlt } from 'react-icons/fa';

const ProfessionalFocus = () => {
    const focusAreas = [
      {
        icon: <FaSearchDollar size={24} className="text-primary mb-3" />,
        title: "AI-Driven Observability & FinOps",
        description: "Implementing full-stack observability (ELK, Prometheus, OpenTelemetry) and AI-driven analytics (CAST AI) for proactive alerting, performance tuning, and cloud cost optimization."
      },
      {
        icon: <FaCogs size={24} className="text-primary mb-3" />,
        title: "Infrastructure Automation (IaC)",
        description: "Building scalable, repeatable infrastructure using Terraform and Ansible with Policy as Code (OPA, Checkov, tfsec) to enforce security guardrails and GitOps workflows via Argo CD."
      },
      {
        icon: <FaSitemap size={24} className="text-primary mb-3" />,
        title: "Kubernetes Operations & Security",
        description: "Designing and managing secure Kubernetes clusters (EKS) with runtime threat detection (Falco), admission control (OPA/Gatekeeper), service mesh (Istio), and resilient storage (Longhorn, Kasten K10)."
      },
      {
        icon: <FaShieldAlt size={24} className="text-primary mb-3" />,
        title: "DevSecOps & Supply Chain Security",
        description: "Embedding security across the SDLC: SAST (Semgrep, SonarQube), container scanning (Trivy), secret detection (Gitleaks), SBOM generation (Syft), image signing (Cosign/Sigstore), and SLSA compliance."
      }
    ];

    return (
      <section id="focus" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            Professional Focus
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md dark:shadow-lg dark:shadow-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center"
              >
                {area.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
