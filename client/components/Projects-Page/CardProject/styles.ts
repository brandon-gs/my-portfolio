import { makeStyles } from "tss-react/mui";

const transition =
  "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s";

export default makeStyles()((theme) => ({
  container: {
    display: "grid",
    gap: 10,
    gridTemplateColumns: "repeat(12, 1fr)",
    alignItems: "center",
    marginBottom: theme.spacing(10),
    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
    transition,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(7),
      color: "#FFF",
    },
  },
  infoContainer: {
    position: "relative",
    gridArea: "1 / 1 / -1 / 7",
    textAlign: "inherit",
    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / -1",
      zIndex: 5,
      margin: theme.spacing(5, 5, 4),
    },
  },
  imageContainer: {
    boxShadow: "0 10px 30px -15px #1e3799",
    gridArea: "1 / 6 / -1 / -1",
    position: "relative",
    zIndex: 1,
    transition,
    height: "100%",
    "&::selection": {
      backgroundColor: "#8892b0",
      color: "#ccd6f6",
    },
    "&:hover": {
      boxShadow: "0 20px 30px -15px #1e3799",
    },
    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / -1",
    },
  },
  descriptionContainer: {
    boxShadow: "0 10px 30px -15px #273c75",
    position: "relative",
    display: "flex",
    alignItems: "center",
    zIndex: 10,
    padding: theme.spacing(3),
    borderRadius: 5,
    backgroundColor: "#192a56",
    color: theme.palette.primary.contrastText,
    minHeight: 122,
  },
  finished: {
    color: theme.palette.success.dark,
    fontWeight: "bold",
    letterSpacing: 1.1,
    [theme.breakpoints.down("md")]: {
      color: theme.palette.success.light,
    },
  },
  inProgress: {
    color: theme.palette.error.main,
    fontWeight: "bold",
    letterSpacing: 1.1,
    [theme.breakpoints.down("md")]: {
      color: theme.palette.error.light,
    },
  },
  title: {
    margin: theme.spacing(0, 0, 3),
    letterSpacing: -1.2,
    fontWeight: "bold",
    lineHeight: 1.1,
    textTransform: "uppercase",
  },
  description: {
    margin: 0,
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 1.4,
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
    padding: 0,
    listStyle: "outside none none",
    margin: theme.spacing(3, 0, 1),
    justifyContent: "flex-start",
  },
  listItem: {
    "&:nth-child(even)": {
      margin: "0 20px 5px 0",
    },
    "&:nth-child(odd)": {
      margin: "0 20px 5px 0",
    },
    whiteSpace: "nowrap",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: theme.palette.grey[700],
    [theme.breakpoints.down("md")]: {
      color: theme.palette.grey[100],
    },
  },
  link: {
    color: "inherit",
    cursor: "pointer",
    transition,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  linksContainer: {
    direction: "ltr",
  },
  linksCotainerRight: {
    "& $link": {
      marginRight: 10,
    },
    "& $link:last-child": {
      marginRight: 0,
    },
  },
  linksContainerLeft: {
    "& $link": {
      marginLeft: 10,
    },
    "& $link:first-child": {
      marginLeft: 0,
    },
  },
  imageLink: {
    display: "inline-block",
    width: "100%",
    position: "relative",
    borderRadius: 5,
    verticalAlign: "middle",
    textDecorationSkipInk: "auto",
    cursor: "pointer",
    height: "inherit",
    transition,
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      inset: 0,
      zIndex: 3,
      backgroundColor: "#4b6584",
      mixBlendMode: "screen",
      transition,
      opacity: 0.5,
    },
    "&:hover": {
      "&::before": {
        background: "transparent none repeat scroll 0% 0%",
        filter: "none",
      },
      "& $imageWrapper": {
        filter: "none",
        background: "transparent none repeat scroll 0% 0%",
      },
      background: "transparent none repeat scroll 0% 0%",
    },
    [theme.breakpoints.down("md")]: {
      "&:hover": {
        "& $imageWrapper": {
          "& $image": {
            filter: "brightness(35%)",
          },
        },
      },
      backgroundColor: "#4b6584",
    },
  },
  imageWrapper: {
    position: "relative",
    overflow: "hidden",
    mixBlendMode: "multiply",
    width: "100%",
    maxWidth: "100%",
    height: "inherit",
    transition,
    "&:hover": {
      background: "transparent none repeat scroll 0% 0%",
      filter: "none",
    },
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    transitionDelay: "500ms",
    maxWidth: "100%",
    transition,
    [theme.breakpoints.down("md")]: {
      filter: "brightness(35%)",
    },
  },
}));
