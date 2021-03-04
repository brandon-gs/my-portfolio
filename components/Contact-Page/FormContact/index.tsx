// Componentes
import { Container, Grid, Typography } from "@material-ui/core";
import { MailOutline } from "@material-ui/icons";
// SVG
import Fiverr from "./fiverr.svg";
import Workana from "./workana.svg";
// Styles
import useStyles from "./styles";
// Locale
import { localeEn, localeEs } from "./locale";
import { useTranslation } from "hooks";

const WORKANA_PROFILE =
  "https://www.workana.com/freelancer/60d428f6d3701a152e234e0b1b64f406";

const FIVERR_GIG =
  "https://www.fiverr.com/brandongs180/create-your-react-js-application-with-next-js-and-mongodb";

export default function FormContact(): React.ReactElement {
  const classes = useStyles();
  const { t } = useTranslation(localeEs, localeEn);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography component="h1" variant="h3" className={classes.title}>
            {t.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" variant="body2" className={classes.text}>
            {t.message}
          </Typography>
        </Grid>
        <Grid item className={classes.emailLinkContainer}>
          <a href="mailto:brandongs180@gmail.com" className={classes.emailLink}>
            <MailOutline className={classes.emailIcon} />
            {t.email}
          </a>
        </Grid>
        <Grid item className={classes.emailLinkContainer}>
          <a
            href={WORKANA_PROFILE}
            target="__blank"
            className={classes.emailLink}
          >
            <div
              className={classes.emailIcon}
              style={{
                width: 24,
                height: 24,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Workana
                className={classes.emailIcon}
                style={{ position: "absolute", left: -346.6, height: 24 }}
              />
            </div>
            {t.workana}
          </a>
        </Grid>
        <Grid item className={classes.emailLinkContainer}>
          <a href={FIVERR_GIG} target="__blank" className={classes.emailLink}>
            <Fiverr
              className={classes.emailIcon}
              style={{
                width: 24,
                height: 18,
              }}
            />
            {t.fiverr}
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}
