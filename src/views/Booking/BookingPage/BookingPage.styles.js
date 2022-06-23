import { createTheme, colors } from '@mui/material';
import globalTheme from '../../../theme';

const { grey } = colors;

const bookingPageTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          color: globalTheme.otherColors.white
        }
      },
      variants: [
        {
          props: { variant: 'guide' },
          style: {
            display: 'flex',
            alignItems: 'center',
            columnGap: '0.5rem',
            background: 'transparent'
          }
        }
      ]
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 'inherit'
        }
      },
      variants: [
        {
          props: { variant: 'title-payment' },
          style: {
            marginBottom: '0.5rem'
          }
        },
        {
          props: { variant: 'price' },
          style: {
            fontSize: '1rem'
          }
        },
        {
          props: { variant: 'position-flag' },
          style: {
            padding: '0.5rem 0',
            width: '1.5rem',
            textAlign: 'center',
            background: grey[600]
          }
        },
        {
          props: { variant: 'slot' },
          style: {
            width: '1.5rem',
            height: '1.5rem',
            borderRadius: '5px',
            fontSize: '0.7rem',
            cursor: 'pointer',
            '&:hover > b': {
              visibility: 'visible'
            }
          }
        },
        {
          props: { variant: 'slot-b' },
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }
        }
      ]
    }
  }
});

export default bookingPageTheme;
