import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import ThemeToggle from './components/ThemeToggle';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <main className="bg-off-white dark:bg-navy-dark font-sans flex items-center justify-center min-h-screen p-4 transition-colors duration-300">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <ProfileCard />
    </main>
  );
};

export default App;
