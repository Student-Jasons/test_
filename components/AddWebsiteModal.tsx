
import React, { useState, useEffect } from 'react';
import { Website } from '../types';
import Button from './Button';

interface AddWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newWebsite: Omit<Website, 'id' | 'imageUrl'>) => void;
}

const AddWebsiteModal: React.FC<AddWebsiteModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName('');
      setUrl('');
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !url.trim()) {
      setError('모든 필드를 입력해주세요.');
      return;
    }
    try {
      new URL(url);
    } catch (_) {
      setError('유효한 URL을 입력해주세요.');
      return;
    }
    onAdd({ name, url });
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-dark-card w-full max-w-md m-4 p-6 rounded-2xl shadow-2xl transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-6 text-dark-text">새 웹사이트 추가</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="website-name" className="block text-sm font-medium text-dark-text-secondary mb-1">
                웹사이트 이름
              </label>
              <input
                type="text"
                id="website-name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="예: 내 포트폴리오"
                className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-dark-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="website-url" className="block text-sm font-medium text-dark-text-secondary mb-1">
                URL
              </label>
              <input
                type="text"
                id="website-url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full bg-dark-bg border border-dark-border rounded-lg p-3 text-dark-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition"
              />
            </div>
          </div>
          {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
          <div className="mt-8 flex justify-end space-x-4">
            <Button type="button" variant="secondary" onClick={onClose}>
              취소
            </Button>
            <Button type="submit">
              추가하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWebsiteModal;
