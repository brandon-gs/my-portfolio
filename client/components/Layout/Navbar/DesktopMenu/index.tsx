import React from "react";
// Components
import { Button, Box } from "@mui/material";
import { Link } from "components/";
import MobileMenu from "../MobileMenu";
// Translation
import { useTranslation } from "hooks";
import { localeEn, localeEs } from "../locale";
// Hooks
// import useStyles from "./styles";

export default function DesktopMenu(): JSX.Element {
  const { t } = useTranslation(localeEs, localeEn);
  return (
    <>
      <Box display={{ xs: "none", sm: "flex" }}>
        <Button color="inherit" component={Link} href={`/`} naked>
          {t.home}
        </Button>
        <Button color="inherit" component={Link} href={`/projects`} naked>
          {t.projects}
        </Button>
        <Button color="inherit" component={Link} href={`/contact`} naked>
          {t.contact}
        </Button>
      </Box>
      <MobileMenu />
    </>
  );
}
