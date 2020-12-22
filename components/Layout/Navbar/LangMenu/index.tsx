import React, { useState, useRef, useEffect, Fragment } from "react";
// Components
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  useMediaQuery,
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
  const matchMobile = useMediaQuery("(max-width:800px)");
  const {
    t,
    router,
    defaultLocale,
    isSpanishPage,
    isEnglishPage,
  } = useTranslation(localeEs, localeEn);

  const [open, setOpen] = useState<boolean>(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (locale: string) => async (
    event: React.MouseEvent<EventTarget>
  ) => {
    const existsAnchorRef =
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement);
    if (existsAnchorRef) {
      return;
    }
    setOpen(false);
    // Replace route
    await router.replace(router.asPath, router.asPath, { locale });
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
      anchorRef.current!.focus();
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
              <ClickAwayListener onClickAway={handleClose(defaultLocale)}>
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
                    <img
                      alt="Spanish flag"
                      src="/img/flags/spain.png"
                      className={classes.flagImage}
                    />
                    {t.spanish}
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose("en")}
                    className={isEnglishPage ? classes.flagActive : undefined}
                  >
                    <img
                      alt="United Kingdom flag"
                      src="/img/flags/united-kingdom.png"
                      className={classes.flagImage}
                    />
                    {t.english}
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
}
