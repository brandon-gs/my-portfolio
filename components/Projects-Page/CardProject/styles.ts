import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.5,
      },
      "& $info": {
        opacity: 1,
      },
    },
  },
  info: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "47%",
    opacity: 0,
    transition: theme.transitions.create("opacity"),
  },
  infoLink: {
    margin: theme.spacing(0, 0, 2),
  },
  focusVisible: {},
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: "bold",
  },
}));
