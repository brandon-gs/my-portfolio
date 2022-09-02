import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  container: {
    margin: theme.spacing(0, "auto"),
    padding: theme.spacing(5, 0),
    maxWidth: 950,
    [theme.breakpoints.down("md")]: {
      maxWidth: 600,
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0, 1),
    },
  },
  inProgress: {
    color: theme.palette.error.main,
  },
  finished: {
    color: theme.palette.success.dark,
  },
}));
