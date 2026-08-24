import { ArrowUpRight, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Contact() {
  return (
    <section id="contact" className="contact-section px-5 lg:px-10">
      <div className="contact-panel mx-auto max-w-[88rem]">
        <p className="stage-chip">stage 5/5 · deploy</p>
        {/* The space before <br /> is load-bearing: ≤640px hides the break,
            and without it the words fuse into "paththe". */}
        <h2>let&rsquo;s make the secure path <br /><em>the fast path.</em></h2>
        <p className="contact-cmd"><b>marvin@milan</b>:~$ <i>ssh you@your-company</i>  # remote / hybrid · on-call ready</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href="mailto:wandatimarvin23@gmail.com"><Mail size={18} /> start a conversation <ArrowUpRight size={18} /></a>
          <a className="contact-link" href="https://github.com/Wandati" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a className="contact-link" href="https://www.linkedin.com/in/marvin-wandati/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
        </div>
        <p className="contact-exit"><b>✓</b> run #2026 passed — awaiting your trigger</p>
      </div>
    </section>
  );
}
