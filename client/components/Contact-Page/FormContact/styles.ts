import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, "auto"),
  },
  title: {
    margin: theme.spacing(0, 0, 3),
  },
  text: {
    margin: theme.spacing(0, "auto", 3),
    fontSize: 16,
    lineHeight: 1.75,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  emailLinkContainer: {
    margin: theme.spacing(2, "auto", 0),
  },
  emailIcon: {
    marginRight: theme.spacing(1),
  },
  emailLink: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minWidth: 210,
    minHeight: 52,
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
    color: theme.palette.primary.dark,
    borderRadius: 5,
    padding: theme.spacing(1.5, 1),
    border: `2px solid ${theme.palette.primary.main}`,
    transition: "all .5s",
    "&::before": {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0.3,
      transition: "all .3s",
    },
    "&:hover": {
      "&::before": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
}));
