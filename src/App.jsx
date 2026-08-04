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

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
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
