import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return <section id="contact" className="px-5 py-16 lg:px-10"><div className="contact-panel mx-auto max-w-7xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-emerald-300">Secure delivery starts with a conversation</p><h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-[-.04em] text-white sm:text-6xl">Need a platform that moves fast without trading away trust?</h2><div className="mt-9 flex flex-wrap gap-3"><a className="button-primary" href="mailto:wandatimarvin23@gmail.com"><Mail size={18}/> Let’s talk <ArrowUpRight size={18}/></a><a className="contact-link" href="https://github.com/Wandati" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a className="contact-link" href="https://www.linkedin.com/in/marvin-wandati/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div></div></section>;
}
