import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    display: "flex",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  toolbarFill: {
    backgroundColor: theme.palette.primary.main,
  },
}));
