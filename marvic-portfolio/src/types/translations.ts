export type Locale = 'en' | 'es';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    roles: string[];
    description: string;
    viewWork: string;
    letsTalk: string;
    scrollToExplore: string;
  };
  about: {
    title: string;
    introPart1: string;
    introPart2: string;
    introPart3: string;
    paragraph1: string;
    paragraph2: string;
    interests: string[];
    technicalSkills: string;
    educationLanguages: string;
    education: {
      cert1Title: string;
      cert1Details: string;
      cert2Title: string;
      cert2Details: string;
      languagesTitle: string;
      languagesDetails: string;
    };
  };
  projects: {
    title: string;
    filters: {
      all: string;
      fullstack: string;
      frontend: string;
      backend: string;
    };
  };
  experience: {
    title: string;
    jobs: {
      mews_acquiring: {
        position: string;
        description: string[];
      };
      mews_payments: {
        position: string;
        description: string[];
      };
      softtek_developer: {
        position: string;
        description: string[];
      };
      softtek_support: {
        position: string;
        description: string[];
      };
      pdub: {
        position: string;
        description: string[];
      };
      zemsania: {
        position: string;
        description: string[];
      };
      freelance: {
        position: string;
        description: string[];
      };
      plexus: {
        position: string;
        description: string[];
      };
    };
  };
  contact: {
    title: string;
    heading: string;
    description: string;
    sayHello: string;
    findMeOnline: string;
    footerBuiltWith: string;
    footerUsing: string;
    copyright: string;
  };
}
