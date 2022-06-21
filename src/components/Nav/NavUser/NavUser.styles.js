import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import globalTheme from '../../../theme';

const navUserTheme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          columnGap: '1rem'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          listStyle: 'none',
          padding: 0,
          width: 'auto'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: globalTheme.otherColors.white,
          fontWeight: 200,
          borderRadius: '5px',
          padding: '0.1rem 5px',
          fontSize: '0.8rem'
        }
      }
    }
  }
});

export default deepmerge(navUserTheme, globalTheme);
