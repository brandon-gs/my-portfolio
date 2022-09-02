import React from "react";
import clsx from "clsx";
import { localeEs, localeEn } from "./locale";
// Components
import Image from "next/image";
import { Button, Container, Grid, Typography } from "@mui/material";
import {
  Work as WorkIcon,
  ContactMail as ContactMailIcon,
} from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import { Link } from "components";
// Hooks
import useStyles from "./styles";
import { useTranslation } from "hooks";

export default function Dashboard(): React.ReactElement {
  const { classes } = useStyles();
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <main className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Image
              src={`/img/logo_sm.png`}
              width={200}
              height={200}
              alt="Logo BrandonGS"
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              component="h1"
              align="center"
              gutterBottom
              className={classes.name}
            >
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Brandon García")
                    .start()
                    .pauseFor(2500);
                }}
              />
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              className={clsx(classes.name, classes.text)}
            >
              {t.career}
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              className={classes.buttonsContainer}
            >
              <Grid item className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  className={classes.button}
                  startIcon={<WorkIcon />}
                  component={Link}
                  href="/projects"
                  naked
                >
                  {t.projects}
                </Button>
              </Grid>
              <Grid item className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  startIcon={<ContactMailIcon />}
                  fullWidth
                  component={Link}
                  href="/contact"
                  naked
                >
                  {t.contact}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
