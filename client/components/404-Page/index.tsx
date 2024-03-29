import React from "react";
import { localeEs, localeEn } from "./locale";
// Components
import Image from "next/image";
import { Container, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { Link } from "components";
// Hooks
import useStyles from "./styles";
import { useTranslation } from "hooks";

function NotFoundMessage() {
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
            <Link href="/">
              <Image
                src={`/img/logo_sm.png`}
                width={200}
                height={200}
                alt="Logo BrandonGS"
              />
            </Link>
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
                  typewriter.typeString(t.message).start().pauseFor(2000);
                }}
              />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default NotFoundMessage;
