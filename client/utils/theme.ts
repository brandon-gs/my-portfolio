import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3867d6",
    },
    secondary: {
      main: "#8854d0",
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#4caf50",
    },
    info: {
      main: "#00b894",
    },
    background: {
      default: "#f5f6fa",
    },
  },
});

export default theme;
