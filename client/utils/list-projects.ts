import { ListProject, Project } from "interfaces";

const resources = `/img/projects`;
const GITHUB_API = `https://github.com/brandon-gs`;
const GITHUB_PAGE = "https://brandon-gs.github.io";

const getThumbnail = (title: string, extension = "png") => {
  return `${resources}/${title}/preview.${extension}`;
};

export const currentProjects: ListProject = [];

/** Returns the live URL only when the site is still online. */
export const getLaunchURL = (project: Project): string =>
  project.offline ? "" : project.launchURL;

export const featuredProjects: ListProject = [
  {
    title: "Cyberpuerta",
    thumbnail: getThumbnail("cyberpuerta", "webp"),
    finished: true,
    isProfessional: true,
    isMobileApp: true,
    isWebApp: true,
    descriptionEs:
      "Tienda en línea de tecnología en México. Desarrollo la tienda web con Vue/Nuxt y la app de compra para iOS y Android con React Native.",
    descriptionEn:
      "A consumer electronics online store in Mexico. I build the web store with Vue/Nuxt and the iOS and Android shopping app with React Native.",
    githubURL: ``,
    launchURL: `https://www.cyberpuerta.mx/`,
    pageURL: "",
    skills: ["Vue / Nuxt", "React Native", "Storybook", "Jest", "Java"],
  },
  {
    title: "Compa Financial",
    thumbnail: getThumbnail("compa"),
    finished: true,
    isProfessional: true,
    isWebApp: true,
    descriptionEs:
      "Plataforma de crédito hipotecario y financiamiento colectivo. Participé en el desarrollo web con React, Next.js y Tailwind.",
    descriptionEn:
      "A mortgage lending and crowdfunding platform. I worked on the web app with React, Next.js and Tailwind.",
    githubURL: ``,
    launchURL: `https://compa.financial/`,
    pageURL: "",
    skills: ["React", "Next.js", "Tailwind", "AWS"],
  },
  {
    title: "Monopolio",
    thumbnail: getThumbnail("monopolio"),
    finished: true,
    isProfessional: true,
    isWebApp: true,
    descriptionEs:
      "Portal inmobiliario con datos de mercado e inteligencia artificial. Participé en el desarrollo web con React, Next.js y Tailwind.",
    descriptionEn:
      "A real estate portal with market data and AI insights. I worked on the web app with React, Next.js and Tailwind.",
    githubURL: "",
    launchURL: `https://monopolio.com.mx/`,
    pageURL: "",
    skills: ["React", "Next.js", "Tailwind", "AWS"],
  },
  {
    title: "Kaax",
    thumbnail: getThumbnail("kaax"),
    finished: true,
    isProfessional: true,
    isWebApp: true,
    descriptionEs:
      "Plataforma para comprar y vender divisas con tipos de cambio en tiempo real. Participé en el desarrollo del frontend con React.",
    descriptionEn:
      "A platform to buy and sell currencies with real-time exchange rates. I worked on the frontend with React.",
    githubURL: ``,
    launchURL: `https://www.gokaax.com/`,
    // Site down since at least 2026-10-18 (www points to a deleted AWS load balancer).
    offline: true,
    pageURL: "",
    skills: ["React", "Material UI", "AWS"],
  },
  {
    title: "Distrito Pyme",
    thumbnail: getThumbnail("distrito_pyme"),
    finished: true,
    isProfessional: true,
    isWebApp: true,
    descriptionEs:
      "Plataforma de financiamiento para pymes. Desarrollé interfaces en React y llevé la puntuación de velocidad de carga de 75 a 90 con lazy loading.",
    descriptionEn:
      "A financing platform for small businesses. I built React interfaces and raised the load-speed score from 75 to 90 with lazy loading.",
    githubURL: "",
    launchURL: "https://distritopyme.com/",
    // Site down since 2026-10-18 (Cloudflare 522). Re-check and remove `offline` if it comes back.
    offline: true,
    archiveURL: "https://web.archive.org/web/20241129003505/https://distritopyme.com/",
    pageURL: "",
    skills: ["React", "Redux", "Express", "MongoDB"],
  },
  {
    title: "Almerimur",
    thumbnail: getThumbnail("almerimur"),
    finished: true,
    isProfessional: true,
    isMobileApp: true,
    isWebApp: true,
    descriptionEs:
      "Sistema a medida para una empresa en España: panel web en React, app para empleados en React Native y backend en PHP.",
    descriptionEn:
      "A custom system for a company in Spain: a React admin panel, a React Native app for employees and a PHP backend.",
    githubURL: ``,
    launchURL: ``,
    pageURL: "projects/job-system",
    skills: ["React", "React Native", "PHP"],
  },
  {
    title: "Code to image",
    thumbnail: getThumbnail("code_to_image"),
    finished: true,
    isWebApp: true,
    descriptionEs:
      "Convierte tu código en una imagen lista para compartir. Puedes cambiar el tema y el diseño, y exportarla en PNG o JPEG.",
    descriptionEn:
      "Turns your code into an image ready to share. You can change the theme and layout, and export it as PNG or JPEG.",
    githubURL: `${GITHUB_API}/code-to-image`,
    launchURL: `${GITHUB_PAGE}/code-to-image`,
    pageURL: "",
    skills: ["React", "TypeScript", "Sass", "Tailwind"],
  },
  {
    title: "Storymash",
    thumbnail: getThumbnail("storymash"),
    finished: false,
    isMobileApp: true,
    isWebApp: true,
    descriptionEs:
      "Red social para lectores y escritores: historias por capítulos, comentarios, favoritos y seguidores.",
    descriptionEn:
      "A social network for readers and writers: chaptered stories, comments, favorites and followers.",
    githubURL: `${GITHUB_API}/storymash`,
    launchURL: "",
    pageURL: "",
    skills: ["Next.js", "React Native", "Express", "MongoDB"],
  },
  {
    title: "Sortmash",
    thumbnail: getThumbnail("sortmash"),
    finished: true,
    isWebApp: true,
    descriptionEs:
      "Visualizador de algoritmos de ordenamiento: Merge Sort, Quick Sort, Heap Sort y Bubble Sort.",
    descriptionEn:
      "A sorting algorithm visualizer: Merge Sort, Quick Sort, Heap Sort and Bubble Sort.",
    githubURL: `${GITHUB_API}/sortmash`,
    launchURL: `${GITHUB_PAGE}/sortmash`,
    pageURL: "",
    skills: ["React", "Redux", "CSS"],
  },
  {
    title: "Findmash",
    thumbnail: getThumbnail("findmash"),
    finished: true,
    isWebApp: true,
    descriptionEs:
      "Visualizador de rutas más cortas con Dijkstra. Dibuja un laberinto y mira cómo lo resuelve el algoritmo.",
    descriptionEn:
      "A shortest-path visualizer using Dijkstra. Draw a maze and watch the algorithm solve it.",
    githubURL: `${GITHUB_API}/findmash`,
    launchURL: `${GITHUB_PAGE}/findmash`,
    pageURL: "",
    skills: ["React", "HTML", "CSS"],
  },
  {
    title: "PokeAPI",
    thumbnail: getThumbnail("pokeapi", "gif"),
    finished: true,
    isWebApp: true,
    descriptionEs:
      "App con el stack MERN que usa la PokeAPI y sockets para sincronizar los datos entre todos los clientes conectados.",
    descriptionEn:
      "A MERN stack app that uses the PokeAPI and sockets to keep data in sync across every connected client.",
    githubURL: `${GITHUB_API}/pokeapi-client`,
    launchURL: `${GITHUB_PAGE}/pokeapi-client`,
    pageURL: "",
    skills: ["React", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "Animated ToDo",
    thumbnail: getThumbnail("animated-todo"),
    finished: true,
    isMobileApp: true,
    descriptionEs: "App de tareas con animaciones fluidas, hecha con React Native y Reanimated.",
    descriptionEn: "A to-do app with smooth animations, built with React Native and Reanimated.",
    githubURL: `${GITHUB_API}/mobile-animated-todo`,
    launchURL: ``,
    pageURL: "",
    skills: ["React Native", "Reanimated", "Expo"],
  },
];
