import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import NotFound from './components/NotFound'; 
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton';
import ProfessionalFocus from './components/ProfessionalFocus';
import Resume from './components/Resume';
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Basic check for 404 - Replace with proper routing later
  const is404 = window.location.pathname !== '/' && !window.location.pathname.startsWith('/#');

  if (is404) {
    return <NotFound />;
  }


  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <ProfessionalFocus />
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
