import Image from "next/image";
import { useTranslation } from "hooks";
import { profile } from "utils/profile";
import { events } from "utils/analytics";
import { localeEn, localeEs } from "./locale";
import styles from "./Hero.module.css";

const stack = ["React", "React Native", "Vue / Nuxt", "Next.js", "TypeScript"];
const clients = ["Cyberpuerta", "Compa Financial", "Monopolio", "Kaax"];

export default function Dashboard(): JSX.Element {
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.statusDot} aria-hidden="true" />
            {t.availability}
          </p>
          <h1 id="hero-title" className={styles.title}>
            {t.headline} <em>{t.highlight}</em>
          </h1>
          <p className={styles.description}>{t.description}</p>
          <div className={styles.actions}>
            <a
              className={styles.primary}
              href={profile.workana}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => events.workana("hero")}
            >
              {t.projectCta}
            </a>
            <a className={styles.secondary} href="#projects">
              {t.projectsCta}
            </a>
          </div>
          <div className={styles.trust}>
            <span className={styles.trustLabel}>{t.trustLabel}</span>
            <ul>
              {clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
          <p className={styles.recruiter}>
            {t.recruiter}{" "}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => events.linkedin("hero")}>
              {t.recruiterCta}
            </a>
          </p>
        </div>

        <div className={styles.visual} role="img" aria-label={t.visualLabel}>
          <div className={styles.window}>
            <div className={styles.windowBar} aria-hidden="true">
              <i /><i /><i />
              <span>monopolio.com.mx</span>
            </div>
            <Image src="/img/projects/monopolio/preview.png" width={1149} height={677} layout="responsive" alt="" priority sizes="(max-width: 960px) 80vw, 440px" />
          </div>
          <div className={styles.app}>
            <Image src="/img/projects/cyberpuerta/app.png" width={560} height={652} layout="responsive" alt="" priority sizes="(max-width: 960px) 55vw, 300px" />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </span>
            <p>
              <strong>{t.visualBadgeTitle}</strong>
              <span>{t.visualBadgeDetail}</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.stack}>
        <span className={styles.stackLabel}>{t.stackLabel}</span>
        <ul aria-label={t.stackLabel}>
          {stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a href="#about" className={styles.more}>
          {t.more}
        </a>
      </div>
    </section>
  );
}
