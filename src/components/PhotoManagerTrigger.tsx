import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { PhotoManagerModal } from './PhotoManagerModal';
import { useAllModalityPhotos, PHOTO_SLOTS } from '../utils/photoManager';

export const PhotoManagerTrigger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const customPhotos = useAllModalityPhotos();
  const count = Object.keys(customPhotos).length;
  const total = PHOTO_SLOTS.length;

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('gb-open-photo-manager', handleOpen);
    return () => window.removeEventListener('gb-open-photo-manager', handleOpen);
  }, []);

  return (
    <>
      {/* Floating button at bottom left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 bg-black/90 hover:bg-black text-white px-3.5 py-2.5 rounded-full border border-white/20 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 text-xs font-semibold"
          title={`Clique para adicionar ou trocar fotos das ${total} modalidades`}
        >
          <div className="relative">
            <Camera className="w-4 h-4 text-gb-red group-hover:rotate-12 transition-transform" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-black" />
            )}
          </div>
          <span className="hidden sm:inline">Fotos do Site</span>
          <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-slate-300">
            {count}/{total}
          </span>
        </button>
      </div>

      <PhotoManagerModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
