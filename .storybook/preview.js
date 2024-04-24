import "../src/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

import { darkTheme } from "../src/themes/dark.theme";
import { lightTheme } from "../src/themes/light.theme";
import { rainforestTheme } from "../src/themes/rainforest.theme";
import { argoTheme } from "../src/themes/argo.theme";
import { utdTheme } from "../src/themes/utd.theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
        { value: "rain", left: " ", title: "rainforest theme"},
        { value: "argo", left: " ", title: "ARGO theme"},
        { value: "utd", left: " ", title: "UTD theme"}
      ],
    },
  },
};

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
  rain: rainforestTheme,
  argo: argoTheme,
  utd: utdTheme
};

export const withMuiTheme = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];
