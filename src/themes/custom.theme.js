import { createTheme } from "@mui/material";
import fireengine from "../colors/fireengine";
import turquoise from "../colors/turquoise";


export const customTheme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    mode: "dark",
    primary: {
      main: fireengine["500"],
    },
    secondary: {
      main: turquoise["900"],
    },
    background: {
      default: turquoise["100"],
      paper: fireengine["100"],
    },
  },
});
