
import { createTheme } from '@mui/material/styles';
import { BB_GREEN, BB_YELLOW, SUCCESS_COLOR, WARNING_COLOR } from "./colors";

const lightThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: BB_GREEN,
        },
        secondary: {
            main: BB_YELLOW,
        },
        background: {
            default: '#f8fafc',
            paper: '#f1f5f9',
        },
        warning: {
            main: WARNING_COLOR,
        },
        success: {
            main: SUCCESS_COLOR,
        },
    },
}

export const lightTheme = createTheme(lightThemeOptions)

const darkThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: BB_GREEN,
        },
        secondary: {
            main: BB_YELLOW,
        },
        background: {
            default: '#0f172a',
            paper: '#1e293b',
        },
        text: {
            primary: '#f8fafc',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            hint: 'rgba(255, 255, 255, 0.5)',
        },
        warning: {
            main: WARNING_COLOR,
        },
        success: {
            main: SUCCESS_COLOR,
        },
    },
}

export const darkTheme = createTheme(darkThemeOptions)