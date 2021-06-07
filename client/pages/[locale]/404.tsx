import { Fragment } from "react";
import Head from "next/head";
import { BottomMenu, Navbar } from "components";
import NotFoundMessage from "components/404-Page";
// Hooks
import { useTranslation } from "hooks";

const NotFoundPage = () => {
  const localeEs = {
    notFound: "Page not found",
  };
  const localeEn = {
    notFound: "Página no encontrada",
  };
  const { t } = useTranslation(localeEs, localeEn);

  return (
    <Fragment>
      <Head>
        <title>Brandon García | {t.notFound} </title>
      </Head>
      <Navbar />
      <NotFoundMessage />
      <BottomMenu />
    </Fragment>
  );
};

export default NotFoundPage;
