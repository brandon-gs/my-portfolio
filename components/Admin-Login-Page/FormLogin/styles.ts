import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
    width: "100%",
    height: "100%",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  formInput: {
    margin: theme.spacing(1),
  },
}));
