import { FormContact } from "components";
import { Seo } from "components/Common";
import { SiteHeader, SiteFooter } from "components/Layout";
import { useTranslation } from "hooks";

export default function Contact(): JSX.Element {
  const localeEs = {
    title: "Brandon García | Contacto",
    description:
      "Contrata a Brandon García para tu proyecto web o móvil en Workana, o escríbele directamente por correo.",
  };
  const localeEn = {
    title: "Brandon García | Contact",
    description:
      "Hire Brandon García for your web or mobile project on Workana, or email him directly.",
  };
  const { t } = useTranslation(localeEs, localeEn);

  return (
    <>
      <Seo title={t.title} description={t.description} path="/contact/" />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <FormContact />
      </main>
      <SiteFooter showCta={false} />
    </>
  );
}
