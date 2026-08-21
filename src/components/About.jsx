import { ArrowDownRight, Database, Gauge, PackageCheck, TimerReset } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const outcomes = [
  { value: '<10', unit: 'min', label: 'deployment time', note: 'down from 30 minutes', icon: TimerReset, accent: 'lime' },
  { value: '1,014→9', unit: '', label: 'container findings', note: 'critical: 25 → 0', icon: PackageCheck, accent: 'cyan' },
  { value: '80', unit: '%', label: 'lower search latency', note: '3.22M company documents', icon: Gauge, accent: 'violet' },
  { value: '$15.6K+', unit: '', label: 'annual RDS savings', note: '13.2 TB blue-green migration', icon: Database, accent: 'amber' },
];

export default function About() {
  const [gridRef, visible] = useReveal();

  return (
    <section id="impact" className="section-shell">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="section-heading">
          <div><p className="section-kicker">01 / Proof over promises</p><h2 className="section-title">Measured in production.</h2></div>
          <p className="section-intro">Security, speed, reliability, and cost—improved together.</p>
        </div>

        <div className="outcome-grid" ref={gridRef}>
          {outcomes.map(({ value, unit, label, note, icon: Icon, accent }, index) => (
            <article
              className={`outcome-card accent-${accent} reveal${visible ? ' is-visible' : ''}`}
              key={label}
              style={{ '--reveal-delay': `${index * 0.07}s` }}
            >
              <div className="outcome-icon"><Icon size={20} aria-hidden="true" /></div>
              <div className="outcome-figure">
                <strong>{value}<small>{unit}</small></strong>
                <p>{label}</p>
              </div>
              <span className="outcome-note">{note}</span>
              <ArrowDownRight className="outcome-arrow" size={24} aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="about-strip">
          <p>Current scope</p>
          <div><strong>Sole DevSecOps / SRE owner</strong><span>AWS-native B2B SaaS · development, staging, production · 10+ applications</span></div>
          <div className="availability"><span className="status-dot" /> Milan · remote / hybrid · on-call ready</div>
        </div>
      </div>
    </section>
  );
}
