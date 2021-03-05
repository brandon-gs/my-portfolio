import { featuredProjects } from "utils/list-projects";
import CardProject from "../CardProject";
import LazyLoad from "react-lazy-load";
import useStyles from "./styles";

export default function ListProjects(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {featuredProjects.map((project, index) => (
        <LazyLoad key={`project-${index}`}>
          <CardProject project={project} index={index} />
        </LazyLoad>
      ))}
    </div>
  );
}
