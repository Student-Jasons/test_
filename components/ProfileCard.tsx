import React, { useState, useEffect } from 'react';
import HeadphoneIcon from './icons/HeadphoneIcon';
import ChatIcon from './icons/ChatIcon';
import LaptopIcon from './icons/LaptopIcon';

const ProfileCard: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const interests = [
    { name: '음악', Icon: HeadphoneIcon },
    { name: '대화', Icon: ChatIcon },
    { name: '컴퓨터', Icon: LaptopIcon },
  ];

  return (
    <div
      className={`
        w-full max-w-sm bg-white dark:bg-charcoal-gray-dark rounded-2xl shadow-lg p-8 text-center
        transform transition-all duration-500 ease-out group
        hover:-translate-y-2 hover:shadow-2xl
        ${isLoaded ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}
      `}
    >
      <div className="relative inline-block mb-6">
        <div
          className="w-32 h-32 rounded-full mx-auto ring-4 ring-accent-teal/50
                     flex items-center justify-center
                     bg-gray-100 dark:bg-charcoal-gray
                     transition-transform duration-300 ease-in-out group-hover:scale-105"
          role="img"
          aria-label="Hub의 프로필 이미지"
        >
          <span className="text-5xl text-charcoal-gray dark:text-off-white select-none">:)</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-3xl font-bold font-['Montserrat'] text-charcoal-gray dark:text-off-white">Hub</h2>
        <p className="text-secondary-gray dark:text-secondary-gray-dark text-lg mt-1 font-medium font-['Noto_Sans_KR']">Way Maker School 학생</p>
        <p className="text-secondary-gray dark:text-secondary-gray-dark text-base italic mt-4 font-['Noto_Sans_KR']">"넌 항상 이겨낼 수 있을 거야"</p>
        <p className="text-secondary-gray dark:text-secondary-gray-dark text-base mt-1 font-['Montserrat']">"You can always overcome"</p>
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div className="flex justify-around items-center my-6">
        {interests.map(({ name, Icon }) => (
          <div key={name} className="flex flex-col items-center space-y-2 group/interest">
            <Icon className="w-8 h-8 text-secondary-gray dark:text-secondary-gray-dark transition-colors duration-300 group-hover/interest:text-accent-teal" />
            <span className="text-sm text-secondary-gray dark:text-secondary-gray-dark font-['Noto_Sans_KR'] transition-colors duration-300 group-hover/interest:text-charcoal-gray dark:group-hover/interest:text-off-white">{name}</span>
          </div>
        ))}
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <a
        href="https://jason.pe.kr"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block w-full bg-accent-teal text-white font-bold py-3 px-6 rounded-lg
          transition-all duration-300 ease-in-out
          hover:bg-teal-500 hover:shadow-lg hover:scale-105
          focus:outline-none focus:ring-4 focus:ring-accent-teal/50
        "
      >
        리틀리 구경하기
      </a>
    </div>
  );
};

export default ProfileCard;