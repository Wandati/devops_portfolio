import { Menu, Moon, Shield, Sun, X } from 'lucide-react';
import { useState } from 'react';

const links = [['about', 'About'], ['capabilities', 'Capabilities'], ['stack', 'Stack'], ['contact', 'Contact']];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#home" className="flex items-center gap-2 font-black tracking-tight"><span className="logo-mark"><Shield size={18} /></span> MW<span className="text-emerald-500">/SEC</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          <button onClick={toggleTheme} className="icon-button" aria-label="Toggle color theme">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
        </div>
        <button onClick={() => setOpen(!open)} className="icon-button md:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-5 py-5 dark:border-white/10 dark:bg-slate-950 md:hidden">{links.map(([id, label]) => <a key={id} onClick={() => setOpen(false)} href={`#${id}`} className="block py-3 font-medium">{label}</a>)}<button onClick={toggleTheme} className="mt-2 flex items-center gap-2 py-3">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} Switch theme</button></div>}
    </nav>
  );
}
