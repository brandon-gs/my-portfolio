import Image from "next/image";
import Link from "next/link";
import { Seo } from "components/Common";
import { SiteHeader, SiteFooter } from "components/Layout";
import { useTranslation } from "hooks";
import styles from "styles/CaseStudy.module.css";

const IMG = "/img/projects/almerimur";

type Shot = { image: string; width: number; height: number; altEs: string; altEn: string; es: string; en: string };

const webShots: Shot[] = [
  {
    image: "preview.png", width: 1318, height: 656,
    altEs: "Pantalla de inicio de sesión del panel web", altEn: "Web panel login screen",
    es: "Inicio de sesión con rutas protegidas: quien no ha iniciado sesión vuelve al login.",
    en: "Login with protected routes: anyone not signed in is sent back to the login page.",
  },
  {
    image: "create_user.png", width: 970, height: 610,
    altEs: "Formulario para crear usuarios en el panel", altEn: "User creation form in the panel",
    es: "Menú lateral para administrar usuarios, clientes, proyectos, máquinas y vehículos.",
    en: "Side menu to manage users, clients, projects, machines and vehicles.",
  },
  {
    image: "filters_2.png", width: 1013, height: 590,
    altEs: "Tabla de trabajos con filtros", altEn: "Jobs table with filters",
    es: "Consulta de trabajos con filtros por cliente, proyecto, máquina y vehículo, incluidos los gastos.",
    en: "Job lookup filtered by client, project, machine and vehicle, including expenses.",
  },
  {
    image: "excel_file.png", width: 1179, height: 601,
    altEs: "Archivo de Excel exportado desde el panel", altEn: "Excel file exported from the panel",
    es: "Exportación a Excel (.xlsx) de la información, con o sin filtros.",
    en: "Excel (.xlsx) export of the data, filtered or not.",
  },
];

const appShots: Shot[] = [
  {
    image: "app_login.png", width: 340, height: 742,
    altEs: "Pantalla de inicio de sesión de la app", altEn: "App login screen",
    es: "Inicio de sesión con autenticación por token.", en: "Login with token-based authentication.",
  },
  {
    image: "app_works.png", width: 342, height: 740,
    altEs: "Lista de trabajos en la app", altEn: "Jobs list in the app",
    es: "Lista de trabajos y botón para crear uno nuevo.", en: "Jobs list and a button to create a new one.",
  },
  {
    image: "app_work_edit.png", width: 341, height: 742,
    altEs: "Edición de un trabajo en la app", altEn: "Editing a job in the app",
    es: "Edición de trabajos y opción para marcarlos como terminados.", en: "Edit jobs and mark them as finished.",
  },
  {
    image: "app_history.png", width: 339, height: 740,
    altEs: "Historial de trabajos agrupado por fecha", altEn: "Job history grouped by date",
    es: "Historial de trabajos agrupado por fecha.", en: "Job history grouped by date.",
  },
  {
    image: "app_profile.png", width: 339, height: 738,
    altEs: "Pantalla de perfil en la app", altEn: "Profile screen in the app",
    es: "Perfil con foto, nombre, cargo y cambio de contraseña.", en: "Profile with photo, name, role and password change.",
  },
];

const localeEs = {
  seoTitle: "Almerimur: sistema de gestión de trabajos | Brandon García",
  seoDescription:
    "Caso de estudio: sistema a medida para una empresa en España, con panel web en React, app en React Native y backend en PHP.",
  back: "Volver a proyectos",
  eyebrow: "Caso de estudio",
  title: "Almerimur: sistema de gestión de trabajos",
  intro:
    "Desarrollé este sistema para una empresa en España a la que conocí por una plataforma freelance. Es un proyecto privado: tengo permiso para mostrar que soy el autor, pero no para compartir el código.",
  facts: [
    { label: "Cliente", value: "Empresa en España" },
    { label: "Tipo", value: "Proyecto freelance" },
    { label: "Stack", value: "React, React Native y PHP" },
  ],
  webTitle: "Panel web",
  webText:
    "Panel de administración en React para gestionar usuarios, clientes, proyectos y maquinaria, filtrar la información y exportarla a Excel.",
  appTitle: "App móvil",
  appText: "App en React Native que usan los empleados para registrar y dar seguimiento a los trabajos que realizan.",
  backendTitle: "Backend",
  backendText:
    "API en PHP con consultas SQL para usuarios, clientes, proyectos y máquinas, autenticación con JWT y carga de archivos a la nube.",
  ctaTitle: "¿Necesitas un sistema así para tu negocio?",
  ctaButton: "Cuéntame tu proyecto",
};

