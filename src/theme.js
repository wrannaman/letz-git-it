import { createMuiTheme } from '@material-ui/core/styles';
import { red, green, orange } from '@material-ui/core/colors';

// // Create a theme instance.
// const theme = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#004d40',
//     },
//     secondary: {
//       main: '#4d000d',
//     },
//     error: {
//       main: '#da2485',
//     },
//     // background: {
//     //   default: '#fff',
//     // },
//     success: {
//       main: "#629749",
//     },
//     warn: {
//       main: orange.A700
//     }
//   },
// });

const theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, lg: 1280, sm: 600, xl: 1920, md: 960 },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': { minHeight: 64 },
    },
  },
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(50, 50, 50, 0.2),0px 1px 1px 0px rgba(50, 50, 50, 0.14),0px 2px 1px -1px rgba(50, 50, 50, 0.12)',
    '0px 1px 5px 0px rgba(50, 50, 50, 0.2),0px 2px 2px 0px rgba(50, 50, 50, 0.14),0px 3px 1px -2px rgba(50, 50, 50, 0.12)',
    '0px 1px 8px 0px rgba(50, 50, 50, 0.2),0px 3px 4px 0px rgba(50, 50, 50, 0.14),0px 3px 3px -2px rgba(50, 50, 50, 0.12)',
    '0px 2px 4px -1px rgba(50, 50, 50, 0.2),0px 4px 5px 0px rgba(50, 50, 50, 0.14),0px 1px 10px 0px rgba(50, 50, 50, 0.12)',
    '0px 3px 5px -1px rgba(50, 50, 50, 0.2),0px 5px 8px 0px rgba(50, 50, 50, 0.14),0px 1px 14px 0px rgba(50, 50, 50, 0.12)',
    '0px 3px 5px -1px rgba(50, 50, 50, 0.2),0px 6px 10px 0px rgba(50, 50, 50, 0.14),0px 1px 18px 0px rgba(50, 50, 50, 0.12)',
    '0px 4px 5px -2px rgba(50, 50, 50, 0.2),0px 7px 10px 1px rgba(50, 50, 50, 0.14),0px 2px 16px 1px rgba(50, 50, 50, 0.12)',
    '0px 5px 5px -3px rgba(50, 50, 50, 0.2),0px 8px 10px 1px rgba(50, 50, 50, 0.14),0px 3px 14px 2px rgba(50, 50, 50, 0.12)',
    '0px 5px 6px -3px rgba(50, 50, 50, 0.2),0px 9px 12px 1px rgba(50, 50, 50, 0.14),0px 3px 16px 2px rgba(50, 50, 50, 0.12)',
    '0px 6px 6px -3px rgba(50, 50, 50, 0.2),0px 10px 14px 1px rgba(50, 50, 50, 0.14),0px 4px 18px 3px rgba(50, 50, 50, 0.12)',
    '0px 6px 7px -4px rgba(50, 50, 50, 0.2),0px 11px 15px 1px rgba(50, 50, 50, 0.14),0px 4px 20px 3px rgba(50, 50, 50, 0.12)',
    '0px 7px 8px -4px rgba(50, 50, 50, 0.2),0px 12px 17px 2px rgba(50, 50, 50, 0.14),0px 5px 22px 4px rgba(50, 50, 50, 0.12)',
    '0px 7px 8px -4px rgba(50, 50, 50, 0.2),0px 13px 19px 2px rgba(50, 50, 50, 0.14),0px 5px 24px 4px rgba(50, 50, 50, 0.12)',
    '0px 7px 9px -4px rgba(50, 50, 50, 0.2),0px 14px 21px 2px rgba(50, 50, 50, 0.14),0px 5px 26px 4px rgba(50, 50, 50, 0.12)',
    '0px 8px 9px -5px rgba(50, 50, 50, 0.2),0px 15px 22px 2px rgba(50, 50, 50, 0.14),0px 6px 28px 5px rgba(50, 50, 50, 0.12)',
    '0px 8px 10px -5px rgba(50, 50, 50, 0.2),0px 16px 24px 2px rgba(50, 50, 50, 0.14),0px 6px 30px 5px rgba(50, 50, 50, 0.12)',
    '0px 8px 11px -5px rgba(50, 50, 50, 0.2),0px 17px 26px 2px rgba(50, 50, 50, 0.14),0px 6px 32px 5px rgba(50, 50, 50, 0.12)',
    '0px 9px 11px -5px rgba(50, 50, 50, 0.2),0px 18px 28px 2px rgba(50, 50, 50, 0.14),0px 7px 34px 6px rgba(50, 50, 50, 0.12)',
    '0px 9px 12px -6px rgba(50, 50, 50, 0.2),0px 19px 29px 2px rgba(50, 50, 50, 0.14),0px 7px 36px 6px rgba(50, 50, 50, 0.12)',
    '0px 10px 13px -6px rgba(50, 50, 50, 0.2),0px 20px 31px 3px rgba(50, 50, 50, 0.14),0px 8px 38px 7px rgba(50, 50, 50, 0.12)',
    '0px 10px 13px -6px rgba(50, 50, 50, 0.2),0px 21px 33px 3px rgba(50, 50, 50, 0.14),0px 8px 40px 7px rgba(50, 50, 50, 0.12)',
    '0px 10px 14px -6px rgba(50, 50, 50, 0.2),0px 22px 35px 3px rgba(50, 50, 50, 0.14),0px 8px 42px 7px rgba(50, 50, 50, 0.12)',
    '0px 11px 14px -7px rgba(50, 50, 50, 0.2),0px 23px 36px 3px rgba(50, 50, 50, 0.14),0px 9px 44px 8px rgba(50, 50, 50, 0.12)',
    '0px 11px 15px -7px rgba(50, 50, 50, 0.2),0px 24px 38px 3px rgba(50, 50, 50, 0.14),0px 9px 46px 8px rgba(50, 50, 50, 0.12)',
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      standard: 300,
      short: 250,
      enteringScreen: 225,
      shorter: 200,
      leavingScreen: 195,
      shortest: 150,
      complex: 375,
    },
  },
  typography: {
    headline: {
      color: 'rgba(50, 50, 50, 0.99)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.35417em',
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    display2: {
      marginLeft: '-.02em',
      color: 'rgba(50, 50, 50, 0.54)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.13333em',
      fontSize: '2.8125rem',
      fontWeight: 400,
    },
    fontWeightLight: 300,
    display3: {
      marginLeft: '-.02em',
      color: 'rgba(50, 50, 50, 0.54)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '-.02em',
      lineHeight: '1.30357em',
      fontSize: '3.5rem',
      fontWeight: 400,
    },
    display4: {
      marginLeft: '-.04em',
      color: 'rgba(50, 50, 50, 0.54)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '-.04em',
      lineHeight: '1.14286em',
      fontSize: '7rem',
      fontWeight: 300,
    },
    fontWeightRegular: 400,
    display1: {
      color: 'rgba(50, 50, 50, 0.54)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.20588em',
      fontSize: '2.125rem',
      fontWeight: 400,
    },
    button: {
      textTransform: 'uppercase',
      color: '#fff',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 500,
      // border: '2px solid #da3251',
      // backgroundColor: "#da3251",
      background: "linear-gradient(to right, #7a0fff 0%, #46bdf4 100%)",
      borderRadius: "27px",
      paddingLeft: "18px",
      paddingRight: "18px",
      letterSpacing: "0.05em",
      "&:hover": {
        background: "linear-gradient(to right, #46bdf4 0%, #7a0fff 100%)",
      }
    },
    fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
    body2: {
      color: 'rgba(50, 50, 50, 0.99)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.71429em',
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    caption: {
      color: 'rgba(50, 50, 50, 0.54)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.375em',
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    fontSize: 14,
    fontWeightMedium: 500,
    title: {
      color: 'rgba(50, 50, 50, 0.80)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.16667em',
      fontSize: '1.3125rem',
      fontWeight: 500,
    },
    subheading: {
      color: 'rgba(50, 50, 50, 0.80)',
      fontFamily: '"Quicksand", "Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.5em',
      fontSize: '1rem',
      fontWeight: 400,
    },
    body1: {
      color: 'rgba(50, 50, 50, 0.80)',
      fontFamily: '"Quicksand", sans-serif',
      lineHeight: '1.46429em',
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    label: {
      color: 'red'
    }
  },
  zIndex: {
    modal: 1300,
    snackbar: 1400,
    drawer: 1200,
    appBar: 1100,
    mobileStepper: 1000,
    tooltip: 1500,
  },
  shape: { borderRadius: 10 },
  palette: {
    tonalOffset: 0.2,
    background: {
      default: '#fff',
    },
    contrastThreshold: 3,
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A700: '#616161',
      A100: '#d5d5d5',
      A400: '#303030',
      A200: '#aaaaaa',
    },
    text: {
      primary: 'rgba(50, 50, 50, 0.99)',
      secondary: 'rgba(50, 50, 50, 0.94)',
      disabled: 'rgba(50, 50, 50, 0.58)',
      hint: 'rgba(50, 50, 50, 0.58)',
    },
    divider: 'rgba(50, 50, 50, 0.12)',
    primary: {
      main: '#202020',
      light: '#7a0fff',
      dark: 'rgb(0, 53, 44)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#46bdf4',
      light: '#46bdf4',
      dark: '#46bdf4',
      contrastText: '#fff',
    },
    common: { black: '#000', white: '#fff' },
    error: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    type: 'light',
    action: {
      hoverOpacity: 0.08,
      hover: 'rgba(50, 50, 50, 0.08)',
      selected: 'rgba(50, 50, 50, 0.14)',
      disabledBackground: 'rgba(50, 50, 50, 0.12)',
      disabled: 'rgba(50, 50, 50, 0.26)',
      active: 'rgba(50, 50, 50, 0.54)',
    },

    // background: {
    //   default: '#fff',
    // },
    success: {
      main: '#10fd40',
      light: 'rgb(51, 255, 102)',
      dark: 'rgb(0, 255, 44)',
    },
    warn: {
      main: orange.A700,
    },
  },
  themeName: 'Aqua Deep Razzmatazz Patagonian Toothfish',
  overrides: {
    MuiTab: {
      root: {
        backgroundColor: '#fff',
        borderColor: '#fff'
      }
    },
    MuiButton: {
      textPrimary: {
        color: '#fff'
      },
      disabled: {
        backgroundColor: "grey"
      },
      label: {
        color: '#fff'
      }
    },
    MuiAppBar: {
      root: {
        background: "linear-gradient(to right, #7a0fff 0%, #46bdf4 100%)"
      }
    },
  }
});

export default theme;
