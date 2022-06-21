import { createTheme } from '@mui/material';
import globalTheme from '../../theme';

const socialMediaTheme = createTheme(globalTheme, {
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: globalTheme.otherColors.black,
          background: globalTheme.otherColors.white,
          borderRadius: '5px',
          fontSize: 'inherit'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'row',
          columnGap: '0.5rem',
          fontSize: 'inherit',
          paddingBottom: '2rem'
        }
      }
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true
      }
    }
  }
});

export default socialMediaTheme;
