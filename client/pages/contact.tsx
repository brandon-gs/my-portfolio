import { Fragment } from "react";
import Head from "next/head";
import { BottomMenu, Navbar, FormContact } from "components";
import { useTranslation } from "hooks";
import GithubIcon from "components/Common/Social/GithubIcon";

export default function Contact(): JSX.Element {
  const localeEs = {
    contact: "Contacto",
  };
  const localeEn = {
    contact: "Get in touch",
  };
  const { t } = useTranslation(localeEs, localeEn);
  const title = `Brandon García | ${t.contact}`;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content="brandon, brandon garcia, brandongs, frontend developer, backend developer, freelance, software engineering, software engineering projects, create web apps, create mobile apps, create software"
        />
        <meta
          name="description"
          content="Get in touch with a software engineering to do your dream project with the best quality and great scalability"
        />
      </Head>
      <Navbar />
      <FormContact />
      <BottomMenu />
      <GithubIcon></GithubIcon>
    </Fragment>
  );
}
