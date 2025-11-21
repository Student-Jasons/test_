import React, { useEffect, useState, useRef, useCallback } from 'react';

// Catch the Dot - simple timed game
const GRID_SIZE = 4; // 4x4 grid
const GAME_TIME = 20; // seconds

const GeneratedPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startGame = useCallback(() => {
    setScore(0);
    setTimeLeft(GAME_TIME);
    setRunning(true);
  }, []);

  const stopGame = useCallback(() => {
    setRunning(false);
    setActiveIndex(null);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!running) return;

    // change active cell every 700ms
    intervalRef.current = window.setInterval(() => {
      const next = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
      setActiveIndex(next);
    }, 700);

    // countdown timer
    const timer = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // stop game when reaches 0
          setRunning(false);
          if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          window.clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      window.clearInterval(timer);
    };
  }, [running]);

  const handleClick = (index: number) => {
    if (!running) return;
    if (index === activeIndex) {
      setScore(s => s + 1);
      // immediately move the dot to make it slightly harder
      const next = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
      setActiveIndex(next === index ? (index + 1) % (GRID_SIZE * GRID_SIZE) : next);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-dark-card rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold">Catch the Dot</h1>
            <p className="text-dark-text-secondary">시간 내에 점(dot)을 많이 클릭하세요!</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-dark-text-secondary">시간</div>
            <div className="text-2xl font-bold">{timeLeft}s</div>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-dark-text-secondary">점수: <span className="font-semibold">{score}</span></div>
          <div>
            {!running && (
              <button onClick={startGame} className="px-4 py-2 bg-brand-primary text-white rounded">시작</button>
            )}
            {running && (
              <button onClick={stopGame} className="px-4 py-2 bg-red-600 text-white rounded">중지</button>
            )}
          </div>
        </div>

        <div className={`grid grid-cols-${GRID_SIZE} gap-3`}>
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`h-20 rounded-lg flex items-center justify-center border ${i === activeIndex ? 'bg-brand-primary text-white scale-105' : 'bg-dark-bg text-dark-text-secondary'}`}
            >
              {i === activeIndex ? '●' : ''}
            </button>
          ))}
        </div>

        <div className="mt-6 text-sm text-dark-text-secondary">
          <p>게임이 끝나면 <span className="font-semibold">시작</span> 버튼으로 재시작하세요.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedPage;
