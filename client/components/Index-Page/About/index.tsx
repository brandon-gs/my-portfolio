import { useTranslation } from "hooks";
import { profile } from "utils/profile";
import { events } from "utils/analytics";
import { localeEn, localeEs } from "./locale";
import styles from "./About.module.css";

const coreSkills = ["React", "React Native", "Vue / Nuxt", "Next.js", "TypeScript", "JavaScript"];
const extraSkills = [
  "Node.js",
  "Express",
  "Ruby on Rails",
  "Redux",
  "Tailwind",
  "Material UI",
  "Storybook",
  "Jest",
  "MongoDB",
  "MySQL",
  "AWS",
  "Git",
];

export default function About(): JSX.Element {
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.bio}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 id="about-title" className={styles.title}>{t.title}</h2>
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.text}>{paragraph}</p>
        ))}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
          onClick={() => events.linkedin("about")}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
          </svg>
          {t.linkedin}
        </a>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>{t.skillsTitle}</h3>
        <p className={styles.groupLabel}>{t.coreLabel}</p>
        <ul className={`${styles.chips} ${styles.chipsCore}`}>
          {coreSkills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        <p className={styles.groupLabel}>{t.extraLabel}</p>
        <ul className={styles.chips}>
          {extraSkills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
}
