import React, { useEffect, useState } from "react";
// Components
import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { Link } from "components";
import DesktopMenu from "./DesktopMenu";
// Hooks
import useStyles from "./styles";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const classes = useStyles();

  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY < 10) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    });
  });

  return (
    <HideOnScroll>
      <AppBar position={isOnTop ? "static" : "sticky"} className={classes.grow}>
        <Toolbar>
          <Typography
            component={Link}
            href={"/"}
            naked
            variant="h6"
            className={classes.logo}
          >
            <img
              src={`${process.env.ASSET_PREFIX}/img/logo_sm.png`}
              alt="Logo de Brandon"
            />
          </Typography>
          <div className={classes.grow} />
          <DesktopMenu />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
