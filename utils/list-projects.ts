import { ListProject } from "interfaces";

const resources = `${process.env.ASSET_PREFIX}/img/projects`;
const GITHUB_API = `https://github.com/brandon-gs`;
const GITHUB_PAGE = "https://brandon-gs.github.io";

const getThumbnail = (title: string) => {
  return `${resources}/${title}/preview.png`;
};

export const featuredProjects: ListProject = [
  {
    title: "storymash",
    thumbnail: getThumbnail("storymash"),
    finished: false,
    descriptionEn:
      "This web app is a social network for readers and writers. You can see stories of all users, modify your profile, create stories with its differents chapters, leave comments, select your favorite stories, follow users, and more features!",
    descriptionEs:
      "Esta aplicación web es una red social para lectores y escritores. Puedes ver historias escritas por todos los usuarios, modificar tu perfil, crear historias con sus diferentes capítulos, dejar comentarios, seleccionar tus historias favoritas, seguir usuarios, y ¡Más funciones!",
    githubURL: `${GITHUB_API}/storymash`,
    launchURL: "",
    pageURL: "",
    skills: ["Typescript", "Next.js", "Express", "mongodb"].reverse(),
  },
  {
    title: "findmash",
    thumbnail: getThumbnail("findmash"),
    finished: true,
    descriptionEn:
      "A pathfinding web app that allows you to visualize algorithms to find the shortest path. You can create a maze and see how the algorithm solves it.",
    descriptionEs:
      "Una aplicación web de búsqueda de rutas que le permite visualizar algunos algoritmos para encontrar la ruta más corta. Puedes crear un laberinto y ver como lo resuelve el algoritmo.",
    githubURL: `${GITHUB_API}/findmash`,
    launchURL: `${GITHUB_PAGE}/findmash`,
    pageURL: "",
    skills: ["React", "HTML5", "CSS3"],
  },
  {
    title: "sortmash",
    thumbnail: getThumbnail("sortmash"),
    finished: true,
    descriptionEn:
      "A web app for visualizing sort algorithms, you can see the differences between the different algorithms.",
    descriptionEs:
      "Una aplicación web para visualizar algoritmos de ordenamiento, puedes ver las diferencias entre los distintos algoritmos.",
    githubURL: `${GITHUB_API}/sortmash`,
    launchURL: `${GITHUB_PAGE}/sortmash`,
    pageURL: "",
    skills: ["React", "Redux", "JQuery"].reverse(),
  },
  {
    title: "distrito pyme",
    thumbnail: getThumbnail("distrito_pyme"),
    finished: true,
    descriptionEn:
      "I collaborated in the creation fo this project, this project is a digital platform that seeks to turn financing into a simple process and without bureaucratic procedures.",
    descriptionEs:
      "Colaboré en la creación de este proyecto, este proyecto es una plataforma digital que busca convertir el financiamiento en un proceso simple y sin trámites burocráticos.",
    githubURL: "",
    launchURL: "https://distritopyme.com/",
    pageURL: "",
    skills: ["React", "Redux", "Node.js", "Express", "Mongodb"],
  },
];
