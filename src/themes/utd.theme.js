import { createTheme } from "@mui/material";
import orange from "../colors/orange";
import rainforest from "../colors/rainforest";
import { white } from "@mui/material/colors";

export const utdTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: orange["700"],
    },
    secondary: {
      main: rainforest["900"],
    },
    background: {
      default: white,
      paper: orange["50"],
    },
  },
});
