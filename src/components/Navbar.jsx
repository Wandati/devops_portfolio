import { Download, Menu, Moon, Sun, Terminal, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const links = [
  ['impact', 'impact'],
  ['experience', 'experience'],
  ['approach', 'approach'],
  ['stack', 'stack'],
  ['contact', 'contact'],
];

const CV_PATH = '/Marvin_Wandati_CV_Prima.pdf';
const FOCUSABLE = 'a[href], button:not([disabled])';

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = event => {
      if (event.key === 'Escape') {
        close();
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;

      // Keep focus inside the open panel — without this, tabbing walks into the
      // page behind an overlay the user cannot see past.
      const items = panelRef.current?.querySelectorAll(FOCUSABLE);
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = event => {
      if (panelRef.current?.contains(event.target) || toggleRef.current?.contains(event.target)) return;
      close();
    };

    // The panel is md:hidden, so widening past the breakpoint hides it while
    // leaving `open` true — the next narrow resize would flash it back open.
    const desktop = window.matchMedia('(min-width: 768px)');
    const onBreakpoint = event => event.matches && close();

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open, close]);

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="mx-auto flex h-[4.5rem] max-w-[88rem] items-center justify-between px-5 lg:px-10">
        <a href="#home" className="brand" aria-label="Marvin Wandati, home"><span><Terminal size={16} aria-hidden="true" /></span>wandati<span>@prod</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          <a className="nav-cv" href={CV_PATH} download><Download size={15} aria-hidden="true" /> CV</a>
          <button onClick={toggleTheme} className="icon-button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
        </div>
        <button
          ref={toggleRef}
          onClick={() => setOpen(current => !current)}
          className="icon-button md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" ref={panelRef} className="mobile-menu md:hidden">
          {links.map(([id, label]) => <a key={id} onClick={close} href={`#${id}`}>{label}</a>)}
          <a href={CV_PATH} download onClick={close}>Download CV</a>
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />} Switch theme
          </button>
        </div>
      )}
    </nav>
  );
}
