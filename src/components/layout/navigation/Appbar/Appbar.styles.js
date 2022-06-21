import { createTheme } from '@mui/material';
import globalTheme from '../../../../theme';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: 'static',
          background: globalTheme.otherColors.white
        }
      }
    }
  }
});

export default theme;
