import { ArrowDownRight, Download, MapPin } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import profileImage from '../assets/dev.jpg';

// The terminal replays the real deploy pipeline. `gate: true` renders the
// left text in cyan; `prompt: true` renders a shell prompt line. The stagger
// index for the boot animation is the array position.
const bootLines = [
  { prompt: true, cmd: 'git push origin main' },
  { gate: true, text: '[gate] sast · secrets · deps · iac', status: '✓ 0 critical' },
  { gate: true, text: '[gate] build → sbom → cosign sign', status: '✓ attested' },
  { gate: true, text: '[gate] trivy @ published digest', status: '✓ pass' },
  { gate: true, text: '[promote] latest → same digest', status: '✓ byte-identical' },
  { prompt: true, cmd: 'kubectl get slo' },
  { text: 'p99 stable · error budget 98% · cost ↓', status: '✓ on-call: marvin' },
];

const stats = [
  ['apps', '10+'],
  ['environments', '3'],
  ['critical findings', '0'],
  ['cloud identity', 'OIDC'],
];

const ticker = ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Trivy', 'Cosign', 'Grafana', 'OpenSearch'];

export default function Hero() {
  return (
    <header id="home" className="hero-shell">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-scanline" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-[88rem] items-center gap-14 px-5 pb-14 pt-32 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:pb-20 lg:pt-40">
        <div className="rise-in">
          <div className="eyebrow"><span className="status-dot" /> run #2026 · operating production</div>
          <h1 className="hero-title">
            ship fast.<br />
            break nothing.<br />
            <span className="accent-line">prove it</span><span className="cursor-block" aria-hidden="true" />
          </h1>
          <p className="hero-copy">
            I&rsquo;m <strong>Marvin Wandati</strong> — DevSecOps / SRE engineer. I own AWS delivery from commit to runtime: every release scanned, signed, attested, and watched in production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#impact" className="button-primary">view the evidence <ArrowDownRight size={18} /></a>
            <a href="/Marvin_Wandati_CV_Prima.pdf" download className="button-secondary"><Download size={17} /> download cv</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} aria-hidden="true" /> Milan, Italy</span>
            <a href="https://github.com/Wandati" target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/marvin-wandati/" target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>

        <div className="term-window rise-in" style={{ '--rise-delay': '.12s' }}>
          <div className="term-bar">
            <span className="term-dots" aria-hidden="true"><span /><span /><span /></span>
            <span className="term-title">marvin@prod: ~/delivery</span>
            <img src={profileImage} alt="Marvin Wandati" width="28" height="28" />
          </div>

          <div className="term-body" aria-label="Deploy pipeline log">
            {bootLines.map((line, index) => (
              <div className="term-line" key={index} style={{ '--i': index }}>
                {line.prompt
                  ? <span className="term-prompt"><b>marvin@prod</b>:~$ <i>{line.cmd}</i></span>
                  : <span className={line.gate ? 'term-gate' : undefined}>{line.text}</span>}
                {line.status && <span className="ok">{line.status}</span>}
              </div>
            ))}
            <div className="term-line term-final" style={{ '--i': bootLines.length }}>
              <span>✓ deployed in 9m41s — release carries evidence<span className="cursor-block" aria-hidden="true" /></span>
            </div>
          </div>

          <div className="term-stats">
            {stats.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span><strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...Array(2)].flatMap((_, loop) => ticker.map(item => (
            <span className="ticker-item" key={`${loop}-${item}`}><span>✓</span> {item}</span>
          )))}
        </div>
      </div>
    </header>
  );
}