const localeEn: typeof localeEs = {
  seoTitle: "Almerimur: job management system | Brandon García",
  seoDescription:
    "Case study: a custom system for a company in Spain, with a React admin panel, a React Native app and a PHP backend.",
  back: "Back to projects",
  eyebrow: "Case study",
  title: "Almerimur: job management system",
  intro:
    "I built this system for a company in Spain that I met through a freelance platform. It’s a private project: I have permission to show I’m the author, but not to share the code.",
  facts: [
    { label: "Client", value: "Company in Spain" },
    { label: "Type", value: "Freelance project" },
    { label: "Stack", value: "React, React Native and PHP" },
  ],
  webTitle: "Web panel",
  webText:
    "A React admin panel to manage users, clients, projects and machinery, filter the data and export it to Excel.",
  appTitle: "Mobile app",
  appText: "A React Native app employees use to log and track the jobs they do.",
  backendTitle: "Backend",
  backendText:
    "A PHP API with SQL queries for users, clients, projects and machines, JWT authentication and cloud file uploads.",
  ctaTitle: "Need a system like this for your business?",
  ctaButton: "Tell me about your project",
};

function Gallery({ shots, isSpanish, phone = false }: { shots: Shot[]; isSpanish: boolean; phone?: boolean }) {
  return (
    <div className={phone ? styles.phoneGrid : styles.webGrid}>
      {shots.map((shot, index) => (
        <figure key={shot.image} className={styles.figure}>
          <div className={styles.shot}>
            <Image
              src={`${IMG}/${shot.image}`}
              width={shot.width}
              height={shot.height}
              layout="responsive"
              alt={isSpanish ? shot.altEs : shot.altEn}
              priority={!phone && index === 0}
              sizes={phone ? "(max-width: 640px) 50vw, 220px" : "(max-width: 900px) 100vw, 560px"}
            />
          </div>
          <figcaption>{isSpanish ? shot.es : shot.en}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function JobSystemPage(): JSX.Element {
  const { t, isSpanishPage } = useTranslation(localeEs, localeEn);
  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} path="/projects/job-system/" image={`${IMG}/preview.png`} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <Link href="/#projects">
          <a className={styles.back}>{t.back}</a>
        </Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.intro}>{t.intro}</p>
          <dl className={styles.facts}>
            {t.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className={styles.block} aria-labelledby="web-title">
          <h2 id="web-title" className={styles.blockTitle}>{t.webTitle}</h2>
          <p className={styles.blockText}>{t.webText}</p>
          <Gallery shots={webShots} isSpanish={isSpanishPage} />
        </section>

        <section className={styles.block} aria-labelledby="app-title">
          <h2 id="app-title" className={styles.blockTitle}>{t.appTitle}</h2>
          <p className={styles.blockText}>{t.appText}</p>
          <Gallery shots={appShots} isSpanish={isSpanishPage} phone />
        </section>

        <section className={styles.block} aria-labelledby="backend-title">
          <h2 id="backend-title" className={styles.blockTitle}>{t.backendTitle}</h2>
          <p className={styles.blockText}>{t.backendText}</p>
        </section>

        <aside className={styles.cta}>
          <p className={styles.ctaTitle}>{t.ctaTitle}</p>
          <Link href="/contact">
            <a className={styles.ctaButton}>{t.ctaButton}</a>
          </Link>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
