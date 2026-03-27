// component/Skills.jsx
// Description: This component displays the technical expertise of the individual, organized into different areas with icons and details.
const Skills = () => {
    const expertiseAreas = [
      {
        icon: "☁️",
        title: "Cloud & Infrastructure",
        items: [
          { label: "AWS Services", details: "EKS, EC2, S3, CloudFormation, Lambda, IAM, VPC, Route53, GuardDuty, Security Hub" },
          { label: "Other Cloud Platforms", details: "Digital Ocean, Linode" },
          { label: "Infrastructure as Code", details: "Terraform, Ansible, AWS CloudFormation, Pulumi" },
          { label: "Operating Systems", details: "Linux (Ubuntu, CentOS, Amazon Linux), Windows Server" }
        ]
      },
      {
        icon: "🏗️",
        title: "Containerization & Orchestration",
        items: [
          { label: "Containers", details: "Docker, Docker Compose, Container Registry (ECR, DockerHub, GHCR)" },
          { label: "Orchestration", details: "Kubernetes (K8s), Helm, EKS, Kustomize" },
          { label: "Service Mesh", details: "Istio, Envoy, Linkerd" },
          { label: "Runtime Security", details: "Falco, OPA/Gatekeeper, Pod Security Standards" }
        ]
      },
      {
        icon: "🔒",
        title: "DevSecOps & Security",
        items: [
          { label: "Pipeline Security", details: "Jenkins, GitHub Actions, GitLab CI/CD, Argo CD, Tekton" },
          { label: "SAST / DAST", details: "Semgrep, SonarQube, OWASP ZAP, Trivy, Grype" },
          { label: "Supply Chain Security", details: "SBOM (Syft), SLSA, Cosign (Sigstore), Gitleaks, Dependabot" },
          { label: "Cloud Security Posture", details: "AWS Security Hub, GuardDuty, Checkov, tfsec, OPA" },
          { label: "Monitoring & Observability", details: "Prometheus, Grafana, ELK Stack, Jaeger, CloudWatch, OpenTelemetry" }
        ]
      },
      {
        icon: "💻",
        title: "Development & Automation",
        items: [
          { label: "Scripting & Automation", details: "Python, Bash, Shell Scripting, PowerShell" },
          { label: "Version Control & GitOps", details: "Git, GitHub, GitLab, Argo CD, Flux" },
          { label: "API Development", details: "RESTful APIs, API Gateway" },
          { label: "Policy as Code", details: "OPA Rego, Kyverno, AWS Config Rules" }
        ]
      }
    ];

    return (
      <section id="expertise" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col dark:bg-gray-900"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{area.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {area.title}
                  </h3>
                </div>

                <ul className="list-none space-y-2 text-gray-700 dark:text-white">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-primary before:font-bold">
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
