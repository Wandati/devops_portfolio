import { CircleCheck } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const checks = [
  { name: 'deploy_time', value: '<10', unit: 'min', label: 'commit to production', note: 'was 30 minutes', accent: 'green' },
  { name: 'container_findings', value: '1,014→9', unit: '', label: 'image vulnerabilities', note: 'critical: 25 → 0', accent: 'cyan' },
  { name: 'search_latency', value: '-80', unit: '%', label: 'query latency', note: '3.22M documents · OpenSearch', accent: 'violet' },
  { name: 'rds_spend', value: '-$15.6K', unit: '/yr', label: 'database cost', note: '13.2 TB blue-green migration', accent: 'amber' },
];

export default function About() {
  const [gridRef, visible] = useReveal();

  return (
    <section id="impact" className="section-shell">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="section-heading">
          <div>
            <p className="stage-chip">stage 1/5 · verify — 4/4 checks passed</p>
            <h2 className="section-title"><span className="prompt-mark">$</span>measured in production.</h2>
          </div>
          <p className="section-intro">security, speed, reliability, cost — gated, not guessed</p>
        </div>

        <div className="check-grid" ref={gridRef}>
          {checks.map(({ name, value, unit, label, note, accent }, index) => (
            <article
              className={`check-card accent-${accent} reveal${visible ? ' is-visible' : ''}`}
              key={name}
              style={{ '--reveal-delay': `${index * 0.07}s` }}
            >
              <div className="check-head">
                <span className="check-name">{name}</span>
                <span className="check-status"><CircleCheck size={13} aria-hidden="true" /> PASS</span>
              </div>
              <div className="check-figure">
                <strong>{value}<small>{unit}</small></strong>
                <p>{label}</p>
              </div>
              <span className="check-note">{note}</span>
            </article>
          ))}
        </div>

        <div className="scope-strip">
          <p>$ scope --current</p>
          <div><strong>sole DevSecOps / SRE owner</strong><span>AWS-native B2B SaaS · dev, staging, production · 10+ applications</span></div>
          <div className="availability"><span className="status-dot" /> Milan · remote / hybrid · on-call ready</div>
        </div>
      </div>
    </section>
  );
}
