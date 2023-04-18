import { ListProject } from "interfaces";

const resources = `/img/projects`;
const GITHUB_API = `https://github.com/brandon-gs`;
const GITHUB_PAGE = "https://brandon-gs.github.io";

const getThumbnail = (title: string, extension = "png") => {
  return `${resources}/${title}/preview.${extension}`;
};

export const currentProjects: ListProject = [
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
    skills: ["React Native", "Next", "Express", "Mongo"].reverse(),
  },
];

export const featuredProjects: ListProject = [
  {
    title: "sortmash",
    thumbnail: getThumbnail("sortmash", "gif"),
    finished: true,
    descriptionEn:
      "A web app for visualizing sort algorithms, you can see the differences between the different algorithms.",
    descriptionEs:
      "Una aplicación web para visualizar algoritmos de ordenamiento, puedes ver las diferencias entre los distintos algoritmos.",
    githubURL: `${GITHUB_API}/sortmash`,
    launchURL: `${GITHUB_PAGE}/sortmash`,
    pageURL: "",
    skills: ["React", "Redux", "CSS3"].reverse(),
  },
  {
    title: "findmash",
    thumbnail: getThumbnail("findmash", "gif"),
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
    title: "Monopolio",
    thumbnail: getThumbnail("monopolio", "png"),
    finished: true,
    descriptionEn:
      "Monopolio is an online platform that provides a marketplace for buying and selling real estate properties in Mexico. The platform connects buyers and sellers using artificial intelligence to help users make decisions about purchasing or selling properties.",
    descriptionEs:
      "Monopolio es una plataforma en línea que provee un mercado para comprar y vender inmuebles en México. La plataforma conecta a compradores y vendedores usando inteligencia artificial para ayudar a los usuarios a tomar decisiones en la compra o venta de inmuebles.",
    githubURL: "",
    launchURL: `https://monopolio.com.mx/`,
    pageURL: "",
    skills: ["AWS", "Next", "React"],
  },
  {
    title: "pokeapi",
    thumbnail: getThumbnail("pokeapi", "gif"),
    finished: true,
    descriptionEn:
      "Project created with MERN Stack, using the pokeapi and sockets to sync the data among all the connected clients",
    descriptionEs:
      "Proyecto creado con el stack MERN, usando la pokeapi y sockets para sincronizar los datos entre todos los clientes conectados",
    githubURL: `${GITHUB_API}/pokeapi-client`,
    launchURL: `${GITHUB_PAGE}/pokeapi-client`,
    pageURL: "",
    skills: ["MongoDB", "Express", "Sockets", "React"],
  },
  {
    title: "Animated mobile ToDo",
    thumbnail: getThumbnail("animated-todo"),
    finished: true,
    descriptionEn: "Smoothly Animated ToDo App build with React Native",
    descriptionEs: "Aplicación de tareas pendientes creada con React Native",
    githubURL: `${GITHUB_API}/mobile-animated-todo`,
    launchURL: ``,
    pageURL: "",
    skills: ["Expo", "React Native", "Reanimated"].reverse(),
  },
  {
    title: "Code to image",
    thumbnail: getThumbnail("code_to_image"),
    finished: true,
    descriptionEn:
      "This is a web application where you can convert your code to an image online. Instead of clicking screenshots of your code you can add your code here and export the window as a png or jpeg. You can customize how the code looks.",
    descriptionEs:
      "Este es una aplicación web en la que puedes convertir tu código a una imagen en línea. En lugar de hacer clic en las capturas de pantalla de su código, puede agregar su código aquí y exportar la ventana como png o jpeg. Puede personalizar el aspecto del código.",
    githubURL: `${GITHUB_API}/code-to-image`,
    launchURL: `${GITHUB_PAGE}/code-to-image`,
    pageURL: "",
    skills: ["React", "Typescript", "SASS", "Tailwindcss"],
  },
  {
    title: "almerimur",
    thumbnail: getThumbnail("almerimur"),
    finished: true,
    descriptionEn:
      "In this project I built a system that allows managing the jobs carried out by the employees.",
    descriptionEs:
      "En este proyecto desarrolle un sistema que permite administrar los trabajos realizados por los empleados.",
    githubURL: ``,
    launchURL: ``,
    pageURL: "projects/job-system",
    skills: ["React", "React Native", "PHP"].reverse(),
  },
  {
    title: "Atomic Labs",
    thumbnail: getThumbnail("atomic_labs"),
    finished: true,
    descriptionEn: "Conversion from an AdobeXD design to a React application",
    descriptionEs:
      "Conversión de un diseño de AdobeXD a una aplicación de React",
    githubURL: `${GITHUB_API}/atomic-labs`,
    launchURL: `${GITHUB_PAGE}/atomic-labs`,
    pageURL: "",
    skills: ["Next.js", "React"],
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
    skills: ["React", "Redux", "Node.js", "Express", "Mongodb"].reverse(),
  },
];
