import { CheckCircle2 } from 'lucide-react';

const principles = ['Security as an engineering constraint—not a final gate', 'Short-lived identity and least privilege by default', 'Evidence, provenance, and policy carried with every release'];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <div><p className="section-kicker">01 / About</p><h2 className="section-title">From automation to <span className="gradient-text">assurance.</span></h2></div>
        <div>
          <p className="text-xl leading-9 text-slate-700 dark:text-slate-200">With 3+ years in cloud and DevOps, I focus on the point where delivery speed and security reinforce each other. I design paved roads for teams: reusable infrastructure, automated controls, and production feedback loops that make the secure path the easiest path.</p>
          <div className="mt-8 grid gap-4">{principles.map(item => <div key={item} className="flex gap-3 text-slate-600 dark:text-slate-300"><CheckCircle2 className="mt-1 shrink-0 text-emerald-500" size={19} /><span>{item}</span></div>)}</div>
          <div className="mt-10 border-l-2 border-emerald-400 pl-5"><p className="font-mono text-xs uppercase tracking-[.18em] text-emerald-600 dark:text-emerald-400">Current mission</p><p className="mt-2 text-lg font-semibold">Build resilient platforms where trust is continuously verified and delivery stays fast.</p></div>
        </div>
      </div>
    </section>
  );
}
