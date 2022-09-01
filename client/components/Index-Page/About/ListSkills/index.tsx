import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { localeEn, localeEs } from "./locale";
import { useTranslation } from "hooks";
import useStyles from "./styles";
import listSkills from "./helpers/listSkills";

const ListSkills: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation(localeEs, localeEn);

  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Typography component={"h2"} variant={"h3"} align={"center"}>
          {t.title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center">
          {listSkills.map(({ IconComponent, skill }, index) => {
            return (
              <Grid item key={`list-${skill}-${index}`}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<IconComponent />}
                  className={classes.listItemButton}
                >
                  {skill}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListSkills;
