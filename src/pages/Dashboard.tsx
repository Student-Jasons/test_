import React, { useState, useCallback } from 'react';
import { Website } from '../../types';
import WebsiteCard from '../../components/WebsiteCard';
import AddWebsiteModal from '../../components/AddWebsiteModal';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [websites, setWebsites] = useState<Website[]>([
    {
      id: '1',
      name: '멋진 포트폴리오',
      url: 'https://portfolio.example.com',
      imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    },
    {
      id: '2',
      name: 'E-commerce 스토어',
      url: 'https://store.example.com',
      imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
    },
    {
      id: '3',
      name: '기술 블로그',
      url: 'https://blog.example.dev',
      imageUrl: 'https://picsum.photos/seed/blog/600/400',
    },
    {
      id: '4',
      name: 'SaaS 대시보드',
      url: 'https://app.example-saas.com',
      imageUrl: 'https://picsum.photos/seed/saas/600/400',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleAddWebsite = useCallback((newWebsite: Omit<Website, 'id' | 'imageUrl'>) => {
    const websiteWithId: Website = {
      ...newWebsite,
      id: new Date().toISOString(),
      imageUrl: `https://picsum.photos/seed/${encodeURIComponent(newWebsite.name)}/600/400`,
    };
    setWebsites(prev => [websiteWithId, ...prev]);
    closeModal();
  }, [closeModal]);

  const handleDeleteWebsite = useCallback((id: string) => {
    setWebsites(prev => prev.filter(website => website.id !== id));
  }, []);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {websites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {websites.map(website => (
            <WebsiteCard
              key={website.id}
              website={website}
              onDelete={handleDeleteWebsite}
            />
          ))}

          {/* Card to navigate to the generated AI page */}
          <div className="flex items-center justify-center p-6 bg-dark-card rounded-lg shadow-sm">
            <Link to="/ai-page" className="text-center">
              <div className="text-lg font-medium">Catch the Dot</div>
              <div className="mt-2 text-sm text-dark-text-secondary">게임 플레이하기</div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-dark-text-secondary">웹사이트가 없습니다.</h2>
          <p className="mt-2 text-dark-text-secondary">새로운 웹사이트를 추가하여 포트폴리오를 만들어보세요!</p>
          <button
            onClick={openModal}
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-brand-primary transition-colors"
          >
            웹사이트 추가하기
          </button>
        </div>
      )}

      <AddWebsiteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAdd={handleAddWebsite}
      />
    </main>
  );
};

export default Dashboard;
