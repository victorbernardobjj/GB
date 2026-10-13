import { useState, useEffect } from 'react';

const STORAGE_KEY = 'gracie_barra_custom_photos_v1';
const EVENT_NAME = 'gb-photos-updated';

export interface ModalityPhotoSlot {
  slug: string;
  number: number;
  name: string;
  category: 'jiu-jitsu' | 'outras';
  categoryLabel: string;
  targetFileName: string;
  recommendedSize: string;
  description: string;
}

export const PHOTO_SLOTS: ModalityPhotoSlot[] = [
  {
    slug: '/pequenos-campeoes',
    number: 1,
    name: 'Foto 1 – Pequenos Campeões',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'pequenos-campeoes.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Turma de 3 a 5 anos treinando no tatame com kimonos.',
  },
  {
    slug: '/jiu-jitsu-kids',
    number: 2,
    name: 'Foto 2 – Jiu-Jitsu Kids',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'jiu-jitsu-kids.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Crianças de 5 a 11 anos praticando jiu-jitsu infantil com disciplina.',
  },
  {
    slug: '/jiu-jitsu-juniores',
    number: 3,
    name: 'Foto 3 – Jiu-Jitsu Juniores',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'jiu-jitsu-juniores.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Jovens e adolescentes de 11 a 15 anos focados no tatame.',
  },
  {
    slug: '/jiu-jitsu-adulto',
    number: 4,
    name: 'Foto 4 – Jiu-Jitsu Adulto',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'jiu-jitsu-adulto.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Alunos adultos masculinos/mistos treinando posições ou técnicas.',
  },
  {
    slug: '/jiu-jitsu-feminino',
    number: 5,
    name: 'Foto 5 – Jiu-Jitsu Feminino',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'jiu-jitsu-feminino.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Alunas mulheres no tatame da Gracie Barra Centro JF.',
  },
  {
    slug: '/muay-thai',
    number: 6,
    name: 'Foto 6 – Muay Thai (Team Recruta)',
    category: 'outras',
    categoryLabel: 'Outras Modalidades',
    targetFileName: 'muay-thai.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Treino de Muay Thai com luvas, caneleiras, aparadores e manoplas.',
  },
  {
    slug: '/karate',
    number: 7,
    name: 'Foto 7 – Karatê Tradicional',
    category: 'outras',
    categoryLabel: 'Outras Modalidades',
    targetFileName: 'karate.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Karatê Baby (2,5-5a), Infantil (6-11a) e Adulto: katas, kihon e postura marcial.',
  },
  {
    slug: '/mma',
    number: 8,
    name: 'Foto 8 – MMA (Artes Marciais Mistas)',
    category: 'outras',
    categoryLabel: 'Outras Modalidades',
    targetFileName: 'mma.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Treino de MMA combinando trocação em pé, wrestling e luta de solo.',
  },
  {
    slug: '/krav-maga',
    number: 9,
    name: 'Foto 9 – Krav Maga',
    category: 'outras',
    categoryLabel: 'Outras Modalidades',
    targetFileName: 'krav-maga.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Defesa pessoal israelense sob a supervisão do Grão Mestre Kobi.',
  },
  {
    slug: '/hapkido',
    number: 10,
    name: 'Foto 10 – Hapkido',
    category: 'outras',
    categoryLabel: 'Outras Modalidades',
    targetFileName: 'hapkido.jpg',
    recommendedSize: '1200 x 800 px (Paisagem)',
    description: 'Arte marcial coreana tradicional com torções de punho e alavancas articulares.',
  },
];

export function getStoredPhotos(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Error reading custom photos from localStorage', e);
    return {};
  }
}

export function saveStoredPhoto(slug: string, dataUrl: string): void {
  try {
    const current = getStoredPhotos();
    current[slug] = dataUrl;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch (e) {
    console.error('Error saving custom photo', e);
  }
}

export function removeStoredPhoto(slug: string): void {
  try {
    const current = getStoredPhotos();
    delete current[slug];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch (e) {
    console.error('Error removing custom photo', e);
  }
}

export function resetAllStoredPhotos(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch (e) {
    console.error('Error resetting photos', e);
  }
}

/**
 * React hook to get reactive photo for a modality.
 * Returns custom user-uploaded base64 if available, otherwise default path.
 */
export function useModalityPhoto(slug: string, defaultSrc: string): string {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    const stored = getStoredPhotos();
    return stored[slug] || defaultSrc;
  });

  useEffect(() => {
    const update = () => {
      const stored = getStoredPhotos();
      setPhotoSrc(stored[slug] || defaultSrc);
    };

    window.addEventListener(EVENT_NAME, update);
    window.addEventListener('storage', update);

    return () => {
      window.removeEventListener(EVENT_NAME, update);
      window.removeEventListener('storage', update);
    };
  }, [slug, defaultSrc]);

  return photoSrc;
}

/**
 * Hook to access all custom photos at once.
 */
export function useAllModalityPhotos(): Record<string, string> {
  const [photos, setPhotos] = useState<Record<string, string>>(getStoredPhotos);

  useEffect(() => {
    const update = () => setPhotos(getStoredPhotos());
    window.addEventListener(EVENT_NAME, update);
    window.addEventListener('storage', update);

    return () => {
      window.removeEventListener(EVENT_NAME, update);
      window.removeEventListener('storage', update);
    };
  }, []);

  return photos;
}
