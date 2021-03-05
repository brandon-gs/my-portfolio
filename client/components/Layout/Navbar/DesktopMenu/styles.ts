import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
