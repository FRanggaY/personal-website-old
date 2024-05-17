import { DataLocale } from "@/types/data_locale";

const engData = {
  landing: {
    title: {
      position: "Software & Data Engineer",
      solution: 'Solutions',
      skill: 'Skills'
    },
    description: 'I am a passionate learner in application development.',
  },
  navbar: {
    title: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
    },
  }
}

const indData = {
  landing: {
    title: {
      position: "Software & Data Engineer",
      solution: 'Solusi',
      skill: 'Kemampuan'
    },
    description: 'Memiliki minat dalam pengembangan aplikasi.',
  },
  navbar: {
    title: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
    },
  }
}

export const dataLocale: DataLocale = {
  en: engData,
  id: indData
};


export const validLocale = (locale: string) => {
  return locale === 'en' || locale === 'id' ? locale : 'en'
} 
