import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
    cursor: "default",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  listItemText: {
    textTransform: "uppercase",
  },
}));
