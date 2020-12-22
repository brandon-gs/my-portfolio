import React from "react";
// Components
import { Button } from "@material-ui/core";
import { Link } from "components/";
import MobileMenu from "../MobileMenu";
// Translation
import { useTranslation } from "hooks";
import { localeEn, localeEs } from "../locale";
// Hooks
import useStyles from "./styles";

export default function DesktopMenu() {
  const { t } = useTranslation(localeEs, localeEn);
  const classes = useStyles();
  return (
    <>
      <div className={classes.sectionDesktop}>
        <Button color="inherit" component={Link} href="/" naked>
          {t.home}
        </Button>
        <Button color="inherit" component={Link} href="/projects" naked>
          {t.projects}
        </Button>
        <Button color="inherit" component={Link} href="/contact" naked>
          {t.contact}
        </Button>
        <Button
          color="inherit"
          component={Link}
          href="/files/CV.pdf"
          target="_blank"
        >
          {t.resume}
        </Button>
      </div>
      <MobileMenu />
    </>
  );
}
