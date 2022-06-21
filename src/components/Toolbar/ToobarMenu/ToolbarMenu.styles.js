import { createTheme } from '@mui/material';
import globalTheme from '../../../theme';

const toolbarMenuTheme = createTheme({
  components: {
    MuiToolbar: {
      defaultProps: {
        variant: 'dense'
      },
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          background: globalTheme.otherColors.white
        }
      }
    }
  }
});

export default toolbarMenuTheme;
