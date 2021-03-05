import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuList: {
    padding: 0,
  },
  flagImage: {
    width: 40,
    height: 40,
    margin: theme.spacing(0, 1, 0, 0),
  },
  flagContainer: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: "#FFF",
    },
  },
  flagActive: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
