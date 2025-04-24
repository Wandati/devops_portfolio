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
   // Basic check for 404 - Replace with proper routing later
   const is404 = window.location.pathname !== '/' && !window.location.pathname.startsWith('/#'); 

   if (is404) {
     return <NotFound />;
   }
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="space-y-16 px-4 md:px-16">
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