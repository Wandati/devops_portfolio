import { ArrowUpRight, Building2, CloudCog } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const roles = [
  {
    period: 'FEB 2026 — NOW',
    role: 'DevSecOps / Site Reliability Engineer',
    company: 'Expandi Limited / Expandi Agency SRL',
    context: 'Milan · AWS-native B2B SaaS · sole infrastructure owner',
    icon: CloudCog,
    highlights: [
      'Own modular Terraform infrastructure across 3 environments and 10+ applications.',
      'Rebuilt CI/CD with promotion gates, SAST, secrets, dependency/image scans, SBOMs, signing, and AWS OIDC.',
      'Operate production telemetry, incident runbooks, recovery paths, and p95/p99 alerting.',
    ],
    tags: ['AWS', 'Terraform', 'GitHub Actions', 'OpenSearch', 'Observability'],
  },
  {
    period: 'FEB — AUG 2025',
    role: 'DevOps / Site Reliability Engineer',
    company: 'Ryanada Limited',
    context: 'Remote · 100+ servers · 2 Kubernetes clusters',
    icon: Building2,
    highlights: [
      'Standardised 100+ VPS servers with reusable Ansible playbooks.',
      'Centralised service signals with ELK, ElastAlert, Slack, and Playwright journeys.',
      'Protected stateful Kubernetes workloads with Longhorn snapshots and Kasten K10 backups.',
    ],
    tags: ['Ansible', 'Kubernetes', 'ELK', 'Grafana', 'Disaster recovery'],
  },
];

export default function ProfessionalFocus() {
  const [listRef, visible] = useReveal();

  return (
    <section id="experience" className="section-shell section-ink">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="section-heading">
          <div><p className="section-kicker">02 / Experience</p><h2 className="section-title">Ownership, end to end.</h2></div>
          <p className="section-intro">From infrastructure code to first-line incident response.</p>
        </div>

        <div className="experience-list" ref={listRef}>
          {roles.map(({ period, role, company, context, icon: Icon, highlights, tags }, index) => (
            <article
              className={`experience-card reveal${visible ? ' is-visible' : ''}`}
              key={company}
              style={{ '--reveal-delay': `${index * 0.1}s` }}
            >
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-role">
                <div className="experience-icon"><Icon aria-hidden="true" /></div>
                <p>{period}</p>
                <h3>{role}</h3>
                <strong>{company}</strong>
                <span>{context}</span>
              </div>
              <div className="experience-detail">
                <ul>{highlights.map(item => <li key={item}><ArrowUpRight size={16} aria-hidden="true" />{item}</li>)}</ul>
                <div>{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
