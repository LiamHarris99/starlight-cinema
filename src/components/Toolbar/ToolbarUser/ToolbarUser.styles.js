import { createTheme } from '@mui/material';
import globalTheme from '../../../theme';

const toolbarTheme = createTheme({
  components: {
    MuiToolbar: {
      defaultProps: {
        variant: 'dense'
      },
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          background: globalTheme.otherColors.black,
          pr: 4,
          py: 2
        }
      }
    }
  }
});

export default toolbarTheme;
