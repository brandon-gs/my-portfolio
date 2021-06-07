import { Project } from "interfaces";
import { Typography, Tooltip } from "@material-ui/core";
import { GitHub, Info, Launch } from "@material-ui/icons";
import clsx from "clsx";
import useStyles from "./styles";
import { Link } from "components/Common";
import { useTranslation } from "hooks";

interface Props {
  project: Project;
  index: number;
}

export default function CardProject({
  project,
  index,
}: Props): React.ReactElement {
  const classes = useStyles();

  const localeEs = {
    progress: "Proyecto en progreso",
    finish: "Proyecto terminado",
    description: project.descriptionEs,
    tooltips: {
      info: "Leer más",
      github: "Ver código en Github",
      launch: "Ver proyecto",
    },
  };
  const localeEn = {
    progress: "Project in progress",
    finish: "Finished project",
    description: project.descriptionEn,
    tooltips: {
      info: "Read more",
      github: "View code on Github",
      launch: "Launch project",
    },
  };
  const { t, defaultLocale } = useTranslation(localeEs, localeEn);

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
        <Typography
          component="p"
          variant="body2"
          gutterBottom
          className={project.finished ? classes.finished : classes.inProgress}
        >
          {project.finished ? t.finish : t.progress}
        </Typography>
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
                href={`/${defaultLocale}${project.pageURL}`}
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
              <a
                href={project.githubURL}
                target="__blank"
                aria-label="github project"
                className={classes.link}
              >
                <GitHub />
              </a>
            </Tooltip>
          )}
          {project.launchURL && (
            <Tooltip title={t.tooltips.launch}>
              <a
                href={project.launchURL}
                target="__blank"
                aria-label="launch project"
                className={classes.link}
              >
                <Launch />
              </a>
            </Tooltip>
          )}
        </div>
      </div>
      <div className={classes.imageContainer}>
        <a
          href={
            project.launchURL
              ? project.launchURL
              : project.githubURL
              ? project.githubURL
              : `/${defaultLocale}${project.pageURL}`
          }
          target="__blank"
          className={classes.imageLink}
        >
          <div className={classes.imageWrapper}>
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "62.2857%" }}
            />
            <img
              src={`${project.thumbnail}`}
              alt={`Image of project ${project.title}`}
              className={classes.image}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
