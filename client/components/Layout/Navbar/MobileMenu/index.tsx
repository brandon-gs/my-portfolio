import React from "react";
import clsx from "clsx";
// Components
import { Link } from "components";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
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
        color="inherit"
        target="_blank"
        className={clsx(classes.icon, classes.iconWithOutMargin)}
      >
        <GitHubIcon />
      </Link>
      {/*
      <Link
        href="https://www.linkedin.com/in/brandon-garc%C3%ADa-s%C3%A1nchez-991264186/"
        color="inherit"
        target="_blank"
        className={classes.icon}
      >
        <LinkedInIcon />
      </Link>
       <Link
        href="https://www.youtube.com/channel/UC1O0G0cCW6JfDT8WzjesWLg/videos"
        color="inherit"
        target="_blank"
        className={classes.icon}
      >
        <YouTubeIcon />
      </Link> */}
    </>
  );
}
