import useReveal from '../hooks/useReveal';

const jobs = [
  {
    name: 'devsecops-sre',
    company: 'expandi',
    period: 'feb 2026 — now',
    state: { label: '● running', tone: 'running' },
    context: 'Milan · AWS-native B2B SaaS · sole infrastructure owner',
    log: [
      'own modular Terraform across 3 environments and 10+ applications',
      'rebuilt CI/CD: promotion gates, SAST, secrets, dependency/image scans, SBOMs, signing, AWS OIDC',
      'operate production telemetry, incident runbooks, recovery paths, p95/p99 alerting',
    ],
    flags: ['aws', 'terraform', 'github-actions', 'opensearch', 'observability'],
  },
  {
    name: 'devops-sre',
    company: 'ryanada',
    period: 'feb — aug 2025',
    state: { label: '✓ completed', tone: 'done' },
    context: 'remote · 100+ servers · 2 Kubernetes clusters',
    log: [
      'standardised 100+ VPS servers with reusable Ansible playbooks',
      'centralised service signals with ELK, ElastAlert, Slack, Playwright journeys',
      'protected stateful Kubernetes workloads: Longhorn snapshots, Kasten K10 backups',
    ],
    flags: ['ansible', 'kubernetes', 'elk', 'grafana', 'disaster-recovery'],
  },
];

export default function ProfessionalFocus() {
  const [listRef, visible] = useReveal();

  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="section-heading">
          <div>
            <p className="stage-chip">stage 2/5 · jobs</p>
            <h2 className="section-title"><span className="prompt-mark">$</span>ownership, end to end.</h2>
          </div>
          <p className="section-intro">from infrastructure code to first-line incident response</p>
        </div>

        <div className="job-list" ref={listRef}>
          {jobs.map(({ name, company, period, state, context, log, flags }, index) => (
            <article
              className={`term-window job-panel reveal${visible ? ' is-visible' : ''}`}
              key={company}
              style={{ '--reveal-delay': `${index * 0.1}s` }}
            >
              <div className="term-bar job-bar">
                <span className="term-dots" aria-hidden="true"><span /><span /><span /></span>
                <span className="job-name">▸ {name} <b>@ {company}</b></span>
                <span className="job-when">{period} · <span className={state.tone}>{state.label}</span></span>
              </div>
              <div className="term-body">
                <p className="job-context">{context}</p>
                <ul className="diff-list">
                  {log.map(line => <li key={line}>{line}</li>)}
                </ul>
                <div className="job-flags">{flags.map(flag => <span key={flag}>{flag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
