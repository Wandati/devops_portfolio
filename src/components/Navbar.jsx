import { Download, Menu, Moon, Shield, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [['impact', 'Impact'], ['experience', 'Experience'], ['approach', 'Approach'], ['stack', 'Stack']];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = event => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="mx-auto flex h-[4.5rem] max-w-[88rem] items-center justify-between px-5 lg:px-10">
        <a href="#home" className="brand" aria-label="Marvin Wandati, home"><span><Shield size={17} /></span> Marvin<span>/sec</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          <a className="nav-cv" href="/Marvin_Wandati_CV_Prima.pdf" download><Download size={15} /> CV</a>
          <button onClick={toggleTheme} className="icon-button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
        <button onClick={() => setOpen(current => !current)} className="icon-button md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="mobile-menu md:hidden">
          {links.map(([id, label]) => <a key={id} onClick={() => setOpen(false)} href={`#${id}`}>{label}</a>)}
          <a href="/Marvin_Wandati_CV_Prima.pdf" download>Download CV</a>
          <button onClick={toggleTheme}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} Switch theme</button>
        </div>
      )}
    </nav>
  );
}
