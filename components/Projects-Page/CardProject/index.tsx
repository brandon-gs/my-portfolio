import { Project } from "interfaces";
import { ButtonBase, Typography } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  project: Project;
}

export default function CardProject({ project }: Props) {
  const classes = useStyles();
  return (
    <ButtonBase
      focusRipple
      key={project.title}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: project.width || 350,
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${process.env.ASSET_PREFIX}${project.thumbnail})`,
        }}
      />
      <span className={classes.imageBackdrop} />
      <div className={classes.info}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {project.title}
        </Typography>
      </div>
    </ButtonBase>
  );
}
