import React, { useState } from "react";
// Components
import {
  Home as HomeIcon,
  ContactMail as ContactMailIcon,
  Work as WorkIcon,
} from "@material-ui/icons";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// Hooks
import { useTranslation } from "hooks/";
import { localeEs, localeEn } from "./locale";
import { NextRouter, useRouter } from "next/router";
import useStyles from "./styles";

const pages = ["/", "/projects", "/contact"];

const getValue = (router: NextRouter) => {
  const url = router.pathname;
  return pages.indexOf(url);
};

export default function BottomMenu() {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation(localeEs, localeEn);
  const [value] = useState(getValue(router));

  const isActive = (index: number) => {
    return index === value ? classes.itemActive : classes.item;
  };

  const redirectToPage = async (index: number) => {
    const page = pages[index];
    await router.push(page);
  };

  return (
    <>
      <div className={classes.bottomMenuSpace}></div>
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => {
          redirectToPage(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label={t.home}
          icon={<HomeIcon />}
          className={isActive(0)}
        />
        <BottomNavigationAction
          label={t.projects}
          icon={<WorkIcon />}
          className={isActive(1)}
        />
        <BottomNavigationAction
          label={t.contact}
          icon={<ContactMailIcon />}
          className={isActive(2)}
        />
      </BottomNavigation>
    </>
  );
}
