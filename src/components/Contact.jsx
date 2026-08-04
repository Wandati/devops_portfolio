import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16 lg:px-10 lg:py-24">
      <div className="contact-panel mx-auto max-w-[88rem]">
        <div className="contact-rings" aria-hidden="true" />
        <p className="section-kicker">05 / Open channel</p>
        <h2>Let’s make the secure path<br />the fast path.</h2>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href="mailto:wandatimarvin23@gmail.com"><Mail size={18} /> Start a conversation <ArrowUpRight size={18} /></a>
          <a className="contact-link" href="https://github.com/Wandati" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a className="contact-link" href="https://www.linkedin.com/in/marvin-wandati/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
