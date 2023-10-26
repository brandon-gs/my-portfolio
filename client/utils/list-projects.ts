import { ListProject } from "interfaces";

const resources = `/img/projects`;
const GITHUB_API = `https://github.com/brandon-gs`;
const GITHUB_PAGE = "https://brandon-gs.github.io";

const getThumbnail = (title: string, extension = "png") => {
  return `${resources}/${title}/preview.${extension}`;
};

export const currentProjects: ListProject = [];

export const featuredProjects: ListProject = [
  {
    title: "Cyberpuerta",
    thumbnail: getThumbnail("cyberpuerta", "webp"),
    finished: true,
    isProfessional: true,
    isMobileApp: true,
    isWebApp: true,
    descriptionEn:
      "Cyberpuerta is an e-commerce platform that offers a wide variety of technological and electronic products. Users can purchase high-quality computers, components, devices, and accessories from recognized brands. The platform is known for keeping its inventory up to date and providing a convenient and secure shopping experience.",
    descriptionEs:
      "Cyberpuerta es una plataforma de e-commerce en línea que ofrece una amplia variedad de productos tecnológicos y electrónicos. Los usuarios pueden comprar computadoras, componentes, dispositivos y accesorios de alta calidad de marcas reconocidas. La plataforma es conocida por mantener su inventario actualizado y ofrecer una experiencia de compra conveniente y segura.",
    githubURL: ``,
    launchURL: `https://www.cyberpuerta.mx/`,
    pageURL: "",
    skills: ["React Native", "Storybook", "Jest", "Java"].reverse(),
  },
  {
    title: "Kaax",
    thumbnail: getThumbnail("kaax", "png"),
    finished: true,
    isProfessional: true,
    isWebApp: true,
    descriptionEn:
      "This is an online currency exchange platform that allows users to buy and sell different currencies from around the world. Users can conduct real-time transactions with constantly updated exchange rates. Additionally, the platform features market analysis tools that provide useful information for investment decision-making.",
    descriptionEs:
      "Se trata de una plataforma de intercambio de divisas en línea que permite a los usuarios comprar y vender distintas monedas del mundo. Los usuarios pueden realizar transacciones en tiempo real con tipos de cambio actualizados constantemente. Además, la plataforma cuenta con herramientas de análisis de mercado que proporcionan información útil para la toma de decisiones de inversión.",
    githubURL: ``,
    launchURL: `https://www.gokaax.com/`,
    pageURL: "",
    skills: ["React", "AWS", "Material UI"].reverse(),
  },
  {
    title: "Compa Financial",
    thumbnail: getThumbnail("compa", "png"),
    finished: true,
    isProfessional: true,
    isWebApp: true,
    descriptionEn:
      "Compa is a crowdfunding platform that offers mortgage loans to Mexican residents, connecting investors with loan applicants through a network of mortgage correspondents. The platform allows investors to review and select projects in which they wish to invest, and the loans are backed by a mortgage guarantee.",
    descriptionEs:
      "Compa es una plataforma de financiamiento colectivo que ofrece préstamos hipotecarios a residentes mexicanos, conectando a inversionistas con solicitantes de préstamos a través de una red de corresponsales hipotecarios. La plataforma permite a los inversionistas revisar y seleccionar proyectos en los que desean invertir, y los préstamos están respaldados por una garantía hipotecaria.",
    githubURL: ``,
    launchURL: `https://compa.financial/`,
    pageURL: "",
    skills: ["React", "Next", "AWS", "Tailwind"].reverse(),
  },
  {
    title: "Monopolio",
    thumbnail: getThumbnail("monopolio", "gif"),
    isProfessional: true,
    isWebApp: true,
    finished: true,
    descriptionEn:
      "Monopolio is an online platform that provides a marketplace for buying and selling real estate properties in Mexico. The platform connects buyers and sellers using artificial intelligence to help users make decisions about purchasing or selling properties.",
    descriptionEs:
      "Monopolio es una plataforma en línea que provee un mercado para comprar y vender inmuebles en México. La plataforma conecta a compradores y vendedores usando inteligencia artificial para ayudar a los usuarios a tomar decisiones en la compra o venta de inmuebles.",
    githubURL: "",
    launchURL: `https://monopolio.com.mx/`,
    pageURL: "",
    skills: ["React", "Next", "AWS", "Tailwind"],
  },
  {
    title: "Distrito pyme",
    thumbnail: getThumbnail("distrito_pyme"),
    isProfessional: true,
    isWebApp: true,
    finished: true,
    descriptionEn:
      "I collaborated in the creation fo this project, this project is a digital platform that seeks to turn financing into a simple process and without bureaucratic procedures.",
    descriptionEs:
      "Colaboré en la creación de este proyecto, este proyecto es una plataforma digital que busca convertir el financiamiento en un proceso simple y sin trámites burocráticos.",
    githubURL: "",
    launchURL: "https://distritopyme.com/",
    pageURL: "",
    skills: ["React", "Redux", "Express", "Mongodb"].reverse(),
  },
  {
    title: "almerimur",
    thumbnail: getThumbnail("almerimur"),
    isProfessional: true,
    finished: true,
    isMobileApp: true,
    isWebApp: true,
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
    title: "storymash",
    thumbnail: getThumbnail("storymash"),
    finished: false,
    isMobileApp: true,
    isWebApp: true,
    descriptionEn:
      "This web app is a social network for readers and writers. You can see stories of all users, modify your profile, create stories with its differents chapters, leave comments, select your favorite stories, follow users, and more features!",
    descriptionEs:
      "Esta aplicación web es una red social para lectores y escritores. Puedes ver historias escritas por todos los usuarios, modificar tu perfil, crear historias con sus diferentes capítulos, dejar comentarios, seleccionar tus historias favoritas, seguir usuarios, y ¡Más funciones!",
    githubURL: `${GITHUB_API}/storymash`,
    launchURL: "",
    pageURL: "",
    skills: ["React Native", "Next", "Express", "Mongo"].reverse(),
  },
  {
    title: "sortmash",
    thumbnail: getThumbnail("sortmash", "gif"),
    finished: true,
    isWebApp: true,
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
    isWebApp: true,
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
    title: "pokeapi",
    thumbnail: getThumbnail("pokeapi", "gif"),
    finished: true,
    isWebApp: true,
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
    title: "Code to image",
    thumbnail: getThumbnail("code_to_image"),
    finished: true,
    isProfessional: true,
    isWebApp: true,
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
    title: "Animated mobile ToDo",
    thumbnail: getThumbnail("animated-todo"),
    isMobileApp: true,
    finished: true,
    descriptionEn: "Smoothly Animated ToDo App build with React Native",
    descriptionEs: "Aplicación de tareas pendientes creada con React Native",
    githubURL: `${GITHUB_API}/mobile-animated-todo`,
    launchURL: ``,
    pageURL: "",
    skills: ["Expo", "React Native", "Reanimated"].reverse(),
  },
  {
    title: "Atomic Labs",
    thumbnail: getThumbnail("atomic_labs"),
    finished: true,
    isWebApp: true,
    descriptionEn: "Conversion from an AdobeXD design to a React application",
    descriptionEs:
      "Conversión de un diseño de AdobeXD a una aplicación de React",
    githubURL: `${GITHUB_API}/atomic-labs`,
    launchURL: `${GITHUB_PAGE}/atomic-labs`,
    pageURL: "",
    skills: ["Next.js", "React"],
  },
];
