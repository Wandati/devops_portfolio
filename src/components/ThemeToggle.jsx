// component/ThemeToggle.jsx
// Description: This component serves as a theme toggle button, allowing users to switch between light and dark modes.
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}