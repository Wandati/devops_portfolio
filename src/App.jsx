import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProfessionalFocus from './components/ProfessionalFocus';
import DeliveryLoop from './components/DeliveryLoop';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import BackToTopButton from './components/BackToTopButton';

// Storage can throw outright — Safari Lock Down, private windows, browsers set
// to block site data — and an exception here would blank the whole page.
// Keep this in sync with public/theme.js, which applies the same value before
// first paint so dark-mode visitors never see the light palette flash.
function readTheme() {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* storage unavailable — fall through to the default */
  }
  return 'dark';
}

function persistTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch {
    /* storage unavailable — the theme still applies for this session */
  }
}

function App() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#050908' : '#f6f8f7');
    persistTheme(theme);
  }, [theme]);

  if (window.location.pathname !== '/') {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#f6f8f7] text-slate-950 transition-colors duration-300 dark:bg-[#050908] dark:text-white">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar theme={theme} toggleTheme={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
      <main id="main-content">
        <Hero />
        <About />
        <ProfessionalFocus />
        <DeliveryLoop />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
