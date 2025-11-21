
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-dark-text selection:bg-brand-primary selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
