import React from "react";
import { featuredProjects, currentProjects } from "utils/list-projects";
import CardProject from "../CardProject";
import useStyles from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useTranslation } from "hooks";
import { localeEn, localeEs } from "./locale";

export default function ListProjects(): React.ReactElement {
  const classes = useStyles();
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <div className={classes.container}>
      <Box mb={3}>
        <Typography
          component={"h2"}
          variant={"h3"}
          align={"center"}
          className={classes.inProgress}
        >
          {t.currentProject}
        </Typography>
      </Box>
      {currentProjects.map((project, index) => (
        <CardProject project={project} index={index} key={`project-${index}`} />
      ))}
      <Box mb={3}>
        <Typography
          component={"h2"}
          variant={"h3"}
          align={"center"}
          className={classes.finished}
        >
          {t.finishedProjects}
        </Typography>
      </Box>
      {featuredProjects.map((project, index) => (
        <CardProject project={project} index={index} key={`project-${index}`} />
      ))}
    </div>
  );
}
