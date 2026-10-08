export type DayOfWeek = 'Seg' | 'Ter' | 'Qua' | 'Qui' | 'Sex' | 'Sáb' | 'Dom';

export type ModalityColor = 'red' | 'blue' | 'black';

export type ModalityCategory = 
  | 'jiu-jitsu-adulto'
  | 'jiu-jitsu-feminino'
  | 'pequenos-campeoes'
  | 'jiu-jitsu-kids'
  | 'jiu-jitsu-juniores'
  | 'muay-thai'
  | 'boxe'
  | 'krav-maga'
  | 'hapkido';

export interface ScheduleItem {
  id: string;
  modality: string;
  slug: string;
  category: ModalityCategory;
  days: DayOfWeek[];
  times: string[];
  ageRange?: string;
  notes?: string;
  color: ModalityColor;
  accentPink?: boolean;
  isNew?: boolean;
  partner?: string;
  supervisor?: string;
}

export interface TimetableSlot {
  id: string;
  day: DayOfWeek;
  time: string; // e.g. "07:00", "09:00"
  endTime?: string;
  modality: string;
  category: ModalityCategory;
  color: ModalityColor;
  accentPink?: boolean;
  isNew?: boolean;
  slug: string;
  ageRange?: string;
  notes?: string;
}

export const DAYS_OF_WEEK: { key: DayOfWeek; label: string; fullLabel: string; index: number }[] = [
  { key: 'Seg', label: 'Seg', fullLabel: 'Segunda-feira', index: 1 },
  { key: 'Ter', label: 'Ter', fullLabel: 'Terça-feira', index: 2 },
  { key: 'Qua', label: 'Qua', fullLabel: 'Quarta-feira', index: 3 },
  { key: 'Qui', label: 'Qui', fullLabel: 'Quinta-feira', index: 4 },
  { key: 'Sex', label: 'Sex', fullLabel: 'Sexta-feira', index: 5 },
  { key: 'Sáb', label: 'Sáb', fullLabel: 'Sábado', index: 6 },
  { key: 'Dom', label: 'Dom', fullLabel: 'Domingo', index: 0 },
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: 'pequenos-campeoes',
    modality: 'Jiu-Jitsu Pequenos Campeões',
    slug: '/pequenos-campeoes',
    category: 'pequenos-campeoes',
    days: ['Ter', 'Qui'],
    times: ['09:00', '17:00'],
    ageRange: '3 a 5 anos',
    notes: 'Desenvolvimento motor lúdico e disciplina inicial',
    color: 'red',
  },
  {
    id: 'jiu-jitsu-kids',
    modality: 'Jiu-Jitsu Kids',
    slug: '/jiu-jitsu-kids',
    category: 'jiu-jitsu-kids',
    days: ['Seg', 'Qua', 'Sex'],
    times: ['09:00 (Seg/Qua)', '19:00 (Qua/Sex)'],
    ageRange: '5 a 11 anos',
    notes: 'Fundamentos, respeito, autoconfiança e antibullying',
    color: 'red',
  },
  {
    id: 'jiu-jitsu-juniores',
    modality: 'Jiu-Jitsu Juniores',
    slug: '/jiu-jitsu-juniores',
    category: 'jiu-jitsu-juniores',
    days: ['Seg', 'Qua', 'Sex'],
    times: ['16:00'],
    ageRange: '11 a 15 anos',
    notes: 'Técnica apurada, foco e valores para a juventude',
    color: 'red',
  },
  {
    id: 'jiu-jitsu-feminino',
    modality: 'Jiu-Jitsu Feminino',
    slug: '/jiu-jitsu-feminino',
    category: 'jiu-jitsu-feminino',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    times: ['07:00 (Ter/Qui)', '12:00 (Seg/Qua/Sex)', '19:00 (Seg/Ter/Qui)', '09:00 (Sáb)'],
    ageRange: 'A partir de 14 anos',
    notes: 'Turmas dedicadas para mulheres, defesa pessoal e empoderamento',
    color: 'red',
    accentPink: true,
  },
  {
    id: 'jiu-jitsu-adulto',
    modality: 'Jiu-Jitsu Adulto (Misto)',
    slug: '/jiu-jitsu-adulto',
    category: 'jiu-jitsu-adulto',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    times: ['07:00', '12:30', '18:30', '20:00', '10:00 (Sáb/Dom)'],
    ageRange: 'Adultos e jovens',
    notes: '[CONFIRMAR COM RECEPÇÃO: Horários sujeitos a confirmação]',
    color: 'red',
  },
  {
    id: 'muay-thai',
    modality: 'Muay Thai (Team Recruta)',
    slug: '/muay-thai',
    category: 'muay-thai',
    days: ['Seg', 'Ter', 'Qua', 'Qui'],
    times: ['20:15 (Seg/Qua)', '18:00 (Ter/Qui)'],
    ageRange: 'Adulto e juvenil',
    partner: 'Team Recruta',
    notes: 'A arte das 8 armas, condicionamento físico explosivo',
    color: 'blue',
  },
  {
    id: 'boxe',
    modality: 'Boxe Adulto',
    slug: '/boxe',
    category: 'boxe',
    days: ['Seg', 'Qua', 'Sex'],
    times: ['12:00 (Seg/Qua/Sex)', '20:00 (Seg/Qua)'],
    ageRange: 'Adulto',
    notes: 'Coordenação, queima calórica e alívio do estresse',
    color: 'blue',
  },
  {
    id: 'krav-maga',
    modality: 'Krav Maga',
    slug: '/krav-maga',
    category: 'krav-maga',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    times: ['18:00 (Seg/Qua)', '16:30 & 17:30 (Ter/Qui)', '08:30 às 10:30 (Sex)'],
    ageRange: 'A partir de 14 anos',
    supervisor: 'Grão Mestre Kobi',
    notes: 'Defesa pessoal israelense para situações reais',
    color: 'black',
  },
  {
    id: 'hapkido',
    modality: 'Hapkido',
    slug: '/hapkido',
    category: 'hapkido',
    days: ['Seg', 'Qui'],
    times: ['21:00'],
    ageRange: 'Adulto',
    notes: 'Defesa pessoal marcial coreana, torções e controle articular',
    color: 'black',
  },
];

