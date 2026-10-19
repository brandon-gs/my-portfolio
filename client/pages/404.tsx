import Link from "next/link";
import { Seo } from "components/Common";
import { SiteHeader, SiteFooter } from "components/Layout";
import { useTranslation } from "hooks";
import styles from "styles/NotFound.module.css";

const localeEs = {
  seoTitle: "Página no encontrada | Brandon García",
  seoDescription: "La página que buscas no existe o cambió de dirección.",
  code: "Error 404",
  title: "Esta página no existe",
  text: "Puede que el enlace esté roto o que la página haya cambiado de dirección.",
  home: "Ir al inicio",
  projects: "Ver proyectos",
};

const localeEn: typeof localeEs = {
  seoTitle: "Page not found | Brandon García",
  seoDescription: "The page you’re looking for doesn’t exist or has moved.",
  code: "Error 404",
  title: "This page doesn’t exist",
  text: "The link may be broken, or the page may have moved.",
  home: "Go to home",
  projects: "See projects",
};

export default function NotFoundPage(): JSX.Element {
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDescription} path="/404/" noIndex />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <p className={styles.code}>{t.code}</p>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.text}>{t.text}</p>
        <div className={styles.actions}>
          <Link href="/"><a className={styles.primary}>{t.home}</a></Link>
          <Link href="/#projects"><a className={styles.secondary}>{t.projects}</a></Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
