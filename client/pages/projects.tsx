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
      </Head>
      <Navbar />
      <ListProjects />
      <BottomMenu />
    </Fragment>
  );
}