// Expanded individual slots for timetable view
export const TIMETABLE_SLOTS: TimetableSlot[] = [
  // SEGUNDA
  { id: 'seg-0700-jj', day: 'Seg', time: '07:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'seg-0900-jjk', day: 'Seg', time: '09:00', modality: 'Jiu-Jitsu Kids', category: 'jiu-jitsu-kids', color: 'red', slug: '/jiu-jitsu-kids', ageRange: '5-11 anos' },
  { id: 'seg-1200-jjf', day: 'Seg', time: '12:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'seg-1200-box', day: 'Seg', time: '12:00', modality: 'Boxe Adulto', category: 'boxe', color: 'blue', slug: '/boxe' },
  { id: 'seg-1230-jj', day: 'Seg', time: '12:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'seg-1600-jjj', day: 'Seg', time: '16:00', modality: 'Jiu-Jitsu Juniores', category: 'jiu-jitsu-juniores', color: 'red', slug: '/jiu-jitsu-juniores', ageRange: '11-15 anos' },
  { id: 'seg-1800-km', day: 'Seg', time: '18:00', modality: 'Krav Maga', category: 'krav-maga', color: 'black', slug: '/krav-maga' },
  { id: 'seg-1830-jj', day: 'Seg', time: '18:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'seg-1900-jjf', day: 'Seg', time: '19:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'seg-2000-box', day: 'Seg', time: '20:00', modality: 'Boxe Adulto', category: 'boxe', color: 'blue', slug: '/boxe' },
  { id: 'seg-2000-jj', day: 'Seg', time: '20:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'seg-2015-mt', day: 'Seg', time: '20:15', modality: 'Muay Thai (Team Recruta)', category: 'muay-thai', color: 'blue', slug: '/muay-thai' },
  { id: 'seg-2100-hap', day: 'Seg', time: '21:00', modality: 'Hapkido', category: 'hapkido', color: 'black', slug: '/hapkido' },

  // TERÇA
  { id: 'ter-0700-jj', day: 'Ter', time: '07:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'ter-0700-jjf', day: 'Ter', time: '07:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'ter-0900-jjpc', day: 'Ter', time: '09:00', modality: 'Pequenos Campeões', category: 'pequenos-campeoes', color: 'red', slug: '/pequenos-campeoes', ageRange: '3-5 anos' },
  { id: 'ter-1230-jj', day: 'Ter', time: '12:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'ter-1630-km', day: 'Ter', time: '16:30', modality: 'Krav Maga', category: 'krav-maga', color: 'black', slug: '/krav-maga' },
  { id: 'ter-1700-jjpc', day: 'Ter', time: '17:00', modality: 'Pequenos Campeões', category: 'pequenos-campeoes', color: 'red', slug: '/pequenos-campeoes', ageRange: '3-5 anos' },
  { id: 'ter-1730-km', day: 'Ter', time: '17:30', modality: 'Krav Maga', category: 'krav-maga', color: 'black', slug: '/krav-maga' },
  { id: 'ter-1800-mt', day: 'Ter', time: '18:00', modality: 'Muay Thai (Team Recruta)', category: 'muay-thai', color: 'blue', slug: '/muay-thai' },
  { id: 'ter-1830-jj', day: 'Ter', time: '18:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'ter-1900-jjf', day: 'Ter', time: '19:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'ter-2000-jj', day: 'Ter', time: '20:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },

  // QUARTA
  { id: 'qua-0700-jj', day: 'Qua', time: '07:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'qua-0900-jjk', day: 'Qua', time: '09:00', modality: 'Jiu-Jitsu Kids', category: 'jiu-jitsu-kids', color: 'red', slug: '/jiu-jitsu-kids', ageRange: '5-11 anos' },
  { id: 'qua-1200-jjf', day: 'Qua', time: '12:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'qua-1200-box', day: 'Qua', time: '12:00', modality: 'Boxe Adulto', category: 'boxe', color: 'blue', slug: '/boxe' },
  { id: 'qua-1230-jj', day: 'Qua', time: '12:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'qua-1600-jjj', day: 'Qua', time: '16:00', modality: 'Jiu-Jitsu Juniores', category: 'jiu-jitsu-juniores', color: 'red', slug: '/jiu-jitsu-juniores', ageRange: '11-15 anos' },
  { id: 'qua-1800-km', day: 'Qua', time: '18:00', modality: 'Krav Maga', category: 'krav-maga', color: 'black', slug: '/krav-maga' },
  { id: 'qua-1830-jj', day: 'Qua', time: '18:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'qua-1900-jjk', day: 'Qua', time: '19:00', modality: 'Jiu-Jitsu Kids', category: 'jiu-jitsu-kids', color: 'red', slug: '/jiu-jitsu-kids', ageRange: '5-11 anos' },
  { id: 'qua-2000-box', day: 'Qua', time: '20:00', modality: 'Boxe Adulto', category: 'boxe', color: 'blue', slug: '/boxe' },
  { id: 'qua-2000-jj', day: 'Qua', time: '20:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'qua-2015-mt', day: 'Qua', time: '20:15', modality: 'Muay Thai (Team Recruta)', category: 'muay-thai', color: 'blue', slug: '/muay-thai' },

  // QUINTA
  { id: 'qui-0700-jj', day: 'Qui', time: '07:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'qui-0700-jjf', day: 'Qui', time: '07:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'qui-0900-jjpc', day: 'Qui', time: '09:00', modality: 'Pequenos Campeões', category: 'pequenos-campeoes', color: 'red', slug: '/pequenos-campeoes', ageRange: '3-5 anos' },
  { id: 'qui-1230-jj', day: 'Qui', time: '12:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'qui-1630-km', day: 'Qui', time: '16:30', modality: 'Krav Maga', category: 'krav-maga', color: 'black', slug: '/krav-maga' },
  { id: 'qui-1700-jjpc', day: 'Qui', time: '17:00', modality: 'Pequenos Campeões', category: 'pequenos-campeoes', color: 'red', slug: '/pequenos-campeoes', ageRange: '3-5 anos' },
  { id: 'qui-1730-km', day: 'Qui', time: '17:30', modality: 'Krav Maga', category: 'krav-maga', color: 'black', slug: '/krav-maga' },
  { id: 'qui-1800-mt', day: 'Qui', time: '18:00', modality: 'Muay Thai (Team Recruta)', category: 'muay-thai', color: 'blue', slug: '/muay-thai' },
  { id: 'qui-1830-jj', day: 'Qui', time: '18:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'qui-1900-jjf', day: 'Qui', time: '19:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'qui-2000-jj', day: 'Qui', time: '20:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'qui-2100-hap', day: 'Qui', time: '21:00', modality: 'Hapkido', category: 'hapkido', color: 'black', slug: '/hapkido' },

  // SEXTA
  { id: 'sex-0700-jj', day: 'Sex', time: '07:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'sex-0830-km', day: 'Sex', time: '08:30', endTime: '10:30', modality: 'Krav Maga (Especial)', category: 'krav-maga', color: 'black', slug: '/krav-maga', notes: '08:30 às 10:30' },
  { id: 'sex-1200-jjf', day: 'Sex', time: '12:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'sex-1200-box', day: 'Sex', time: '12:00', modality: 'Boxe Adulto', category: 'boxe', color: 'blue', slug: '/boxe' },
  { id: 'sex-1230-jj', day: 'Sex', time: '12:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'sex-1600-jjj', day: 'Sex', time: '16:00', modality: 'Jiu-Jitsu Juniores', category: 'jiu-jitsu-juniores', color: 'red', slug: '/jiu-jitsu-juniores', ageRange: '11-15 anos' },
  { id: 'sex-1830-jj', day: 'Sex', time: '18:30', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
  { id: 'sex-1900-jjk', day: 'Sex', time: '19:00', modality: 'Jiu-Jitsu Kids', category: 'jiu-jitsu-kids', color: 'red', slug: '/jiu-jitsu-kids', ageRange: '5-11 anos' },
  { id: 'sex-2000-jj', day: 'Sex', time: '20:00', modality: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },

  // SÁBADO
  { id: 'sab-0900-jjf', day: 'Sáb', time: '09:00', modality: 'Jiu-Jitsu Feminino', category: 'jiu-jitsu-feminino', color: 'red', accentPink: true, slug: '/jiu-jitsu-feminino' },
  { id: 'sab-1000-jj', day: 'Sáb', time: '10:00', modality: 'Jiu-Jitsu Adulto (Open Mat)', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },

  // DOMINGO
  { id: 'dom-1000-jj', day: 'Dom', time: '10:00', modality: 'Jiu-Jitsu Adulto (Treino Livre)', category: 'jiu-jitsu-adulto', color: 'red', slug: '/jiu-jitsu-adulto' },
];

export const SCHEDULE_FILTER_OPTIONS: { id: string; label: string; category?: ModalityCategory }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'jiu-jitsu-adulto', label: 'Jiu-Jitsu Adulto', category: 'jiu-jitsu-adulto' },
  { id: 'jiu-jitsu-feminino', label: 'Feminino', category: 'jiu-jitsu-feminino' },
  { id: 'pequenos-campeoes', label: 'Pequenos Campeões', category: 'pequenos-campeoes' },
  { id: 'jiu-jitsu-kids', label: 'Kids (5-11a)', category: 'jiu-jitsu-kids' },
  { id: 'jiu-jitsu-juniores', label: 'Juniores (11-15a)', category: 'jiu-jitsu-juniores' },
  { id: 'muay-thai', label: 'Muay Thai', category: 'muay-thai' },
  { id: 'boxe', label: 'Boxe', category: 'boxe' },
  { id: 'krav-maga', label: 'Krav Maga', category: 'krav-maga' },
  { id: 'hapkido', label: 'Hapkido', category: 'hapkido' },
];
