import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "hooks";
import styles from "./SiteHeader.module.css";

const es = {
  skip: "Ir al contenido",
  nav: "Navegación principal",
  home: "Inicio",
  services: "Servicios",
  projects: "Proyectos",
  about: "Sobre mí",
  contact: "Hablemos",
  language: "Idioma",
  spanish: "Español",
  english: "English",
};
const en: typeof es = {
  skip: "Skip to content",
  nav: "Main navigation",
  home: "Home",
  services: "Services",
  projects: "Projects",
  about: "About",
  contact: "Let’s talk",
  language: "Language",
  spanish: "Español",
  english: "English",
};

const LOCALES = [
  { code: "es", short: "ES", key: "spanish" },
  { code: "en", short: "EN", key: "english" },
] as const;

export default function SiteHeader(): JSX.Element {
  const { t, locale, router } = useTranslation(es, en);
  const isHome = router.pathname === "/";
  const isContact = router.pathname === "/contact";
  // Keep the visitor on the same page when switching language. Use the route (not asPath) so the
  // server-rendered href matches the client: static pages render asPath without the query string,
  // and the 404 page renders it as "/404". All routes are static, so pathname is the real path.
  const currentPath = router.pathname === "/404" ? "/" : router.pathname;

  // On the home page the sections are anchors; elsewhere link back to them.
  const sectionLink = (hash: string, label: string, className: string) =>
    isHome ? (
      <a className={className} href={`#${hash}`}>{label}</a>
    ) : (
      <Link href={`/#${hash}`}><a className={className}>{label}</a></Link>
    );

  return (
    <header className={styles.header}>
      <a href="#main-content" className={styles.skip}>{t.skip}</a>
      <Link href="/">
        <a className={styles.brand} aria-label={`Brandon García — ${t.home}`}>
          <span className={styles.brandMark}>
            <Image src="/img/logo_forest.png" width={40} height={40} alt="" priority />
          </span>
          <span className={styles.brandName}>Brandon García</span>
        </a>
      </Link>
      <nav className={styles.nav} aria-label={t.nav}>
        {sectionLink("services", t.services, `${styles.link} ${styles.secondaryLink}`)}
        {sectionLink("projects", t.projects, styles.link)}
        {sectionLink("about", t.about, `${styles.link} ${styles.secondaryLink}`)}
        <div className={styles.language} role="group" aria-label={t.language}>
          {LOCALES.map(({ code, short, key }) => {
            const active = locale === code;
            return (
              <Link key={code} href={currentPath} locale={code} scroll={false}>
                <a
                  className={`${styles.languageOption} ${active ? styles.languageActive : ""}`}
                  aria-current={active ? "true" : undefined}
                  aria-label={t[key]}
                  lang={code}
                  hrefLang={code}
                  // Remember an explicit choice: Next.js prefers this cookie over the browser language.
                  onClick={() => {
                    document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; SameSite=Lax`;
                  }}
                >
                  {short}
                </a>
              </Link>
            );
          })}
        </div>
        <Link href="/contact">
          <a className={styles.contact} aria-current={isContact ? "page" : undefined}>{t.contact}</a>
        </Link>
      </nav>
    </header>
  );
}
