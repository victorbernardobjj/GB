export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso ter experiência prévia para começar?',
    answer: 'Não! Mais de 80% dos nossos alunos chegam à Gracie Barra Centro Juiz de Fora sem nunca ter praticado nenhuma arte marcial. Nossa metodologia é modular e estruturada em turmas com acompanhamento dedicado para quem está começando do zero absoluto.',
  },
  {
    id: 'faq-2',
    question: 'Como funciona a aula experimental?',
    answer: 'Para agendar sua aula experimental, basta clicar no botão do WhatsApp, nos informar a modalidade de seu interesse e o melhor dia. Nossa equipe tira todas as suas dúvidas sobre valores, planos e reserva seu horário no tatame.',
  },
  {
    id: 'faq-3',
    question: 'Preciso comprar o quimono oficial antes da primeira aula?',
    answer: 'Não para a aula experimental! Você pode comparecer com uma roupa de treino confortável e sem zíperes metálicos (bermuda esportiva e camiseta de malha ou lycra). Se decidir se matricular, nossa equipe te orientará sobre a aquisição do uniforme oficial Gracie Barra.',
  },
  {
    id: 'faq-4',
    question: 'Qual a idade mínima para começar?',
    answer: 'A partir de 3 anos completos! Temos o programa pioneiro Pequenos Campeões (3 a 5 anos), além de turmas Kids (5 a 11 anos) e Juniores (11 a 15 anos), todas ministradas com metodologia pedagógica própria para cada estágio de desenvolvimento.',
  },
  {
    id: 'faq-5',
    question: 'Posso treinar mais de uma modalidade na academia?',
    answer: 'Com certeza! Muitos alunos combinam o Jiu-Jitsu com Muay Thai, Boxe ou Krav Maga para um preparo físico e técnico completo. Temos planos promocionais integrados que contemplam múltiplas artes marciais. Fale com a nossa equipe no WhatsApp!',
  },
  {
    id: 'faq-6',
    question: 'Tenho receio de me machucar. Como é a segurança no tatame?',
    answer: 'A segurança dos alunos é a nossa regra número 1. A metodologia Gracie Barra é mundialmente famosa por prezar pelo respeito ao parceiro de treino, eliminação de atitudes agressivas e progressão técnica controlada pelos professores faixas-pretas.',
  },
];

export const PARENTS_FAQS: FAQItem[] = [
  {
    id: 'pfaq-1',
    question: 'O Jiu-Jitsu deixa a criança agressiva?',
    answer: 'Pelo contrário! O Jiu-Jitsu canaliza a energia natural da criança para o autocontrole, respeito mútuo e disciplina. Nossos alunos aprendem desde o primeiro dia que a técnica é para defesa e nunca para agredir os colegas na escola.',
  },
  {
    id: 'pfaq-2',
    question: 'Os pais podem assistir às aulas?',
    answer: 'Sim! Nossa academia conta com área de convivência e visão direta para o tatame. Incentivamos que pais e mães acompanhem de perto o progresso, as amizades e a alegria dos pequenos.',
  },
  {
    id: 'pfaq-3',
    question: 'Como funciona a aula experimental para crianças?',
    answer: 'É uma aula divertida e sem pressão. O professor apresenta o tatame de forma lúdica, inclui a criança em brincadeiras de integração e avalia seu conforto para que a experiência seja memorável e estimulante.',
  },
  {
    id: 'pfaq-4',
    question: 'Qual o valor e como adquirir o kimono infantil?',
    answer: 'Na aula experimental a criança vem com bermuda leve e camiseta. Na matrícula, temos kits oficiais infantis com tamanhos sob medida e condições especiais na secretaria da academia.',
  },
];

export const STRIKING_FAQS: FAQItem[] = [
  {
    id: 'sfaq-1',
    question: 'Vou levar pancadas na cabeça nas primeiras aulas de Muay Thai ou Boxe?',
    answer: 'De forma alguma. Para iniciantes, o foco é 100% no condicionamento cardiovascular, queima de calorias, postura e bater nas manoplas/sacos com segurança. Sparring (luta) é opcional e apenas para alunos avançados autorizados.',
  },
  {
    id: 'sfaq-2',
    question: 'Preciso ter luvas próprias logo na aula experimental?',
    answer: 'Para a sua primeira aula experimental podemos disponibilizar equipamentos higienizados de apoio. Recomendamos trazer roupa leve de treino, garrafa de água e toalha.',
  },
  {
    id: 'sfaq-3',
    question: 'Quem supervisiona o Muay Thai?',
    answer: 'As aulas de Muay Thai são ministradas em parceria oficial com a Team Recruta, equipe de referência em artes marciais de contato na região de Juiz de Fora.',
  },
];

export const KRAV_MAGA_FAQS: FAQItem[] = [
  {
    id: 'kmfaq-1',
    question: 'Qual é a supervisão do Krav Maga na GB Centro JF?',
    answer: 'Nosso Krav Maga segue a linhagem oficial com supervisão direta do Grão Mestre Kobi, garantindo a autenticidade e a máxima fidelidade às técnicas originais israelenses de defesa pessoal.',
  },
  {
    id: 'kmfaq-2',
    question: 'Mulheres e jovens podem treinar Krav Maga?',
    answer: 'Sim, e é altamente indicado! O Krav Maga foi projetado justamente para que pessoas menores ou fisicamente mais fracas possam neutralizar agressores maiores usando pontos vitais, alavancas e reflexos naturais.',
  },
  {
    id: 'kmfaq-3',
    question: 'Quais são os horários das aulas de Krav Maga?',
    answer: 'Temos turmas às segundas e quartas às 18h, terças e quintas às 16:30 e 17:30, e sextas-feiras pela manhã (08:30 às 10:30). Consulte nossa recepção para verificar a melhor turma para você.',
  },
];
