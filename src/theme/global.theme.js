import { createTheme } from '@mui/material';

const globalTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          width: 'auto'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      }
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: { horizontal: 'center', vertical: 'top' },
        autoHideDuration: 2500
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    }
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10
  },
  palette: {
    primary: {
      main: '#F37A3B',
      light: '#F37737',
      dark: '#D74A00'
    },
    background: {
      default: '#fff'
    }
  },
  legend: {
    authen: {
      color: 'green'
    }
  },
  otherColors: {
    black: '#22272B',
    gray: '#495057',
    white: '#fff',
    cyan: '#5DB3BE',
    purple: '#7B82A7',
    orangeLight: '#f7ac85'
  }
});

export default globalTheme;
