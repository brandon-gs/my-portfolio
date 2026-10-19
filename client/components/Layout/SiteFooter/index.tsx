import { useTranslation } from "hooks";
import { profile } from "utils/profile";
import { events } from "utils/analytics";
import styles from "./SiteFooter.module.css";

const es = {
  title: "¿Tienes un proyecto en mente?",
  text: "Cuéntame qué necesitas y te respondo con una propuesta clara de alcance y tiempos.",
  workana: "Contrátame en Workana",
  email: "Escríbeme por correo",
  emailSubject: "Quiero hablar de un proyecto",
  recruiter: "¿Buscas sumar talento a tu equipo?",
  recruiterCta: "Hablemos de la vacante",
  recruiterSubject: "Oportunidad laboral para Brandon García",
  recruiterOr: "o revisa mi",
  rights: "Hecho con Next.js en México.",
};
const en: typeof es = {
  title: "Have a project in mind?",
  text: "Tell me what you need and I’ll reply with a clear proposal on scope and timeline.",
  workana: "Hire me on Workana",
  email: "Send me an email",
  emailSubject: "Let’s talk about a project",
  recruiter: "Looking for someone to join your team?",
  recruiterCta: "Let’s talk about the role",
  recruiterSubject: "Job opportunity for Brandon García",
  recruiterOr: "or check my",
  rights: "Built with Next.js in Mexico.",
};

interface Props {
  /** Show the closing call to action and recruiter line. Hide them on the contact page, which already covers both. */
  showCta?: boolean;
}

export default function SiteFooter({ showCta = true }: Props): JSX.Element {
  const { t } = useTranslation(es, en);
  return (
    <footer className={`${styles.footer} ${showCta ? "" : styles.compact}`}>
      {showCta && (
        <div className={styles.cta}>
          <div>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.text}>{t.text}</p>
          </div>
          <div className={styles.actions}>
            <a className={styles.primary} href={profile.workana} target="_blank" rel="noopener noreferrer" onClick={() => events.workana("footer")}>
              {t.workana}
            </a>
            <a className={styles.secondary} href={`mailto:${profile.email}?subject=${encodeURIComponent(t.emailSubject)}`} onClick={() => events.email("footer")}>
              {t.email}
            </a>
          </div>
        </div>
      )}
      <div className={styles.bottom}>
        {showCta && (
          <p className={styles.recruiter}>
            {t.recruiter}{" "}
            <a href={`mailto:${profile.email}?subject=${encodeURIComponent(t.recruiterSubject)}`}>{t.recruiterCta}</a>{" "}
            {t.recruiterOr}{" "}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => events.linkedin("footer_recruiter")}>LinkedIn</a>
          </p>
        )}
        <ul className={styles.links}>
          <li><a href={`mailto:${profile.email}`} onClick={() => events.email("footer_links")}>{profile.email}</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => events.linkedin("footer_links")}>LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={profile.workana} target="_blank" rel="noopener noreferrer" onClick={() => events.workana("footer_links")}>Workana</a></li>
        </ul>
        <p className={styles.copy}>© Brandon García. {t.rights}</p>
      </div>
    </footer>
  );
}
