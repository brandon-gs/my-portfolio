import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "hooks";
import { featuredProjects, getLaunchURL } from "utils/list-projects";
import { Project } from "interfaces";
import { localeEn, localeEs } from "./locale";
import styles from "./Projects.module.css";

type Copy = typeof localeEs;

const MAIN_PROJECT = "Cyberpuerta";
const main = featuredProjects.find((project) => project.title === MAIN_PROJECT);
// Live projects first, so the first row a visitor sees only has working links.
const professional = featuredProjects
  .filter((project) => project.isProfessional && project.title !== MAIN_PROJECT)
  .sort((a, b) => Number(Boolean(a.offline)) - Number(Boolean(b.offline)));
const personal = featuredProjects.filter((project) => !project.isProfessional);

const displayTitle = (title: string) => title.charAt(0).toUpperCase() + title.slice(1);

function ProjectCard({ project, t, isSpanish, compact = false }: { project: Project; t: Copy; isSpanish: boolean; compact?: boolean }) {
  const description = isSpanish ? project.descriptionEs : project.descriptionEn;
  const launchURL = getLaunchURL(project);
  return (
    <article className={`${styles.card} ${compact ? styles.cardCompact : ""}`}>
      <div className={styles.cardMedia}>
        <Image src={project.thumbnail} alt="" layout="fill" objectFit="cover" objectPosition="top" sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 380px" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHead}>
          <h4 className={styles.cardTitle}>{displayTitle(project.title)}</h4>
          <ul className={styles.tags}>
            {project.isWebApp && <li>{t.web}</li>}
            {project.isMobileApp && <li>{t.mobile}</li>}
            {!project.finished && <li className={styles.tagMuted}>{t.inProgress}</li>}
            {project.offline && <li className={styles.tagMuted}>{t.offline}</li>}
          </ul>
        </div>
        <p className={styles.cardText}>{description}</p>
        <p className={styles.cardStack}>{project.skills.join(" · ")}</p>
        <div className={styles.cardLinks}>
          {launchURL && (
            <a href={launchURL} target="_blank" rel="noopener noreferrer">
              {t.visit}
            </a>
          )}
          {project.offline && project.archiveURL && (
            <a href={project.archiveURL} target="_blank" rel="noopener noreferrer">
              {t.archive}
            </a>
          )}
          {project.githubURL && (
            <a href={project.githubURL} target="_blank" rel="noopener noreferrer">
              {t.code}
            </a>
          )}
          {!launchURL && !project.githubURL && project.pageURL && (
            <Link href={`/${project.pageURL}`}>
              <a>
                {t.details}
              </a>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects(): JSX.Element {
  const { t, isSpanishPage } = useTranslation(localeEs, localeEn);
  const [showPersonal, setShowPersonal] = useState(false);

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 id="projects-title" className={styles.title}>{t.title}</h2>
        <p className={styles.intro}>{t.intro}</p>
      </header>

      {main && (
        <article className={styles.featured} aria-labelledby="featured-title">
          <div className={styles.featuredTop}>
            <div className={styles.featuredMedia}>
              {/* Cropped to the logo and the app; the right side of the banner is store ads and a QR code. */}
              <Image src={main.thumbnail} layout="fill" objectFit="cover" objectPosition="4% 50%" alt="Cyberpuerta" sizes="(max-width: 1000px) 100vw, 620px" />
            </div>
            <div className={styles.featuredIntro}>
              <p className={styles.featuredLabel}>
                <span className={styles.featuredDot} aria-hidden="true" />
                {t.featuredLabel}
              </p>
              <h3 id="featured-title" className={styles.featuredTitle}>Cyberpuerta</h3>
              <ul className={styles.tags}>
                {t.featuredTags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <p className={styles.featuredSummary}>{t.featuredSummary}</p>
              <p className={styles.cardStack}>{main.skills.join(" · ")}</p>
              <a className={styles.featuredCta} href={getLaunchURL(main)} target="_blank" rel="noopener noreferrer">
                {t.featuredCta}
              </a>
            </div>
          </div>
          <div className={styles.role}>
            <p className={styles.roleLabel}>{t.featuredRoleLabel}</p>
            <ul>
              {t.featuredRole.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </article>
      )}

      <h3 className={styles.groupTitle}>{t.professionalTitle}</h3>
      <div className={styles.grid}>
        {professional.map((project) => (
          <ProjectCard key={project.title} project={project} t={t} isSpanish={isSpanishPage} />
        ))}
      </div>

      <div className={styles.personal}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={showPersonal}
          aria-controls="personal-projects"
          onClick={() => setShowPersonal((value) => !value)}
        >
          {showPersonal ? t.personalHide : t.personalShow}
          <span className={styles.toggleCount}>{personal.length}</span>
          <span aria-hidden="true" className={styles.toggleIcon}>{showPersonal ? "−" : "+"}</span>
        </button>
        <div id="personal-projects" hidden={!showPersonal}>
          <h3 className={styles.srOnly}>{t.personalTitle}</h3>
          <div className={styles.grid}>
            {personal.map((project) => (
              <ProjectCard key={project.title} project={project} t={t} isSpanish={isSpanishPage} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
