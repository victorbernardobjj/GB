import { useState, useEffect } from 'react';

const STORAGE_KEY = 'gracie_barra_custom_photos_v2';
const EVENT_NAME = 'gb-photos-updated';

export type PhotoCategory =
  | 'jiu-jitsu'
  | 'outras'
  | 'banners'
  | 'estrutura'
  | 'depoimentos'
  | 'identidade';

export interface ModalityPhotoSlot {
  slug: string;
  number: number;
  name: string;
  category: PhotoCategory;
  categoryLabel: string;
  targetFileName: string;
  recommendedSize: string;
  description: string;
  location: string;
  defaultSrc: string;
  fallbackSrc: string;
}

export const PHOTO_SLOTS: ModalityPhotoSlot[] = [
  // 🥋 JIU-JITSU GRACIE BARRA (5)
  {
    slug: '/pequenos-campeoes',
    number: 1,
    name: 'Pequenos Campeões (3 a 5 anos)',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'pequenos-campeoes.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Turma de 3 a 5 anos treinando de quimono no tatame com o professor.',
    location: 'Card na Página Inicial e Capa da página /pequenos-campeoes',
    defaultSrc: '/images/pequenos-campeoes.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '/jiu-jitsu-kids',
    number: 2,
    name: 'Jiu-Jitsu Kids (5 a 11 anos)',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'jiu-jitsu-kids.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Crianças de 5 a 11 anos praticando jiu-jitsu infantil com disciplina.',
    location: 'Card na Página Inicial e Capa da página /jiu-jitsu-kids',
    defaultSrc: '/images/jiu-jitsu-kids.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '/jiu-jitsu-juniores',
    number: 3,
    name: 'Jiu-Jitsu Juniores (11 a 15 anos)',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'jiu-jitsu-juniores.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Jovens e adolescentes de 11 a 15 anos focados no tatame.',
    location: 'Card na Página Inicial e Capa da página /jiu-jitsu-juniores',
    defaultSrc: '/images/jiu-jitsu-juniores.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '/jiu-jitsu-adulto',
    number: 4,
    name: 'Jiu-Jitsu Adulto (Misto & No-Gi)',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'jiu-jitsu-adulto.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Alunos adultos masculinos/mistos treinando posições ou técnicas.',
    location: 'Card na Página Inicial e Capa da página /jiu-jitsu-adulto',
    defaultSrc: '/images/jiu-jitsu-adulto.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1564415051543-cb73a7468103?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '/jiu-jitsu-feminino',
    number: 5,
    name: 'Jiu-Jitsu Feminino (Turmas Exclusivas)',
    category: 'jiu-jitsu',
    categoryLabel: 'Jiu-Jitsu GB',
    targetFileName: 'jiu-jitsu-feminino.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Alunas mulheres no tatame da Gracie Barra Centro JF.',
    location: 'Card na Página Inicial e Capa da página /jiu-jitsu-feminino',
    defaultSrc: '/images/jiu-jitsu-feminino.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80',
  },

  // 🥊 OUTRAS MODALIDADES & DEFESA (5)
  {
    slug: '/muay-thai',
    number: 6,
    name: 'Muay Thai (Team Recruta)',
    category: 'outras',
    categoryLabel: 'Lutas em Pé & Defesa',
    targetFileName: 'muay-thai.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Treino de Muay Thai com luvas, caneleiras, aparadores e manoplas.',
    location: 'Card na Página Inicial e Capa da página /muay-thai',
    defaultSrc: '/images/muay-thai.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '/karate',
    number: 7,
    name: 'Karatê Tradicional',
    category: 'outras',
    categoryLabel: 'Lutas em Pé & Defesa',
    targetFileName: 'karate.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Karatê Baby (2,5-5a), Infantil (6-11a) e Adulto: katas, kihon e postura.',
    location: 'Card na Página Inicial e Capa da página /karate',
    defaultSrc: '/images/karate.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '/mma',
    number: 8,
    name: 'MMA (Artes Marciais Mistas)',
    category: 'outras',
    categoryLabel: 'Lutas em Pé & Defesa',
    targetFileName: 'mma.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Treino de MMA combinando trocação em pé, wrestling e luta de solo.',
    location: 'Card na Página Inicial e Capa da página /mma',
    defaultSrc: '/images/mma.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '/krav-maga',
    number: 9,
    name: 'Krav Maga (Mestre Kobi)',
    category: 'outras',
    categoryLabel: 'Lutas em Pé & Defesa',
    targetFileName: 'krav-maga.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Defesa pessoal israelense sob a supervisão do Grão Mestre Kobi.',
    location: 'Card na Página Inicial e Capa da página /krav-maga',
    defaultSrc: '/images/krav-maga.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '/hapkido',
    number: 10,
    name: 'Hapkido Tradicional',
    category: 'outras',
    categoryLabel: 'Lutas em Pé & Defesa',
    targetFileName: 'hapkido.jpg',
    recommendedSize: '1200 x 800 px (Paisagem 3:2)',
    description: 'Arte marcial coreana tradicional com torções de punho e alavancas articulares.',
    location: 'Card na Página Inicial e Capa da página /hapkido',
    defaultSrc: '/images/hapkido.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?auto=format&fit=crop&w=1200&q=80',
  },

  // 🖼️ BANNERS PRINCIPAIS & CAPAS DE PÁGINAS (4)
  {
    slug: 'home-hero',
    number: 11,
    name: 'Banner Principal da Home (Hero)',
    category: 'banners',
    categoryLabel: 'Banners & Capas',
    targetFileName: 'hero-home.jpg',
    recommendedSize: '1920 x 1080 px (16:9 Panorâmica)',
    description: 'Foto de fundo cinematográfica exibida no topo da Página Inicial com o tatame cheio de alunos.',
    location: 'Topo da Página Inicial (Hero da Home)',
    defaultSrc: '/images/hero-home.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80',
  },
  {
    slug: 'horarios-hero',
    number: 12,
    name: 'Capa da Página de Horários',
    category: 'banners',
    categoryLabel: 'Banners & Capas',
    targetFileName: 'hero-horarios.jpg',
    recommendedSize: '1920 x 800 px (Panorâmica)',
    description: 'Foto de fundo da seção de abertura da página Quadro de Horários.',
    location: 'Topo da Página /horarios',
    defaultSrc: '/images/hero-horarios.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80',
  },
  {
    slug: 'uniforme-hero',
    number: 13,
    name: 'Capa da Página de Uniforme',
    category: 'banners',
    categoryLabel: 'Banners & Capas',
    targetFileName: 'hero-uniforme.jpg',
    recommendedSize: '1920 x 800 px (Panorâmica)',
    description: 'Foto de fundo da seção de abertura da página Regras de Uniforme Oficial.',
    location: 'Topo da Página /uniforme',
    defaultSrc: '/images/hero-uniforme.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80',
  },
  {
    slug: 'localizacao-hero',
    number: 14,
    name: 'Capa da Página de Localização',
    category: 'banners',
    categoryLabel: 'Banners & Capas',
    targetFileName: 'hero-localizacao.jpg',
    recommendedSize: '1920 x 800 px (Panorâmica)',
    description: 'Foto de fundo da seção de abertura da página Localização & Academia.',
    location: 'Topo da Página /localizacao',
    defaultSrc: '/images/hero-localizacao.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80',
  },

  // 🏢 ESTRUTURA DA ACADEMIA (4)
  {
    slug: 'estrutura-tatame',
    number: 15,
    name: 'Estrutura: Tatame Olímpico Oficial GB',
    category: 'estrutura',
    categoryLabel: 'Estrutura da Academia',
    targetFileName: 'estrutura-tatame.jpg',
    recommendedSize: '800 x 600 px (4:3)',
    description: 'Tatame de alta densidade revestido e higienizado para treinos seguros com amortecimento.',
    location: 'Galeria da Estrutura na página /localizacao',
    defaultSrc: '/images/estrutura-tatame.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'estrutura-vestiarios',
    number: 16,
    name: 'Estrutura: Vestiários Completos',
    category: 'estrutura',
    categoryLabel: 'Estrutura da Academia',
    targetFileName: 'estrutura-vestiarios.jpg',
    recommendedSize: '800 x 600 px (4:3)',
    description: 'Vestiários masculino e feminino com armários, ventilação e duchas aquecidas.',
    location: 'Galeria da Estrutura na página /localizacao',
    defaultSrc: '/images/estrutura-vestiarios.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'estrutura-convivencia',
    number: 17,
    name: 'Estrutura: Convivência & Recepção',
    category: 'estrutura',
    categoryLabel: 'Estrutura da Academia',
    targetFileName: 'estrutura-convivencia.jpg',
    recommendedSize: '800 x 600 px (4:3)',
    description: 'Ambiente climatizado para recepção de alunos e conforto para pais assistirem aos treinos.',
    location: 'Galeria da Estrutura na página /localizacao',
    defaultSrc: '/images/estrutura-convivencia.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'estrutura-striking',
    number: 18,
    name: 'Estrutura: Equipamentos de Striking & Sacos',
    category: 'estrutura',
    categoryLabel: 'Estrutura da Academia',
    targetFileName: 'estrutura-striking.jpg',
    recommendedSize: '800 x 600 px (4:3)',
    description: 'Área com sacos pesados, manoplas e aparadores de chute para Muay Thai e MMA.',
    location: 'Galeria da Estrutura na página /localizacao',
    defaultSrc: '/images/estrutura-striking.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
  },

  // ⭐ DEPOIMENTOS DE ALUNOS (3)
  {
    slug: 'depoimento-test-1',
    number: 19,
    name: 'Depoimento: Rodrigo Medeiros (Adulto)',
    category: 'depoimentos',
    categoryLabel: 'Depoimentos de Alunos',
    targetFileName: 'depoimento-rodrigo.jpg',
    recommendedSize: '300 x 300 px (Quadrado 1:1)',
    description: 'Foto de perfil do aluno Rodrigo Medeiros na seção de avaliações dos alunos.',
    location: 'Carrossel de Depoimentos na Página Inicial',
    defaultSrc: '/images/depoimento-rodrigo.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    slug: 'depoimento-test-2',
    number: 20,
    name: 'Depoimento: Camila Fernandes (Feminino)',
    category: 'depoimentos',
    categoryLabel: 'Depoimentos de Alunos',
    targetFileName: 'depoimento-camila.jpg',
    recommendedSize: '300 x 300 px (Quadrado 1:1)',
    description: 'Foto de perfil da aluna Camila Fernandes na seção de avaliações dos alunos.',
    location: 'Carrossel de Depoimentos na Página Inicial',
    defaultSrc: '/images/depoimento-camila.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
  },
  {
    slug: 'depoimento-test-3',
    number: 21,
    name: 'Depoimento: Lucas Siqueira (Pai Kids)',
    category: 'depoimentos',
    categoryLabel: 'Depoimentos de Alunos',
    targetFileName: 'depoimento-lucas.jpg',
    recommendedSize: '300 x 300 px (Quadrado 1:1)',
    description: 'Foto de perfil do aluno/pai Lucas Siqueira na seção de avaliações dos alunos.',
    location: 'Carrossel de Depoimentos na Página Inicial',
    defaultSrc: '/images/depoimento-lucas.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },

  // 🔺 LOGO & IDENTIDADE VISUAL (1)
  {
    slug: 'logo-gb',
    number: 22,
    name: 'Logo Oficial Gracie Barra',
    category: 'identidade',
    categoryLabel: 'Identidade Visual & Marca',
    targetFileName: 'logo-gb.png',
    recommendedSize: '512 x 512 px (PNG com fundo transparente ou SVG)',
    description: 'Símbolo triangular oficial da Gracie Barra com o octógono vermelho e logotipo.',
    location: 'Cabeçalho superior, Rodapé e Selos do site',
    defaultSrc: '/logo-gb.png',
    fallbackSrc: '/logo-gb.png',
  },
];

export function getStoredPhotos(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);

    const legacy = localStorage.getItem('gracie_barra_custom_photos_v1');
    if (legacy) {
      const parsed = JSON.parse(legacy);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      return parsed;
    }

    return {};
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

    // Automatically send to server to write to disk as default photo
    fetch('/api/save-default-photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [slug]: dataUrl }),
    }).catch((e) => console.warn('Could not save to disk immediately:', e));
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
    localStorage.removeItem('gracie_barra_custom_photos_v1');
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch (e) {
    console.error('Error resetting photos', e);
  }
}

