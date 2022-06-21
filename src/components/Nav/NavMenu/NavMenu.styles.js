import { createTheme } from '@mui/material';
import globalTheme from '../../../theme';

const navMenuTheme = createTheme(globalTheme, {
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: 0
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          alignSelf: 'stretch',
          listStyle: 'none',
          padding: 0
        }
      }
    },
    MuiLink: {
      variants: [
        {
          props: { variant: 'menu-links' },
          style: {
            textDecoration: 'none',
            color: globalTheme.otherColors.black,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.5rem',
            height: '100%',
            '&:hover': {
              background: globalTheme.palette.primary.main,
              color: globalTheme.otherColors.white,
              borderBottom: `4px solid ${globalTheme.palette.primary.dark}`
            }
          }
        }
      ]
    }
  }
});

export default navMenuTheme;
