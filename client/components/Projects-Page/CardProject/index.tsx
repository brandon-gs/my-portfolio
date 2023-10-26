import { Project } from "interfaces";
import { Typography, Tooltip } from "@mui/material";
import { GitHub, Info, Launch } from "@mui/icons-material";
import Image from "next/image";
import clsx from "clsx";
import useStyles from "./styles";
import { Link } from "components/Common";
import { useTranslation } from "hooks";
import LazyLoad from "react-lazy-load";

interface Props {
  project: Project;
  index: number;
}

export default function CardProject({
  project,
  index,
}: Props): React.ReactElement {
  const { classes } = useStyles({
    index,
    isProfessional: project.isProfessional,
    isFinished: project.finished,
  });

  const localeEs = {
    progress: "En progreso",
    finish: "Terminado",
    professional: "Profesional",
    personal: "Personal",
    web: "Web",
    mobile: "Móvil",
    description: project.descriptionEs,
    tooltips: {
      info: "Leer más",
      github: "Ver código en Github",
      launch: "Ver proyecto",
    },
  };
  const localeEn = {
    progress: "In progress",
    finish: "Finished",
    professional: "Professional",
    personal: "Personal",
    web: "Web",
    mobile: "Mobile",
    description: project.descriptionEn,
    tooltips: {
      info: "Read more",
      github: "View code on Github",
      launch: "Launch project",
    },
  };
  const { t } = useTranslation(localeEs, localeEn);

  const direction = index % 2 === 0 ? "rtl" : "ltr";
  const textAlign = index % 2 === 0 ? "right" : "left";
  const listItemMargin = index % 2 === 0 ? "0 0 5px 20px" : "0 20px 5px 0";
  const linkContainerClass =
    index % 2 === 0
      ? clsx(classes.linksContainer, classes.linksCotainerRight)
      : clsx(classes.linksContainer, classes.linksContainerLeft);

  return (
    <div className={classes.container} style={{ direction, textAlign }}>
      <div className={classes.infoContainer}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {project.title}
        </Typography>
        <div className={classes.descriptionContainer}>
          <p
            className={classes.description}
            style={{ direction: index % 2 === 0 ? "initial" : "ltr" }}
          >
            {t.description}
          </p>
        </div>
        <ul className={classes.list}>
          {project.skills.map((skill, skillIndex) => (
            <li
              key={`${project.title}-skill-${skillIndex}`}
              className={classes.listItem}
              style={{
                margin: listItemMargin,
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className={linkContainerClass}>
          {project.pageURL && (
            <Tooltip title={t.tooltips.info}>
              <Link
                naked
                href={`/${project.pageURL}`}
                target="__blank"
                aria-label="info page project"
                className={classes.link}
              >
                <Info />
              </Link>
            </Tooltip>
          )}
          {project.githubURL && (
            <Tooltip title={t.tooltips.github}>
              <Link
                href={project.githubURL}
                target="__blank"
                aria-label="github project"
                className={classes.link}
              >
                <GitHub />
              </Link>
            </Tooltip>
          )}
          {project.launchURL && (
            <Tooltip title={t.tooltips.launch}>
              <Link
                href={project.launchURL}
                target="__blank"
                aria-label="launch project"
                className={classes.link}
              >
                <Launch />
              </Link>
            </Tooltip>
          )}
        </div>
      </div>

      <div className={classes.imageContainer}>
        <div className={classes.badges}>
          <div className={classes.badgeType}>
            <p>{project.isProfessional ? t.professional : t.personal}</p>
          </div>
          <div className={classes.badgeProgress}>
            <p>{project.finished ? t.finish : t.progress}</p>
          </div>
          {project.isWebApp && (
            <div className={classes.badgeWebType}>
              <p>{t.web}</p>
            </div>
          )}
          {project.isMobileApp && (
            <div className={classes.badgeAppType}>
              <p>{t.mobile}</p>
            </div>
          )}
        </div>
        <Link
          href={
            project.launchURL
              ? project.launchURL
              : project.githubURL
              ? project.githubURL
              : `/${project.pageURL}`
          }
          target="__blank"
          className={classes.imageLink}
        >
          <div className={classes.imageWrapper}>
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "62.2857%" }}
            />
            <LazyLoad>
              <Image
                layout="fill"
                src={project.thumbnail}
                alt={`Thumbnail of project ${project.title}`}
                className={classes.image}
              />
            </LazyLoad>
          </div>
        </Link>
      </div>
    </div>
  );
}
