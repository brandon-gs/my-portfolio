import React from "react";
// Components
import { Container, Grid } from "@mui/material";
import ListSkills from "./ListSkills";
import Info from "./Info";
// Hooks
import useStyles from "./styles";

const About: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={10} sm={10} md={6}>
          <Info />
        </Grid>
        <Grid item xs={10} sm={10} md={6}>
          <ListSkills />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
