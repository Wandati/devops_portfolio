import { Binary, Boxes, CircleCheck, Eye, Fingerprint, GitPullRequest, ShieldCheck } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const nodes = [
  { icon: GitPullRequest, title: 'change', text: 'peer review · ASVS-informed requirements · threat-aware design' },
  { icon: Binary, title: 'verify', text: 'SAST · secrets · dependencies · IaC · container scans' },
  { icon: Boxes, title: 'package', text: 'pinned inputs · CycloneDX SBOM · signed artifacts · provenance' },
  { icon: Fingerprint, title: 'promote', text: 'short-lived OIDC · environment gates · least privilege · policy as code' },
  { icon: Eye, title: 'operate', text: 'p95/p99 signals · actionable alerts · runbooks · recovery tests' },
];

const standards = ['NIST SSDF 1.1', 'OWASP ASVS 5.0', 'OWASP Top 10:2025', 'SLSA v1.2', 'K8s Restricted PSS'];

export default function DeliveryLoop() {
  const [mapRef, visible] = useReveal();

  return (
    <section id="approach" className="section-shell delivery-section">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="section-heading">
          <div>
            <p className="stage-chip">stage 3/5 · pipeline</p>
            <h2 className="section-title"><span className="prompt-mark">$</span>every release carries evidence.</h2>
          </div>
          <p className="section-intro">controls that gate the build — not badges that decorate it</p>
        </div>

        <div className="flow-map" ref={mapRef}>
          <div className="flow-line" aria-hidden="true"><span /></div>
          {nodes.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`flow-node reveal${visible ? ' is-visible' : ''}`}
              style={{ '--reveal-delay': `${index * 0.08}s` }}
            >
              <div className="flow-marker">
                <Icon size={16} aria-hidden="true" />
                <CircleCheck size={14} aria-hidden="true" />
                <span className="flow-stage">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="align-strip">
          <div><ShieldCheck size={18} aria-hidden="true" /><span># aligned with</span></div>
          <div>{standards.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
