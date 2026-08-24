const manifest = [
  { key: 'aws', tools: ['app-runner', 'ecs-fargate', 'rds', 'opensearch', 'cloudfront', 'iam', 'kms'] },
  { key: 'infra_as_code', tools: ['terraform', 'cloudformation', 'ansible', 'python', 'bash', 'linux'] },
  { key: 'cloud_native', tools: ['docker', 'kubernetes', 'eks', 'helm', 'istio', 'argo-cd', 'kasten-k10'] },
  { key: 'delivery', tools: ['github-actions', 'gitlab-ci', 'jenkins', 'oidc', 'gitops', 'promotion-gates'] },
  { key: 'security', tools: ['trivy', 'codeql', 'gitleaks', 'cosign', 'cyclonedx', 'opa-kyverno', 'vault'] },
  { key: 'reliability', tools: ['openobserve', 'grafana', 'prometheus', 'cloudwatch', 'x-ray', 'elk', 'runbooks'] },
];

export default function Skills() {
  return (
    <section id="stack" className="section-shell">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="section-heading">
          <div>
            <p className="stage-chip">stage 4/5 · matrix</p>
            <h2 className="section-title"><span className="prompt-mark">$</span>cat stack.yaml</h2>
          </div>
          <p className="section-intro">only what has been operated, automated, or secured in production</p>
        </div>

        <div className="term-window stack-panel">
          <div className="term-bar">
            <span className="term-dots" aria-hidden="true"><span /><span /><span /></span>
            <span className="term-title">~/stack.yaml — 6 groups · pinned</span>
          </div>
          <div className="term-body">
            <div className="stack-grid">
              {manifest.map(({ key, tools }) => (
                <div className="stack-group" key={key}>
                  <span className="stack-key">{key}</span>
                  <div className="stack-chips">{tools.map(tool => <span key={tool}>{tool}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
