export interface UniformHotspot {
  id: string;
  xPercent: number; // 0-100
  yPercent: number; // 0-100
  title: string;
  description: string;
}

export interface UniformItem {
  id: string;
  name: string;
  description: string;
  requiredFor: string;
  notes?: string;
  hotspotLabel: string;
}

export interface UniformCategoryRule {
  id: 'masculino' | 'feminino' | 'kids-masculino' | 'kids-feminino';
  label: string;
  gi: {
    title: string;
    description: string;
    items: UniformItem[];
    hotspots: UniformHotspot[];
  };
  noGi: {
    title: string;
    description: string;
    items: UniformItem[];
    hotspots: UniformHotspot[];
  };
}

export const UNIFORM_DATA: UniformCategoryRule[] = [
  {
    id: 'masculino',
    label: 'Masculino',
    gi: {
      title: 'Uniforme Gi (Com Kimono)',
      description: 'Obrigatório para todos os treinos de kimono. Todas as peças devem conter o patch oficial GB.',
      items: [
        {
          id: 'kimono-m',
          name: 'Kimono Oficial GB (Vagui e Calça)',
          description: 'Kimono oficial nas cores branco ou azul royal, com patch GB bordado no peito e costas.',
          requiredFor: 'Treinos de Gi',
          hotspotLabel: 'Kimono Oficial GB',
        },
        {
          id: 'rashguard-m-gi',
          name: 'Rash Guard Oficial GB (Por baixo)',
          description: 'Uso obrigatório por baixo do kimono para proteção e higiene durante os treinos.',
          requiredFor: 'Uso interno',
          hotspotLabel: 'Rash Guard Oficial GB',
        },
        {
          id: 'faixa-m',
          name: 'Faixa Oficial GB',
          description: 'Faixa correspondente à sua graduação atual com a ponta preta da metodologia GB.',
          requiredFor: 'Graduação',
          hotspotLabel: 'Faixa Oficial GB',
        },
      ],
      hotspots: [
        { id: 'h1', xPercent: 50, yPercent: 32, title: 'Vagui GB Oficial', description: 'Tecido trançado reforçado com emblema triangular GB' },
        { id: 'h2', xPercent: 50, yPercent: 52, title: 'Faixa Oficial', description: 'Faixa com tarja preta correspondente ao seu nível' },
        { id: 'h3', xPercent: 42, yPercent: 78, title: 'Calça de Ripstop GB', description: 'Reforço duplo nos joelhos e amarração com cordão' },
      ],
    },
    noGi: {
      title: 'Uniforme No-Gi (Sem Kimono)',
      description: 'Desenvolvido especificamente para treinos sem kimono, garantindo máxima mobilidade e segurança.',
      items: [
        {
          id: 'rashguard-m-nogi',
          name: 'Rash Guard Oficial GB No-Gi',
          description: 'Camiseta de compressão com proteção UV e acabamento anti-assadura, oficial da Gracie Barra.',
          requiredFor: 'Treinos No-Gi',
          hotspotLabel: 'Rash Guard No-Gi',
        },
        {
          id: 'bermuda-m',
          name: 'Bermuda de Luta Oficial GB',
          description: 'Bermuda sem bolsos externos ou zíperes, com elastano entrepernas para não prender os movimentos.',
          requiredFor: 'Treinos No-Gi',
          hotspotLabel: 'Bermuda Oficial GB',
        },
      ],
      hotspots: [
        { id: 'hn1', xPercent: 50, yPercent: 36, title: 'Rash Guard de Alta Compressão', description: 'Ajuste anatômico oficial GB que não rasga nas pegadas' },
        { id: 'hn2', xPercent: 50, yPercent: 68, title: 'Bermuda Boardshort GB', description: 'Sem velcro externo cortante, com fenda lateral ergonômica' },
      ],
    },
  },
  {
    id: 'feminino',
    label: 'Feminino',
    gi: {
      title: 'Uniforme Gi Feminino',
      description: 'Modelagem ajustada ao corpo feminino, garantindo conforto térmico, segurança e liberdade total.',
      items: [
        {
          id: 'kimono-f',
          name: 'Kimono Oficial GB Feminino',
          description: 'Corte anatômico feminino nos padrões oficiais Gracie Barra (branco ou azul royal).',
          requiredFor: 'Treinos de Gi',
          hotspotLabel: 'Kimono Feminino GB',
        },
        {
          id: 'rashguard-f-gi',
          name: 'Rash Guard Oficial GB Feminina',
          description: 'Obrigatório o uso da rash guard oficial por baixo do kimono para total discrição e higiene.',
          requiredFor: 'Uso interno',
          hotspotLabel: 'Rash Guard Feminina',
        },
        {
          id: 'faixa-f',
          name: 'Faixa Oficial GB',
          description: 'Faixa regulamentada de graduação oficial GB.',
          requiredFor: 'Graduação',
          hotspotLabel: 'Faixa GB',
        },
      ],
      hotspots: [
        { id: 'hf1', xPercent: 50, yPercent: 30, title: 'Kimono Anatômico Feminino', description: 'Gola higiênica e corte projetado para a silhueta feminina' },
        { id: 'hf2', xPercent: 50, yPercent: 52, title: 'Faixa de Graduação', description: 'Símbolo da sua evolução no tatame' },
        { id: 'hf3', xPercent: 45, yPercent: 78, title: 'Calça Leve e Reforçada', description: 'Conforto total para mobilidade de pernas e guarda' },
      ],
    },
    noGi: {
      title: 'Uniforme No-Gi Feminino',
      description: 'Peças exclusivas de alta performance para aulas sem kimono e condicionamento físico.',
      items: [
        {
          id: 'rashguard-f-nogi',
          name: 'Rash Guard Oficial GB Feminina',
          description: 'Modelagem feminina com tecido antibacteriano e secagem ultrarrápida.',
          requiredFor: 'Treinos No-Gi',
          hotspotLabel: 'Rash Guard No-Gi Feminina',
        },
        {
          id: 'legging-f',
          name: 'Legging Oficial GB e/ou Short Oficial GB',
          description: 'Calça legging de alta densidade sem transparência ou bermuda de compressão oficial GB.',
          requiredFor: 'Treinos No-Gi',
          hotspotLabel: 'Legging / Short Oficial GB',
        },
      ],
      hotspots: [
        { id: 'hfn1', xPercent: 50, yPercent: 35, title: 'Top / Rash Guard GB Feminina', description: 'Suporte seguro para movimentos de solo e giros' },
        { id: 'hfn2', xPercent: 50, yPercent: 70, title: 'Legging Oficial GB de Compressão', description: 'Cós alto que não enrola, tecido opaco com selo GB' },
      ],
    },
  },
  {
    id: 'kids-masculino',
    label: 'Kids Masculino',
    gi: {
      title: 'Uniforme Gi Kids Masculino',
      description: 'Para Pequenos Campeões e Kids. Material leve, resistente e confortável para as brincadeiras e treinos.',
      items: [
        {
          id: 'kimono-km',
          name: 'Kimono Oficial GB Infantil',
          description: 'Kimono infantil pré-encolhido com bordados oficiais Gracie Barra Kids.',
          requiredFor: 'Treinos de Gi',
          hotspotLabel: 'Kimono GB Kids',
        },
        {
          id: 'rashguard-km',
          name: 'Rash Guard Oficial GB Kids',
          description: 'Camiseta de proteção para evitar atrito do quimono na pele sensível da criança.',
          requiredFor: 'Uso por baixo do quimono',
          hotspotLabel: 'Rash Guard GB Kids',
        },
        {
          id: 'faixa-km',
          name: 'Faixa Oficial GB Kids',
          description: 'Sistema de graduação infantil com ponta branca ou listrada conforme a metodologia GBK.',
          requiredFor: 'Graduação Infantil',
          hotspotLabel: 'Faixa GBK',
        },
      ],
      hotspots: [
        { id: 'hkm1', xPercent: 50, yPercent: 32, title: 'Vagui GBK Leve', description: 'Confortável para os primeiros passos da criança' },
        { id: 'hkm2', xPercent: 50, yPercent: 54, title: 'Faixa Infantil GBK', description: 'Sistema de incentivo e estrelinhas de comportamento' },
        { id: 'hkm3', xPercent: 45, yPercent: 78, title: 'Calça Elástica GB Kids', description: 'Ajuste fácil para a autonomia da criança no vestiário' },
      ],
    },
    noGi: {
      title: 'Uniforme No-Gi Kids Masculino',
      description: 'Perfeito para aulas de preparação física e treinos de verão.',
      items: [
        {
          id: 'rashguard-km-nogi',
          name: 'Rash Guard Oficial GB Kids',
          description: 'Proteção contra arranhões e sensação térmica agradável.',
          requiredFor: 'Treinos No-Gi Kids',
          hotspotLabel: 'Rash Guard Kids',
        },
        {
          id: 'bermuda-km-nogi',
          name: 'Bermuda Oficial GB Kids',
          description: 'Bermuda flexível sem botões ou zíperes para total segurança.',
          requiredFor: 'Treinos No-Gi Kids',
          hotspotLabel: 'Bermuda Kids',
        },
      ],
      hotspots: [
        { id: 'hkmn1', xPercent: 50, yPercent: 38, title: 'Rash Guard Kids', description: 'Estampa oficial GB durável e elástica' },
        { id: 'hkmn2', xPercent: 50, yPercent: 68, title: 'Bermuda Kids GB', description: 'Cintura macia com elástico confortável' },
      ],
    },
  },
  {
    id: 'kids-feminino',
    label: 'Kids Feminino',
    gi: {
      title: 'Uniforme Gi Kids Feminino',
      description: 'Modelagem desenvolvida para as meninas com leveza, segurança e total liberdade de movimentos.',
      items: [
        {
          id: 'kimono-kf',
          name: 'Kimono Oficial GB Kids Feminino',
          description: 'Kimono com tecido resistente e toque suave, padrão oficial Gracie Barra Kids.',
          requiredFor: 'Treinos de Gi',
          hotspotLabel: 'Kimono GB Kids',
        },
        {
          id: 'rashguard-kf',
          name: 'Rash Guard Oficial GB Kids Feminina',
          description: 'Camiseta de proteção interna que evita qualquer desconforto na pele.',
          requiredFor: 'Uso interno',
          hotspotLabel: 'Rash Guard Kids',
        },
        {
          id: 'faixa-kf',
          name: 'Faixa Oficial GB Kids',
          description: 'Faixa de graduação da metodologia oficial infantil GBK.',
          requiredFor: 'Graduação',
          hotspotLabel: 'Faixa GBK',
        },
      ],
      hotspots: [
        { id: 'hkf1', xPercent: 50, yPercent: 32, title: 'Kimono GB Kids Meninas', description: 'Durabilidade máxima para muitas brincadeiras e treinos' },
        { id: 'hkf2', xPercent: 50, yPercent: 54, title: 'Faixa GBK Infantil', description: 'Reconhecimento do mérito e disciplina da aluna' },
        { id: 'hkf3', xPercent: 45, yPercent: 78, title: 'Calça Reforçada GBK', description: 'Costura quádrupla e liberdade total para se movimentar' },
      ],
    },
    noGi: {
      title: 'Uniforme No-Gi Kids Feminino',
      description: 'Conjunto confortável e seguro para práticas dinâmicas e treinos lúdicos.',
      items: [
        {
          id: 'rashguard-kf-nogi',
          name: 'Rash Guard Oficial GB Kids Feminina',
          description: 'Camiseta de proteção oficial com visual esportivo e vibrante.',
          requiredFor: 'Treinos No-Gi Kids',
          hotspotLabel: 'Rash Guard Kids',
        },
        {
          id: 'legging-kf-nogi',
          name: 'Legging Oficial GB Kids / Short Oficial GB Kids',
          description: 'Calça legging ou short infantil oficial para proteger os joelhos nos treinos de tatame.',
          requiredFor: 'Treinos No-Gi Kids',
          hotspotLabel: 'Legging / Short Kids',
        },
      ],
      hotspots: [
        { id: 'hkfn1', xPercent: 50, yPercent: 38, title: 'Rash Guard Kids Feminina', description: 'Secagem rápida e ajuste perfeito' },
        { id: 'hkfn2', xPercent: 50, yPercent: 70, title: 'Legging Infantil GB Oficial', description: 'Protege a pele do contato direto com o tatame' },
      ],
    },
  },
];
