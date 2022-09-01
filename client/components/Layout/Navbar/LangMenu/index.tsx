import React, { useState, useRef, useEffect, Fragment } from "react";
// Components
import Image from "next/image";
import {
  Button,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import {
  Translate as TranslateIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@material-ui/icons";
// Hooks
import useStyles from "./styles";

// Locale
import { localeEs, localeEn } from "./locale";
import { useTranslation } from "hooks";

export default function LanguageMenu() {
  const classes = useStyles();
  const { t, router, isSpanishPage, isEnglishPage } = useTranslation(
    localeEs,
    localeEn
  );

  const [open, setOpen] = useState<boolean>(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose =
    (nextLocale: string) => async (event: React.MouseEvent<EventTarget>) => {
      const existsAnchorRef =
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement);
      if (existsAnchorRef) {
        return;
      }
      setOpen(false);
      // Replace route
      router.push(
        {
          pathname: router.route,
        },
        router.asPath,
        { locale: nextLocale }
      );
    };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const currentLanguage = isEnglishPage ? "English" : "Español";

  return (
    <Fragment>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        aria-label="account of current user"
        color="inherit"
      >
        <TranslateIcon />
        {currentLanguage}
        <ArrowDropDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
                className={classes.menuList}
              >
                <MenuItem
                  onClick={handleClose("es")}
                  className={
                    isSpanishPage ? classes.flagActive : classes.flagContainer
                  }
                >
                  <Image
                    src={"/img/flags/spain.png"}
                    alt="Spain Flag"
                    width={40}
                    height={40}
                  />
                  <Typography className={classes.flag} component="span">
                    {t.spanish}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleClose("en")}
                  className={isEnglishPage ? classes.flagActive : undefined}
                >
                  <Image
                    src={"/img/flags/united-kingdom.png"}
                    alt="United Kingdom Flag"
                    width={40}
                    height={40}
                  />
                  <Typography className={classes.flag} component="span">
                    {t.english}
                  </Typography>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
}
