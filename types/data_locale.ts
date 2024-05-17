interface Navbar {
  title: {
    home: string,
    about: string,
    projects: string,
  },
}

interface Landing {
  title: {
    position: string,
    solution: string,
    skill: string,
  },
  description: string,
}

export interface DataLocale {
  [key: string]: {
    landing: Landing,
    navbar: Navbar,
  };
}
