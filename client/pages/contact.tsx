import { Fragment } from "react";
import Head from "next/head";
import { BottomMenu, Navbar, FormContact } from "components";
import { useTranslation } from "hooks";

export default function Contact(): JSX.Element {
  const localeEs = {
    contact: "Contacto",
  };
  const localeEn = {
    contact: "Get in touch",
  };
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <Fragment>
      <Head>
        <title>Brandon García | {t.contact} </title>
      </Head>
      <Navbar />
      <FormContact />
      <BottomMenu />
    </Fragment>
  );
}
