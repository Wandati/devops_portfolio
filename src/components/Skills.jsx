import { Activity, Boxes, Cloud, Code2, GitBranch, ShieldCheck } from 'lucide-react';

const groups = [
  { icon: Cloud, title: 'AWS', list: 'App Runner · ECS/Fargate · RDS · OpenSearch · CloudFront · IAM · KMS' },
  { icon: Code2, title: 'Infrastructure', list: 'Terraform · CloudFormation · Ansible · Python · Bash · Linux' },
  { icon: Boxes, title: 'Cloud native', list: 'Docker · Kubernetes · EKS · Helm · Istio · Argo CD · Kasten K10' },
  { icon: GitBranch, title: 'Delivery', list: 'GitHub Actions · GitLab CI · Jenkins · OIDC · GitOps · promotion gates' },
  { icon: ShieldCheck, title: 'Security', list: 'Trivy · CodeQL · Gitleaks · Cosign · CycloneDX · OPA/Kyverno · Vault' },
  { icon: Activity, title: 'Reliability', list: 'OpenObserve · Grafana · Prometheus · CloudWatch · X-Ray · ELK · runbooks' },
];

export default function Skills() {
  return (
    <section id="stack" className="section-shell">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="section-heading">
          <div><p className="section-kicker">04 / Working stack</p><h2 className="section-title">Tools used in context.</h2></div>
          <p className="section-intro">Selected from the current CV—focused on what has been operated, automated, or secured.</p>
        </div>
        <div className="skills-grid">
          {groups.map(({ icon: Icon, title, list }, index) => (
            <article key={title} className="skill-card">
              <span>0{index + 1}</span><Icon size={24} /><h3>{title}</h3><p>{list}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
