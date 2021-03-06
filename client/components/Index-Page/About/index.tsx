import React from "react";
// Components
import { Container, Grid } from "@material-ui/core";
import ListSkills from "./ListSkills";
import Info from "./Info";
// Hooks
import useStyles from "./styles";

export default function About(): React.ReactElement {
  const classes = useStyles();

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Grid container direction={"row"}>
        <Container maxWidth={"sm"}>
          <Info />
        </Container>
        <Container maxWidth={"sm"}>
          <ListSkills />
        </Container>
      </Grid>
    </Container>
  );
}
