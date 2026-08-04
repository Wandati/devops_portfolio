import { motion, useReducedMotion } from 'framer-motion';
import { Binary, Boxes, Eye, Fingerprint, GitPullRequest, ShieldCheck } from 'lucide-react';

const controls = [
  { icon: GitPullRequest, stage: '01', title: 'Change', text: 'Peer review · ASVS-informed requirements · threat-aware design' },
  { icon: Binary, stage: '02', title: 'Verify', text: 'SAST · secrets · dependencies · IaC · container scans' },
  { icon: Boxes, stage: '03', title: 'Package', text: 'Pinned inputs · CycloneDX SBOM · signed artifacts · provenance' },
  { icon: Fingerprint, stage: '04', title: 'Promote', text: 'Short-lived OIDC · environment gates · least privilege · policy as code' },
  { icon: Eye, stage: '05', title: 'Operate', text: 'p95/p99 signals · actionable alerts · runbooks · recovery tests' },
];

const standards = ['NIST SSDF 1.1', 'OWASP ASVS 5.0', 'OWASP Top 10:2025', 'SLSA v1.2', 'Kubernetes Restricted PSS'];

export default function DeliveryLoop() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="section-shell delivery-section">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="section-heading">
          <div><p className="section-kicker">03 / 2026 delivery baseline</p><h2 className="section-title">Every release carries evidence.</h2></div>
          <p className="section-intro">A practical operating model aligned with today’s secure software standards—not a wall of scanner badges.</p>
        </div>

        <div className="delivery-map">
          <div className="delivery-line" aria-hidden="true"><span /></div>
          {controls.map(({ icon: Icon, stage, title, text }, index) => (
            <motion.article
              key={title}
              className="delivery-node"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .4 }}
              transition={{ delay: index * .09, duration: .5 }}
            >
              <div><Icon size={21} /><span>{stage}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>

        <div className="standards-bar">
          <div><ShieldCheck size={18} /><span>Practice alignment</span></div>
          <div>{standards.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