/**
 * Syncs all custom photos currently in browser localStorage with the server disk.
 */
export async function syncStoredPhotosWithServer(): Promise<{ success: boolean; count: number }> {
  if (typeof window === 'undefined') return { success: false, count: 0 };
  const photos = getStoredPhotos();
  const count = Object.keys(photos).length;
  if (count === 0) return { success: true, count: 0 };

  try {
    const res = await fetch('/api/save-default-photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(photos),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    return { success: Boolean(result.success), count: result.saved?.length || count };
  } catch (err) {
    console.warn('Auto-sync photos to disk error:', err);
    return { success: false, count: 0 };
  }
}

/**
 * Compresses/resizes a user-selected image to prevent localStorage quota exhaustion.
 */
export function compressImage(file: File, maxDimension = 1920, quality = 0.88): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        const isPng = file.type === 'image/png';
        ctx.drawImage(img, 0, 0, width, height);
        try {
          const outputType = isPng ? 'image/png' : 'image/jpeg';
          const dataUrl = canvas.toDataURL(outputType, quality);
          resolve(dataUrl);
        } catch {
          resolve(e.target?.result as string);
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * React hook to get reactive photo for any slug.
 * Returns custom user-uploaded dataUrl if available, otherwise defaultSrc or fallbackSrc.
 */
export function useModalityPhoto(slug: string, customFallback?: string): string {
  const slot = PHOTO_SLOTS.find((s) => s.slug === slug);
  const preferred = slot?.defaultSrc || customFallback || slot?.fallbackSrc || '';

  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    const stored = getStoredPhotos();
    return stored[slug] || preferred;
  });

  useEffect(() => {
    const update = () => {
      const stored = getStoredPhotos();
      setPhotoSrc(stored[slug] || preferred);
    };

    window.addEventListener(EVENT_NAME, update);
    window.addEventListener('storage', update);

    return () => {
      window.removeEventListener(EVENT_NAME, update);
      window.removeEventListener('storage', update);
    };
  }, [slug, preferred]);

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
