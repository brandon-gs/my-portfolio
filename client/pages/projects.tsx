import { Fragment } from "react";
import Head from "next/head";
import { BottomMenu, ListProjects, Navbar } from "components";
import { useTranslation } from "hooks";

export default function ProjectsPage() {
  const localeEs = {
    projects: "Proyectos",
  };
  const localeEn = {
    projects: "Projects",
  };
  const { t } = useTranslation(localeEs, localeEn);

  return (
    <Fragment>
      <Head>
        <title>Brandon García | {t.projects}</title>
        <meta
          name="keywords"
          content="brandon, brandon garcia, brandongs, frontend developer, backend developer, freelance, software engineering, software engineering projects, create web apps, create mobile apps, create software"
        />
        <meta
          name="description"
          content="List of awesome software engineering projects with sort algorithms, find algorithms, data structures, social networks and more"
        />
      </Head>
      <Navbar />
      <ListProjects />
      <BottomMenu />
    </Fragment>
  );
}
