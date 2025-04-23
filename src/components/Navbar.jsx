// // import { Sun, Moon } from 'lucide-react';
// // import ThemeToggle from './ThemeToggle';

// // export default function Navbar({ theme, toggleTheme }) {
// //   return (
// //     <nav className="p-6 flex justify-between items-center sticky top-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md z-10">
// //       <h1 className="text-xl font-bold">Marvin Wandati</h1>
// //       <ul className="flex items-center space-x-4">
// //         <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
// //         <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
// //         <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
// //         <li>
// //           <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import { Sun, Moon } from 'lucide-react';

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   return (
//     <nav className="flex items-center justify-between px-4 md:px-16 py-4 shadow dark:shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900">
//       <h1 className="text-xl font-bold">Marvin Wandati</h1>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
//       >
//         {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//       </button>
//     </nav>
//   );
// }

//* components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-16 py-4 shadow dark:shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold">Marvin Wandati</h1>
      <div className="space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
