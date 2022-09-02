import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  iconWithOutMargin: {
    marginLeft: 0,
  },
}));
