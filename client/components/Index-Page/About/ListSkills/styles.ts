import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  listContainer: {
    display: "flex",
    flexGrow: 1,
  },
  listItemButton: {
    width: 160,
    display: "flex",
    justifyContent: "flex-start",
    margin: theme.spacing(1),
    fontSize: "1em",
    color: `${theme.palette.primary.main} !important`,
    cursor: "default",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  listItemText: {
    textTransform: "uppercase",
  },
}));
