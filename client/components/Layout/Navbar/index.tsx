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

export default function Navbar(): React.ReactElement {
  const classes = useStyles();

  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", function () {
      if (window.scrollY < 10) {
        if (mounted) {
          setIsOnTop(true);
        }
      } else {
        if (mounted) {
          setIsOnTop(false);
        }
      }
    });
    return () => {
      mounted = false;
      window.removeEventListener("scroll", () => null);
    };
  });

  const boxShadow = isOnTop
    ? "none"
    : "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)";

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.grow} style={{ boxShadow }}>
          <Toolbar>
            <Typography
              component={Link}
              href={"/"}
              naked
              variant="h6"
              className={classes.logo}
            >
              <img src={`/img/logo_sm.png`} alt="Logo de Brandon" />
            </Typography>
            <div className={classes.grow} />
            <DesktopMenu />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar className={classes.toolbarFill} />
    </>
  );
}
