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
  noun: string;
}

export interface MainCoverData {
  greeting: string;
  title: string;
  subtitle: string;
  keySentences: KeySentence[];
  description: string;
}

export interface socialMediaLinks {
  name: string;
  url: string;
  imgUrl: string;
}

export const mainCoverData: MainCoverData = {
  greeting: "Hola soy,",
  title: "Desarrollador Full Stack",
  subtitle: "(Sobre todo front pero mejorando en el back)",
  keySentences: [
    {
      verb: "Se: ",
      noun: "JavaScript (ES6+), HTML, CSS (Sass), React (y Next.js),",
    },
    {
      verb: "Se: ",
      noun: "Inglés (Upper Intermediate o B2) ",
    },
    {
      verb: "Trabajo con: ",
      noun: "Angular, Git, Metodologías ágiles",
    },
    {
      verb: "Tengo nociones de: ",
      noun: "Node,  SQL, NoSQL, Docker, GraphQL",
    },
    {
      verb: "Aprendiendo: ",
      noun: "Tailwindcss, Astro, NestJs y mucho más ...",
    },

    {
      verb: "Me gusta: ",
      noun: "Trabajar en equipo (y tambíen solo) y compartir conocimientos, ",
    },
    {
      verb: "y también me gusta: ",
      noun: "El cine y los videojuegos, cocinar y los perros",
    },
  ],
  description:
    "Soy un entusiasta de la tecnología, y estoy buscando mi próximo desafío.",
};

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
