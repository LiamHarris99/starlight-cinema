import { createTheme } from '@mui/material';
import globalTheme from '../../../theme';

const homePageTheme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          minWidth: '10rem',
          background: globalTheme.otherColors.white,
          color: globalTheme.otherColors.black
        }
      }
    }
  }
});

export default homePageTheme;
