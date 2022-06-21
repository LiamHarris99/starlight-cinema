import { createTheme } from '@mui/material';
import globalTheme from '../../../theme';

const loginPageTheme = createTheme(globalTheme, {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          borderRadius: '1.5rem'
        }
      }
    }
  }
});

export default loginPageTheme;
