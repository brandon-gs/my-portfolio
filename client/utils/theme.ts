import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const fontFamily =
  '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

// Shared palette with client/styles/global.css tokens.
const theme = createTheme({
  palette: {
    primary: {
      main: "#24634c",
      dark: "#1b4f3c",
      light: "#e2efe7",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#172f2b",
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#338459",
    },
    info: {
      main: "#24634c",
    },
    text: {
      primary: "#172f2b",
      secondary: "#5b6b64",
    },
    divider: "#dfe4d8",
    background: {
      default: "#f7f8f2",
      paper: "#fffefa",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily,
    h1: { fontWeight: 600, letterSpacing: "-0.03em" },
    h2: { fontWeight: 600, letterSpacing: "-0.03em" },
    h3: { fontWeight: 600, letterSpacing: "-0.025em" },
    h4: { fontWeight: 600, letterSpacing: "-0.02em" },
    h5: { fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
