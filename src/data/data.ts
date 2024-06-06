/**
 * @typedef {Object} KeySentence
 * @property {string} verb - The verb of the sentence
 * @property {string} noun - The noun of the sentence
 */

/**
 * @typedef {Object} MainCoverData
 * @property {string} greeting - The greeting text
 * @property {string} title - The title text
 * @property {string} subtitle - The subtitle text
 * @property {KeySentence[]} keySentences - The key sentences
 * @property {string} description - The description text
 */

/** @type {MainCoverData} */

export interface KeySentence {
  verb: string;
  noun: string | string[];
}

export interface MainCoverData {
  greeting: string;
  title: string;
  subtitle: string;
  keySentences?: KeySentence[];
  description: string;
  socialMediaLinks?: socialMediaLinks[];
}

export interface socialMediaLinks {
  name: string;
  url: string;
  imgUrl: string;
}

export const socialMediaLinks: socialMediaLinks[] = [
  {
    name: "+542236687794",
    imgUrl: "assets/images/whatsapp.png",
    url: "https://api.whatsapp.com/send?phone=542236687794&text=Hola%20Mat%C3%ADas%2C",
  },
  {
    name: "matiasjgelpi@gmail.com",
    imgUrl: "assets/images/mail.png",
    url: "matiasjgelpi@gmail.com",
  },
  {
    name: "linkedin.com/in/matiasjgelpi",
    imgUrl: "assets/images/linkedin.svg",
    url: "https://www.linkedin.com/in/matiasjgelpi/",
  },

  //   {
  //     name: "matiasjgelpi",
  //     imgUrl: "assets/images/instagram.svg",
  //     url: "https://www.instagram.com/matiasjgelpi/",
  //   },
  {
    name: "matiasjgelpi",
    imgUrl: "assets/images/github.svg",
    url: "https://github.com/matiasjgelpi",
  },
];

export const keySentences: KeySentence[] = [
  {
    verb: "Estudié:",
    noun: ["javascript", "html", "css", "sass", "react"],
  },

  {
    verb: "Actualmente trabajo con: ",
    noun: ["angular", "typescript", "git", "github"],
  },
  {
    verb: "Tengo nociones de: ",
    noun: [
      "node",
      "mongo",
      "postgresql",
      "docker",
      "graphql",
      "java",
      "nextjs",
    ],
  },
  {
    verb: "Estoy aprendiendo: ",
    noun: ["tailwindcss", "astro", "nestjs", "spring"],
  },

  // {
  //   verb: "Me gusta: ",
  //   noun: "Trabajar en equipo (y tambíen solo) y compartir conocimientos, ",
  // },
  // {
  //   verb: "y también me gusta: ",
  //   noun: "El cine y los videojuegos, cocinar y los perros",
  // },
];

export const mainCoverData: MainCoverData = {
  greeting: "Hola soy,",
  title: "Desarrollador Full Stack",
  subtitle: "(Sobre todo front pero mejorando en el back)",
  description:
    "Soy un entusiasta de la tecnología, siempre dispuesto a enfrentar nuevos desafíos.",
  socialMediaLinks,
};
