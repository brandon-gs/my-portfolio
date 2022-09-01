import React from "react";
import clsx from "clsx";
// Components
import { Link } from "components";
import {
  GitHub as GitHubIcon,
  // LinkedIn as LinkedInIcon,
  // YouTube as YouTubeIcon,
} from "@material-ui/icons";
import LanguageMenu from "../LangMenu";
// Hooks
import useStyles from "./styles";

export default function MobileMenu(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <LanguageMenu />
      <Link
        href="https://github.com/brandon-gs"
        aria-label="Github BrandonGS"
        color="inherit"
        target="_blank"
        className={clsx(classes.icon, classes.iconWithOutMargin)}
      >
        <GitHubIcon />
      </Link>
    </>
  );
}
