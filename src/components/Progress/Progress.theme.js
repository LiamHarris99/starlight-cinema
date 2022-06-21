import { createTheme } from '@mui/material';
import globalTheme from '../../theme';

const progressTheme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: 10,
          color: globalTheme.otherColors.white
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: 'inherit'
        }
      }
    }
  }
});

export default progressTheme;
