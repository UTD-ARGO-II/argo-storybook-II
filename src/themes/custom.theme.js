import { createTheme } from "@mui/material";
import fireengine from "../colors/fireengine";
import turquoise from "../colors/turquoise";

export const customTheme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    mode: "dark",
    primary: {
      main: fireengine["200"],
    },
    secondary: {
      main: turquoise["300"],
    },
    background: {
      default: turquoise["400"],
      paper: fireengine["100"],
    },
  },
});
