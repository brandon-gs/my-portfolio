import Link from "next/link";
import { useTranslation } from "hooks";
import { localeEn, localeEs } from "./locale";
import styles from "./Services.module.css";

export default function Services(): JSX.Element {
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 id="services-title" className={styles.title}>{t.title}</h2>
        <p className={styles.intro}>{t.intro}</p>
      </header>

      <ul className={styles.grid}>
        {t.services.map((service) => (
          <li key={service.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.text}</p>
            <p className={styles.includes}>{t.includes}</p>
            <ul className={styles.items}>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className={styles.process}>
        <div className={styles.processHead}>
          <h3 className={styles.processTitle}>{t.processTitle}</h3>
          <p className={styles.processIntro}>
            <span className={styles.dot} aria-hidden="true" />
            {t.processIntro}
          </p>
        </div>
        <ol className={styles.steps}>
          {t.steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link href="/contact">
          <a className={styles.cta}>{t.cta}</a>
        </Link>
      </div>
    </section>
  );
}
