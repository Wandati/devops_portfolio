import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, MapPin, ShieldCheck } from 'lucide-react';
import profileImage from '../assets/dev.jpg';

const signals = ['NIST SSDF', 'SLSA', 'Zero Trust', 'GitOps'];

export default function Hero() {
  return (
    <header id="home" className="hero-grid relative min-h-[88vh] overflow-hidden pt-28 pb-16">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <div className="eyebrow"><span className="status-dot" /> Available for high-impact DevSecOps work</div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.055em] text-slate-950 dark:text-white sm:text-7xl">
            I engineer cloud delivery that is <span className="gradient-text">secure by default.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I’m Marvin Wandati, a DevSecOps & Platform Engineer building hardened cloud infrastructure, trusted software supply chains, and observable Kubernetes platforms that help teams ship with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#capabilities" className="button-primary">Explore my work <ArrowDownRight size={18} /></a>
            <a href="mailto:wandatimarvin23@gmail.com" className="button-secondary">Start a conversation</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2"><MapPin size={16} /> Nairobi, Kenya · Remote-ready</span>
            <a className="social-link" href="https://github.com/Wandati" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a className="social-link" href="https://www.linkedin.com/in/marvin-wandati/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-md" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .65 }}>
          <div className="profile-frame">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 font-mono text-xs text-emerald-300">
              <span>security_context.yaml</span><span className="flex items-center gap-2"><span className="status-dot" /> verified</span>
            </div>
            <div className="p-5">
              <img src={profileImage} alt="Marvin Wandati, DevSecOps and Platform Engineer" className="aspect-[4/4.2] w-full rounded-2xl object-cover object-top grayscale-[15%]" />
              <div className="mt-5 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-400/10 p-2.5 text-emerald-300"><ShieldCheck /></div>
                <div><p className="font-semibold text-white">Marvin Wandati Kinyanjui</p><p className="text-sm text-slate-400">DevSecOps · Cloud · Platform</p></div>
              </div>
            </div>
          </div>
          <div className="signal-card">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[.18em] text-slate-400">delivery guardrails</p>
            <div className="flex flex-wrap gap-2">{signals.map(signal => <span key={signal}>{signal}</span>)}</div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
