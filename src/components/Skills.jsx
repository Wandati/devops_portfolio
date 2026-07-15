const groups = [
  ['Cloud foundations', 'AWS · EKS · EC2 · Lambda · VPC · IAM · GuardDuty · Security Hub'],
  ['Infrastructure & policy', 'Terraform · OpenTofu · Pulumi · Ansible · OPA/Rego · Kyverno · Checkov'],
  ['Cloud native & runtime', 'Kubernetes · Helm · Argo CD · Flux · Cilium · Istio · Falco · Tetragon (eBPF)'],
  ['AppSec & supply chain', 'Semgrep · Trivy · Grype · Gitleaks · Syft · Cosign/Sigstore · in-toto · OWASP ZAP'],
  ['AI & LLM security', 'OWASP LLM Top 10 · AI-BOM · Model/dataset provenance · Prompt-injection testing · Agent & MCP guardrails'],
  ['Identity & secrets', 'SPIFFE/SPIRE · OIDC workload federation · Vault · Short-lived credentials · Secretless CI'],
  ['Delivery engineering', 'GitHub Actions · GitLab CI · Tekton · GitOps · Progressive delivery · Policy-gated promotion'],
  ['Observability & response', 'OpenTelemetry · Prometheus · Grafana · Loki · Tempo · CloudWatch · SLOs'],
];

export default function Skills() {
  return <section id="stack" className="section-shell"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="section-kicker">03 / Toolchain</p><h2 className="section-title">Deep enough to build.<br/><span className="gradient-text">Broad enough to connect.</span></h2><p className="mt-6 max-w-md leading-7 text-slate-600 dark:text-slate-400">Tools change. The durable skill is choosing controls that fit the threat model, delivery flow, and operating reality.</p></div><div className="border-t border-slate-200 dark:border-white/10">{groups.map(([title, list], index) => <div className="stack-row" key={title}><span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">0{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">{list}</p></div></div>)}</div></div></div></section>;
}
