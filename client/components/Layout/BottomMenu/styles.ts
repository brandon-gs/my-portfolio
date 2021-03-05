import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: "none",
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      position: "fixed",
      width: "100%",
      bottom: 0,
    },
  },
  item: {
    color: theme.palette.grey[500],
  },
  itemActive: {
    color: `${theme.palette.primary.contrastText} !important`,
  },
  bottomMenuSpace: {
    height: theme.spacing(10),
    width: "100%",
  },
}));
