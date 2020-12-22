import { ListProject } from "interfaces";
import { Container, Typography } from "@material-ui/core";
import CardProject from "../CardProject";
import useStyles from "./styles";

const data: ListProject = [
  {
    title: "Test project",
    thumbnail: "/img/projects/test.png",
  },
];

export default function ListProjects() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h3" component="h1" className={classes.title}>
        List of projects
      </Typography>
      {data.map((project, index) => (
        <CardProject project={project} key={`project-${index}`} />
      ))}
    </Container>
  );
}
