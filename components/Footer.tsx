import React from 'react';

const Footer: React.FC = () => {
  return (
  <footer className="bg-dark-card border-t border-dark-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-dark-text-secondary">
        <div className="mb-3 sm:mb-0">© {new Date().getFullYear()} 내 포트폴리오</div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href="mailto:hello@example.com" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
