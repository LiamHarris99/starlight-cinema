import { createTheme } from '@mui/material';
import globalTheme from '../../../theme';

const registerTheme = createTheme(globalTheme, {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '45%'
        }
      }
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'row',
          width: '45%'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.8rem'
        }
      }
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'rules' },
          style: {
            color: globalTheme.otherColors.grey,
            fontSize: '0.65rem',
            textAlign: 'center',
            clear: 'both'
          }
        }
      ]
    }
  }
});

export default registerTheme;
