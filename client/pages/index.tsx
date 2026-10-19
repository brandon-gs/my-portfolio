import { Dashboard, Services, Projects, About } from "components/Index-Page";
import { Seo } from "components/Common";
import { SiteHeader, SiteFooter } from "components/Layout";
import { localeEs, localeEn } from "components/Index-Page/Dashboard/locale";
import { useTranslation } from "hooks";

export default function IndexPage(): JSX.Element {
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <>
      <Seo title={t.pageTitle} description={t.pageDescription} path="/" />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Dashboard />
        <Services />
        <Projects />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}
