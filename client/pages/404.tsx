import { Fragment } from "react";
import Head from "next/head";
import { BottomMenu, Navbar } from "components";
import NotFoundMessage from "components/404-Page";
// Hooks
import { useTranslation } from "hooks";
import GithubIcon from "components/Common/Social/GithubIcon";

const localeEs = {
  notFound: "Page not found",
};
const localeEn = {
  notFound: "Página no encontrada",
};

const NotFoundPage = () => {
  const { t } = useTranslation(localeEs, localeEn);

  const title = `Brandon García | ${t.notFound}`;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <NotFoundMessage />
      <BottomMenu />
      <GithubIcon></GithubIcon>
    </Fragment>
  );
};

export default NotFoundPage;
