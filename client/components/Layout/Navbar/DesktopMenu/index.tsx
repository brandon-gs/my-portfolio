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

export default function DesktopMenu(): JSX.Element {
  const { t, defaultLocale, isSpanishPage } = useTranslation(localeEs, localeEn);
  const classes = useStyles();
  return (
    <>
      <div className={classes.sectionDesktop}>
        <Button
          color="inherit"
          component={Link}
          href={`/${defaultLocale}`}
          naked
        >
          {t.home}
        </Button>
        <Button
          color="inherit"
          component={Link}
          href={`/${defaultLocale}/projects`}
          naked
        >
          {t.projects}
        </Button>
        <Button
          color="inherit"
          component={Link}
          href={`/${defaultLocale}/contact`}
          naked
        >
          {t.contact}
        </Button>
        <Button
          color="inherit"
          component={Link}
          href={isSpanishPage ? "/files/CV_S.pdf" : "/files/CV.pdf"}
          target="_blank"
        >
          {t.resume}
        </Button>
      </div>
      <MobileMenu />
    </>
  );
}
