
import React from 'react';
import Button from './Button';
import PlusIcon from './icons/PlusIcon';

interface HeaderProps {
  onAddClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  return (
    <header className="bg-dark-card/50 backdrop-blur-sm sticky top-0 z-10 border-b border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            나만의 웹사이트 포트폴리오
          </h1>
          <Button onClick={onAddClick}>
            <PlusIcon className="w-5 h-5 mr-2" />
            웹사이트 추가
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
