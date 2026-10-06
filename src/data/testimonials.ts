export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  modality: string;
  quote: string;
  avatarUrl?: string;
  badge: string; // e.g., "Google Avaliações"
  note: string; // [SUBSTITUIR POR AVALIAÇÕES REAIS]
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Rodrigo Medeiros',
    rating: 5,
    timeAgo: 'há 2 semanas',
    modality: 'Jiu-Jitsu Adulto',
    quote: 'Ambiente excelente, professores com didática impecável e recepção muito acolhedora. Comecei sem saber nada e hoje o tatame é minha segunda casa. Recomendo de olhos fechados!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    badge: 'Avaliação verificada no Google',
    note: '[SUBSTITUIR POR AVALIAÇÕES REAIS]',
  },
  {
    id: 'test-2',
    author: 'Camila Fernandes',
    rating: 5,
    timeAgo: 'há 1 mês',
    modality: 'Jiu-Jitsu Feminino & Muay Thai',
    quote: 'Treinar na GB Centro JF foi a melhor decisão para minha saúde mental e física. As turmas femininas são muito unidas, os professores respeitosos e o espaço é super limpo e seguro!',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    badge: 'Avaliação verificada no Google',
    note: '[SUBSTITUIR POR AVALIAÇÕES REAIS]',
  },
  {
    id: 'test-3',
    author: 'Lucas Siqueira',
    rating: 5,
    timeAgo: 'há 3 semanas',
    modality: 'Pai de Aluno (Kids)',
    quote: 'Meu filho de 6 anos entrou tímido e hoje tem uma disciplina e foco impressionantes, tanto em casa quanto na escola. Os professores têm uma paciência fantástica com as crianças.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    badge: 'Avaliação verificada no Google',
    note: '[SUBSTITUIR POR AVALIAÇÕES REAIS]',
  },
];
