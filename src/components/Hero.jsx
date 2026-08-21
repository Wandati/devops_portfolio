import { ArrowDownRight, Download, Github, Linkedin, MapPin, ShieldCheck } from 'lucide-react';
import profileImage from '../assets/dev.jpg';

const pipeline = ['commit', 'scan', 'attest', 'promote', 'observe'];
const evidence = [
  ['apps', '10+'],
  ['environments', '3'],
  ['critical findings', '0'],
  ['cloud identity', 'OIDC'],
];

export default function Hero() {
  return (
    <header id="home" className="hero-shell">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-orbit orbit-a" aria-hidden="true" />
      <div className="hero-orbit orbit-b" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-[88rem] items-center gap-14 px-5 pb-14 pt-32 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-20 lg:pt-40">
        <div className="rise-in">
          <div className="eyebrow"><span className="status-dot" /> Operating production systems</div>
          <h1 className="hero-title">
            Infrastructure that<br />
            <span className="outline-text">proves itself.</span>
          </h1>
          <p className="hero-copy">
            I’m Marvin Wandati—a DevSecOps / SRE engineer owning secure AWS delivery, production reliability, and cost-aware infrastructure from commit to runtime.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#impact" className="button-primary">See verified impact <ArrowDownRight size={18} /></a>
            <a href="/Marvin_Wandati_CV_Prima.pdf" download className="button-secondary"><Download size={17} /> Download CV</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} aria-hidden="true" /> Milan, Italy</span>
            <a href="https://github.com/Wandati" target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/marvin-wandati/" target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>

        <div className="command-card rise-in" style={{ '--rise-delay': '.12s' }}>
          <div className="command-topbar">
            <span className="flex items-center gap-2"><span className="status-dot" /> prod / evidence</span>
            <span>2026.08</span>
          </div>

          <div className="command-visual">
            <div className="radar" aria-hidden="true">
              <div className="radar-sweep" />
              <span className="radar-node node-one" />
              <span className="radar-node node-two" />
              <span className="radar-node node-three" />
              <div className="radar-core"><ShieldCheck size={28} /><span>verified</span></div>
            </div>
            <img className="profile-chip" src={profileImage} alt="Marvin Wandati" width="64" height="64" />
          </div>

          <div className="evidence-grid">
            {evidence.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span><strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="pipeline-strip" aria-label="Secure delivery pipeline">
            {pipeline.map((item, index) => (
              <div key={item} className="pipeline-step">
                <span className="pipeline-dot">{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...Array(2)].flatMap((_, loop) => ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Trivy', 'Cosign', 'Grafana', 'OpenSearch'].map(item => (
            <span className="ticker-item" key={`${loop}-${item}`}><span>+</span> {item}</span>
          )))}
        </div>
      </div>
    </header>
  );
}
