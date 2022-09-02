import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: "none",
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      position: "fixed",
      width: "100%",
      bottom: 0,
    },
    zIndex: 10000000,
  },
  item: {
    color: theme.palette.grey[500],
  },
  itemActive: {
    color: `${theme.palette.primary.contrastText} !important`,
  },
  bottomMenuSpace: {
    [theme.breakpoints.only("xs")]: {
      height: theme.spacing(10),
      width: "100%",
    },
  },
}));
