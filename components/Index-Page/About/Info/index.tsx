import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { localeEs, localeEn } from "./locale";
import useStyles from "./styles";
import { useTranslation } from "hooks";

export default function Info(): React.ReactElement {
  const classes = useStyles();

  const { t } = useTranslation(localeEs, localeEn);

  return (
    <Grid container direction={"column"}>
      <Grid item sm>
        <Typography component={"h2"} variant={"h3"} align={"center"}>
          {t.title}
        </Typography>
      </Grid>
      <Grid item sm>
        <Typography
          component={"p"}
          variant={"subtitle1"}
          align={"center"}
          className={classes.text}
        >
          {t.about}
        </Typography>
      </Grid>
    </Grid>
  );
}
