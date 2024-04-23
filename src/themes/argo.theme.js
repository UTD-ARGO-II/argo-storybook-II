import { createTheme } from "@mui/material";
import { alpha } from "@mui/material";
import { getContrastRatio } from "@mui/material";
const primaryMain = '#01579b';
const secondaryMain = '#2962ff';
const successMain = '#7db249';
const warningMain = '#faaa3a';
const errorMain = '#c62828';
const paperMain = '#0b0b0b';




export const argoTheme = createTheme({
    palette: {
        primary: {
          main: primaryMain,
          light: alpha(primaryMain, 0.5),
          dark: alpha(primaryMain, 0.9),
          contrastText: getContrastRatio(primaryMain, '#fff') > 4.5 ? '#fff' : '#111'
        },
        secondary: {
          main: secondaryMain,
          light: alpha(secondaryMain, 0.5),
          dark: alpha(secondaryMain, 0.9),
          contrastText: getContrastRatio(secondaryMain, '#fff') > 4.5 ? '#fff' : '#111'
        },
    
        background: {
            main: '#f8f8f8',
            paper: alpha(paperMain, 0.5),
            contrastText: getContrastRatio(paperMain, '#fff') > 4.5 ? '#fff' : '#111'
        },
        error: {
            main: errorMain,
            light: alpha(errorMain, 0.5),
            dark: alpha(errorMain, 0.9),
            contrastText: getContrastRatio(errorMain, '#fff') > 4.5 ? '#fff' : '#111'
        },
        success: {
            main: successMain,
            light: alpha(successMain, 0.5),
            dark: alpha(successMain, 0.9),
            contrastText: getContrastRatio(successMain, '#fff') > 4.5 ? '#fff' : '#111'
        },
        warning: {
            main: warningMain,
            light: alpha(warningMain, 0.5),
            dark: alpha(warningMain, 0.9),
            contrastText: getContrastRatio(warningMain, '#fff') > 4.5 ? '#fff' : '#111'
        }
    },
});
