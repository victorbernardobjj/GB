export interface ModalityDetail {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  ageRange: string;
  scheduleSummary: string;
  color: 'red' | 'blue' | 'black';
  accentPink?: boolean;
  isNew?: boolean;
  partner?: string;
  supervisor?: string;
  heroImage: string;
  cardImage: string;
  heroAlt: string;
  badge?: string;
  audienceCategory: 'crianca' | 'jovem' | 'mulher' | 'adulto' | 'defesa-pessoal';
  description: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  howIsClass: {
    step: number;
    title: string;
    description: string;
  }[];
  whatToBring?: string[];
  giVsNoGi?: {
    giTitle: string;
    giDesc: string;
    noGiTitle: string;
    noGiDesc: string;
  };
  quote?: string;
}

export const MODALITIES: ModalityDetail[] = [
  {
    slug: '/pequenos-campeoes',
    name: 'Pequenos Campeões',
    tagline: 'Para crianças de 3 a 5 anos: disciplina, diversão e desenvolvimento em um ambiente seguro e acolhedor.',
    oneLiner: 'Disciplina, respeito e diversão desde os 3 anos.',
    ageRange: '3 a 5 anos',
    scheduleSummary: 'Terça e Quinta, 09h e 17h',
    color: 'red',
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Crianças pequenas treinando de quimono no tatame com professor',
    badge: '3 a 5 anos',
    audienceCategory: 'crianca',
    description: 'Aqui nascem os Pequenos Campeões do Jiu-Jitsu! O programa GBK para a primeira infância introduz os conceitos do jiu-jitsu através de brincadeiras dinâmicas, circuitos de agilidade e noções essenciais de convivência.',
    benefits: [
      { title: 'Coordenação Motora', description: 'Atividades que refinam equilíbrio, lateralidade, agilidade e tônus muscular infantil.', icon: 'Zap' },
      { title: 'Respeito e Disciplina', description: 'Aprender a ouvir instruções, esperar a vez, cuidar dos colegas e valorizar o mestre.', icon: 'ShieldCheck' },
      { title: 'Amizade e Socialização', description: 'Ambiente saudável e lúdico onde laços de confiança e empatia são cultivados.', icon: 'Users' },
      { title: 'Confiança e Segurança', description: 'Desenvolvimento emocional que dá segurança para a criança explorar o mundo sem medo.', icon: 'Award' },
    ],
    howIsClass: [
      { step: 1, title: 'Brincadeiras e Aquecimento', description: 'Exercícios lúdicos que despertam o corpo e a atenção com muita diversão.' },
      { step: 2, title: 'Circuitos e Fundamentos', description: 'Movimentos naturais do jiu-jitsu ensinados como desafios empolgantes.' },
      { step: 3, title: 'Valores e Celebração', description: 'Momento de roda para falar de atitudes positivas em casa e na escolinha.' },
    ],
  },
  {
    slug: '/jiu-jitsu-kids',
    name: 'Jiu-Jitsu Kids',
    tagline: 'Para crianças de 5 a 11 anos: mais que um esporte, uma jornada de disciplina, amizade e confiança.',
    oneLiner: 'Disciplina, respeito e diversão desde os 5 anos.',
    ageRange: '5 a 11 anos',
    scheduleSummary: 'Seg e Qua 09h; Qua e Sex 19h',
    color: 'red',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Crianças praticando jiu-jitsu infantil com disciplina no tatame',
    badge: '5 a 11 anos',
    audienceCategory: 'crianca',
    description: 'Aqui formamos pequenos grandes campeões! O programa desenvolve habilidades atléticas, noções de autodefesa não-violenta e blindagem emocional contra o bullying.',
    benefits: [
      { title: 'Antibullying e Defesa Pessoal', description: 'Ferramentas de postura e controle para neutralizar agressões sem agredir.', icon: 'ShieldCheck' },
      { title: 'Foco na Escola e em Casa', description: 'Crianças que treinam jiu-jitsu têm maior capacidade de concentração e autocontrole.', icon: 'Target' },
      { title: 'Respeito e Companheirismo', description: 'Cultura de honra, respeito aos mais graduados e apoio mútuo entre parceiros.', icon: 'Users' },
      { title: 'Superação de Limites', description: 'Aprender que errar faz parte do aprendizado e que a constância traz a vitória.', icon: 'Trophy' },
    ],
    howIsClass: [
      { step: 1, title: 'Aquecimento Físico Completo', description: 'Mobilidade articular, corrida e drills que preparam o corpo infantil.' },
      { step: 2, title: 'Técnica e Defesa Pessoal', description: 'Instrução passo a passo de posições de controle e alavancas suaves.' },
      { step: 3, title: 'Luta Guiada e Diversão', description: 'Aplicação prática segura com supervisão atenta dos faixas-pretas.' },
    ],
  },
  {
    slug: '/jiu-jitsu-juniores',
    name: 'Jiu-Jitsu Juniores',
    tagline: 'Para jovens de 11 a 15 anos: jiu-jitsu como ferramenta de foco, respeito e superação.',
    oneLiner: 'Foco, respeito e superação para a fase de transição.',
    ageRange: '11 a 15 anos',
    scheduleSummary: 'Seg, Qua e Sex às 16h',
    color: 'red',
    heroImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Jovens adolescentes treinando jiu-jitsu com foco e dedicação',
    badge: '11 a 15 anos',
    audienceCategory: 'jovem',
    description: 'Aqui começa a jornada dos futuros campeões! Uma fase crucial em que os jovens precisam de direção, disciplina, grupo saudável e autoconfiança inabalável.',
    benefits: [
      { title: 'Foco e Liderança', description: 'Desenvolvimento do senso de responsabilidade e liderança pessoal.', icon: 'Target' },
      { title: 'Condicionamento Físico', description: 'Fortalecimento muscular, velocidade de raciocínio e saúde para o corpo jovem.', icon: 'Zap' },
      { title: 'Comunidade Positiva', description: 'Ambiente longe de influências nocivas e focado no crescimento sadio.', icon: 'Users' },
      { title: 'Caminho Competitivo', description: 'Preparação para campeonatos regionais e nacionais para quem deseja competir.', icon: 'Trophy' },
    ],
    howIsClass: [
      { step: 1, title: 'Drills de Movimentação', description: 'Agilidade e transições rápidas essenciais para o jiu-jitsu moderno.' },
      { step: 2, title: 'Técnica Avançada e Estratégia', description: 'Estudo minucioso de passagens, raspagens e finalizações seguras.' },
      { step: 3, title: 'Rola e Condicionamento', description: 'Treino de combate dinâmico com regras rígidas de segurança.' },
    ],
  },
  {
    slug: '/jiu-jitsu-adulto',
    name: 'Jiu-Jitsu Adulto',
    tagline: 'Aprenda defesa pessoal, ganhe condicionamento e faça parte de uma equipe mundial.',
    oneLiner: 'Defesa pessoal, condicionamento e uma comunidade que te apoia.',
    ageRange: 'Adultos e jovens (a partir de 16 anos)',
    scheduleSummary: 'Seg a Sex: 07:00, 12:30, 18:30, 20:00 • Sáb e Dom: 10:00',
    color: 'red',
    heroImage: 'https://images.unsplash.com/photo-1564415051543-cb73a7468103?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1564415051543-cb73a7468103?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Treino de jiu-jitsu adulto na academia Gracie Barra Centro Juiz de Fora',
    audienceCategory: 'adulto',
    description: 'O Jiu-Jitsu é a arte suave que usa alavancas e técnica para superar força e tamanho. É um dos esportes mais completos para o corpo e para a mente, ensinado com a metodologia oficial Gracie Barra.',
    benefits: [
      { title: 'Defesa Pessoal Eficiente', description: 'Aprenda a neutralizar oponentes maiores e mais pesados no chão com técnica.', icon: 'ShieldCheck' },
      { title: 'Condicionamento Extremo', description: 'Queima até 1.000 calorias por treino, ganhando flexibilidade, força e fôlego.', icon: 'Flame' },
      { title: 'Válvula Antiestresse', description: 'Desconecte da correria do dia a dia e encontre clareza mental total.', icon: 'HeartPulse' },
      { title: 'Irmandade e Apoio', description: 'Um ambiente onde todos treinam juntos e comemoram a evolução do parceiro.', icon: 'Users' },
    ],
    howIsClass: [
      { step: 1, title: 'Aquecimento Funcional', description: '15 minutos de aquecimento específico com movimentação de solo e mobilidade.' },
      { step: 2, title: 'Técnica do Dia (GB Curriculum)', description: 'Demonstração minuciosa de posições e repetições orientadas pelo professor.' },
      { step: 3, title: 'Treino Prático (Rola)', description: 'Aplicação ao vivo das posições em rounds monitorados com respeito mútuo.' },
    ],
    giVsNoGi: {
      giTitle: 'Gi (Com Kimono)',
      giDesc: 'Treino clássico com kimono oficial Gracie Barra. Mais técnico, com controle de pegadas, golas e faixas.',
      noGiTitle: 'No-Gi (Sem Kimono)',
      noGiDesc: 'Treino dinâmico com rash guard oficial e bermuda. Jogo rápido, focado em alavancas de corpo e esgrima.',
    },
  },
  {
    slug: '/jiu-jitsu-feminino',
    name: 'Jiu-Jitsu Feminino',
    tagline: 'Lugar de mulher também é no tatame! Aprenda a se defender, evoluir e se superar.',
    oneLiner: 'Lugar de mulher também é no tatame.',
    ageRange: 'A partir de 14 anos',
    scheduleSummary: 'Ter/Qui 07h • Seg/Qua/Sex 12h • Seg/Ter/Qui 19h • Sáb 09h',
    color: 'red',
    accentPink: true,
    heroImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Mulher atleta amarrando a faixa de jiu-jitsu sorridente no tatame',
    badge: 'Turmas Exclusivas',
    audienceCategory: 'mulher',
    description: 'Um ambiente acolhedor, com turmas femininas e professores preparados para te receber. Aqui você treina no seu ritmo, sem julgamentos, cercada de mulheres fortes que se apoiam.',
    benefits: [
      { title: 'Defesa Pessoal Real', description: 'Técnicas desenvolvidas para anular agressões comuns sofridas por mulheres.', icon: 'ShieldCheck' },
      { title: 'Autoconfiança e Postura', description: 'Sinta-se segura no seu corpo, na rua, no trabalho e na vida diária.', icon: 'Award' },
      { title: 'Força, Saúde e Tonificação', description: 'Gasto calórico intenso com fortalecimento do core, pernas e braços.', icon: 'Flame' },
      { title: 'Comunidade Feminina', description: 'Amizade verdadeira entre mulheres que compartilham os mesmos desafios.', icon: 'Users' },
    ],
    howIsClass: [
      { step: 1, title: 'Aquecimento e Consciência Corporal', description: 'Exercícios dinâmicos que preparam o corpo sem impacto prejudicial.' },
      { step: 2, title: 'Técnicas de Fuga e Alavancas', description: 'Aprenda a escapar de pegadas, imobilizações e situações de solo.' },
      { step: 3, title: 'Prática Entre Mulheres', description: 'Treino com parceiras do mesmo nível de força e evolução constante.' },
    ],
  },
  {
    slug: '/muay-thai',
    name: 'Muay Thai (Team Recruta)',
    tagline: 'Transforme seu condicionamento físico. Alivie o estresse e aprenda a arte do Muay Thai com segurança.',
    oneLiner: 'A arte das oito armas, com segurança e técnica.',
    ageRange: 'Adulto e juvenil',
    scheduleSummary: 'Seg e Qua 20:15 • Ter e Qui 18:00',
    color: 'blue',
    partner: 'Team Recruta',
    badge: 'Team Recruta',
    heroImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Atleta de Muay Thai treinando chutes e golpes nos aparadores',
    audienceCategory: 'adulto',
    description: 'O Muay Thai é a milenar Arte das Oito Armas, que utiliza punhos, cotovelos, joelhos e canelas em uma combinação poderosa de técnica marcial e preparação física de alta intensidade.',
    benefits: [
      { title: 'Cardio Explosivo', description: 'Excelente queima de gordura e ganho brutal de resistência cardiovascular.', icon: 'Flame' },
      { title: 'Arte das Oito Armas', description: 'Domínio de cotoveladas, joelhadas, socos e chutes com biomecânica correta.', icon: 'Zap' },
      { title: 'Alívio Total de Estresse', description: 'Bater na manopla e nos sacos pesados limpa a mente das tensões do dia.', icon: 'HeartPulse' },
      { title: 'Coordenação e Reflexo', description: 'Ganho impressionante de velocidade de reação, agilidade e tônus muscular.', icon: 'Target' },
    ],
    howIsClass: [
      { step: 1, title: 'Pular Corda e Aquecimento', description: 'Elevação rápida da frequência cardíaca e trabalho de agilidade.' },
      { step: 2, title: 'Técnica e Combinações', description: 'Instrução das combinações de socos, chutes, joelhos e defesas.' },
      { step: 3, title: 'Trabalho em Pares (Manoplas)', description: 'Treino de impacto controlado em aparadores e sacos com parceiro.' },
    ],
    whatToBring: ['Roupa de treino leve e confortável', 'Garrafa de água', 'Toalha de rosto', 'Luvas e bandagens (orientamos na matrícula)'],
  },
  {
    slug: '/boxe',
    name: 'Boxe Adulto',
    tagline: 'Transforme seu condicionamento físico. Alivie o estresse e aprenda a nobre arte com segurança.',
    oneLiner: 'Alivie o estresse e transforme seu condicionamento.',
    ageRange: 'Adulto',
    scheduleSummary: 'Seg, Qua e Sex 12h • Seg e Qua 20h',
    color: 'blue',
    heroImage: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Treinamento de boxe com luvas e manoplas de foco na academia',
    audienceCategory: 'adulto',
    description: 'A Nobre Arte ensinada para quem busca alta performance física, desenvolvimento de reflexos afiados e domínio do jogo de pernas e golpes clássicos.',
    benefits: [
      { title: 'Footwork e Esquivas', description: 'Aprenda a se movimentar com elegância, equilíbrio e esquivas refinadas.', icon: 'Zap' },
      { title: 'Potência e Velocidade', description: 'Jabs, diretos, cruzados e ganchos desferidos com precisão cirúrgica.', icon: 'Flame' },
      { title: 'Fortalecimento do Core', description: 'Giro de tronco e movimentação constante que definem abdômen e costas.', icon: 'Activity' },
      { title: 'Para Todos os Níveis', description: 'Desde quem nunca calçou uma luva até praticantes experientes.', icon: 'CheckCircle' },
    ],
    howIsClass: [
      { step: 1, title: 'Aquecimento Específico', description: 'Pular corda, sombras de boxe e ativação de ombros e pernas.' },
      { step: 2, title: 'Fundamentos e Combos', description: 'Aperfeiçoamento da guarda, rotação de quadril e esquivas.' },
      { step: 3, title: 'Manopla e Saco de Pancadas', description: 'Aplicação contínua de combinações sob a orientação do treinador.' },
    ],
    whatToBring: ['Roupas esportivas leves', 'Tênis de treino ou sapatilha', 'Garrafa d’água e toalha'],
  },
  {
    slug: '/krav-maga',
    name: 'Krav Maga',
    tagline: 'Mais horários, mais chances de você evoluir no Krav Maga sob a supervisão do Grão Mestre Kobi.',
    oneLiner: 'Defesa pessoal prática para situações reais.',
    ageRange: 'A partir de 14 anos',
    scheduleSummary: 'Seg/Qua 18h (NOVO) • Ter/Qui 16:30 & 17:30 • Sex 08:30 às 10:30',
    color: 'black',
    supervisor: 'Supervisão Grão Mestre Kobi',
    badge: 'NOVO HORÁRIO',
    isNew: true,
    heroImage: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Demonstração de defesa pessoal e técnicas de Krav Maga',
    audienceCategory: 'defesa-pessoal',
    description: 'Sistema israelense de defesa pessoal reconhecido mundialmente. Simples, rápido e objetivo: ensina qualquer pessoa a voltar para casa em segurança diante de perigos urbanos.',
    benefits: [
      { title: 'Situações Reais', description: 'Treinamento focado em tentativas de assalto, agarramentos, estrangulamentos e agressões armadas.', icon: 'ShieldCheck' },
      { title: 'Reflexos Naturais', description: 'Movimentos baseados em respostas instintivas do corpo humano, fáceis de memorizar.', icon: 'Zap' },
      { title: 'Controle sob Pressão', description: 'Treino de tomada de decisão rápida e controle do estresse e do medo.', icon: 'Target' },
      { title: 'Supervisão Oficial', description: 'Ensino rigoroso com a credibilidade e supervisão do Grão Mestre Kobi.', icon: 'Award' },
    ],
    howIsClass: [
      { step: 1, title: 'Ativação e Postura Preventiva', description: 'Consciência situacional, postura de guarda e desescalada verbal.' },
      { step: 2, title: 'Técnicas de Neutralização', description: 'Golpes em pontos vulneráveis e defesas contra ataques surpresa.' },
      { step: 3, title: 'Simulação de Cenários', description: 'Treinamento de resposta rápida sob estímulos de adrenalina controlada.' },
    ],
  },
  {
    slug: '/hapkido',
    name: 'Hapkido',
    tagline: 'Defesa pessoal tradicional com técnicas refinadas de alavancas, torções e controle.',
    oneLiner: 'Técnicas de defesa, alavancas e controle articular.',
    ageRange: 'Adulto e juvenil',
    scheduleSummary: 'Segunda e Quinta às 21:00',
    color: 'black',
    heroImage: 'https://images.unsplash.com/photo-1509563457123-ab5432811fd8?auto=format&fit=crop&w=1200&q=80',
    cardImage: 'https://images.unsplash.com/photo-1509563457123-ab5432811fd8?auto=format&fit=crop&w=800&q=80',
    heroAlt: 'Praticante de Hapkido demonstrando torção de punho e controle',
    audienceCategory: 'defesa-pessoal',
    description: 'Arte marcial coreana que reúne chutes circulares, torções de punho, imobilizações e redirecionamento da força do adversário. Excelente para quem busca disciplina tradicional e defesa técnica.',
    benefits: [
      { title: 'Alavancas e Torções', description: 'Neutralize o oponente imobilizando articulações sem necessidade de força bruta.', icon: 'ShieldCheck' },
      { title: 'Equilíbrio e Postura', description: 'Técnicas circulares que utilizam o impulso do agressor contra ele próprio.', icon: 'Target' },
      { title: 'Flexibilidade e Coordenação', description: 'Amplo repertório de chutes, defesas e esquivas harmoniosas.', icon: 'Activity' },
      { title: 'Filosofia Marcial', description: 'Tradição oriental focada na calma mental, honra e autocontrole.', icon: 'Award' },
    ],
    howIsClass: [
      { step: 1, title: 'Respiração e Aquecimento Marcial', description: 'Alongamento das articulações de punho, ombro e pernas.' },
      { step: 2, title: 'Estudo das Alavancas (Dan)', description: 'Prática minuciosa de chaves de braço, pulsos e desvios de força.' },
      { step: 3, title: 'Projeções e Quedas Seguras', description: 'Treino de amortecimento de quedas e finalização controlada.' },
    ],
  },
];
