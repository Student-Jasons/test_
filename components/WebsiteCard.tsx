
import React from 'react';
import { Website } from '../types';
import TrashIcon from './icons/TrashIcon';

interface WebsiteCardProps {
  website: Website;
  onDelete: (id: string) => void;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website, onDelete }) => {
  const handleUrlClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };
  
  return (
    <div className="group relative bg-dark-card rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <img
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:opacity-80"
            src={website.imageUrl}
            alt={website.name}
        />
        <div className="p-5">
            <h3 className="text-lg font-bold text-dark-text truncate">{website.name}</h3>
            <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleUrlClick}
                className="text-sm text-brand-secondary hover:text-brand-primary transition-colors truncate block"
            >
                {website.url}
            </a>
        </div>
        <button
            onClick={() => onDelete(website.id)}
            aria-label={`${website.name} 삭제`}
            className="absolute top-3 right-3 bg-dark-bg/50 p-2 rounded-full text-dark-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-500 hover:text-white"
        >
            <TrashIcon className="w-5 h-5" />
        </button>
        <a href={website.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label={`${website.name} 방문하기`}></a>
    </div>
  );
};

export default WebsiteCard;
