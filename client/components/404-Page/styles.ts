import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "calc(100vh - 64px)",
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      height: "calc(100vh - 56px)",
    },
  },
  name: {
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 8,
    [theme.breakpoints.only("sm")]: {
      fontSize: "3.5em",
    },
    [theme.breakpoints.only("xs")]: {
      letterSpacing: 5,
      fontSize: "2em",
    },
  },
  text: {
    fontSize: "2em",
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "323px",
      letterSpacing: 4,
      fontSize: "1.3em",
    },
  },
  buttonsContainer: {
    marginTop: theme.spacing(2),
    flexWrap: "wrap",
  },
  buttonContainer: {
    minWidth: 221,
  },
  button: {
    width: "100%",
  },
}));
