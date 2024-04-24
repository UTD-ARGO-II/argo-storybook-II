import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";
import rainforest from "../colors/rainforest";

export const rainforestTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: rainforest["500"],
      },
      secondary: {
        main: rainforest["400"],
      },
      background: {
        default: rainforest["800"],
        paper: rainforest["700"],
      },
    },
  });