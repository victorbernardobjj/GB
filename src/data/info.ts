export interface GymInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    full: string;
  };
  phones: {
    whatsappGB: string; // E.164 format for wa.me links
    whatsappGBFormatted: string;
    whatsappTeamRecruta: string;
    whatsappTeamRecrutaFormatted: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
    googleReviewUrl: string;
    hashtag: string;
  };
  maps: {
    embedUrl: string;
    directionsUrl: string;
  };
  stats: {
    studentsCount: string;
    yearsOperating: string;
    modalitiesCount: number;
    freeTrialPercent: string;
  };
}

export const GYM_INFO: GymInfo = {
  name: "Gracie Barra Centro Juiz de Fora",
  tagline: "Jiu-Jitsu para todos. Do primeiro treino à faixa preta.",
  address: {
    street: "Av. Barão do Rio Branco",
    number: "267",
    neighborhood: "Manuel Honório",
    city: "Juiz de Fora",
    state: "MG",
    full: "Av. Barão do Rio Branco, 267 – Manuel Honório, Juiz de Fora – MG",
  },
  phones: {
    whatsappGB: "5532999998877", // [NÚMERO GB - SUBSTITUIR PELO NÚMERO OFICIAL]
    whatsappGBFormatted: "(32) 99999-8877",
    whatsappTeamRecruta: "5532988887766", // [NÚMERO TEAM RECRUTA - SUBSTITUIR PELO NÚMERO OFICIAL]
    whatsappTeamRecrutaFormatted: "(32) 98888-7766",
  },
  social: {
    instagramHandle: "@graciebarracentrojf", // [SUBSTITUIR PELO @ REAL]
    instagramUrl: "https://instagram.com/graciebarracentrojf",
    googleReviewUrl: "https://g.page/r/gracie-barra-centro-jf/review", // [URL GOOGLE AVALIAÇÕES]
    hashtag: "#GRACIEBARRACENTROJF",
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.5891398869854!2d-43.3518!3d-21.7583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b5c2a3d0b2f%3A0x4464c204910cf7b!2sAv.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%20267%20-%20Manoel%20Hon%C3%B3rio%2C%20Juiz%20de%20Fora%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
    directionsUrl: "https://maps.google.com/?q=Av.+Barão+do+Rio+Branco,+267+-+Manuel+Honório,+Juiz+de+Fora+-+MG",
  },
  stats: {
    studentsCount: "350+", // [NÚMERO DE ALUNOS]
    yearsOperating: "8+", // [NÚMERO DE ANOS DE ACADEMIA]
    modalitiesCount: 6,
    freeTrialPercent: "100%",
  },
};

export const getWhatsAppLink = (message: string, phone: string = GYM_INFO.phones.whatsappGB): string => {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};
