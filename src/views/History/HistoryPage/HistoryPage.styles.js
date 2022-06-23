import { createTheme, colors } from '@mui/material';

const historyPageTheme = createTheme({
  components: {
    MuiStack: {
      variants: [
        {
          props: { variant: 'order' },
          style: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            '& > *': {
              width: '48%'
            }
          }
        }
      ]
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: '1.8rem'
        }
      },
      variants: [
        {
          props: { variant: 'film-name' },
          style: {
            color: colors.orange[500],
            lineHeight: 'initial',
            marginBottom: '1rem'
          }
        },
        {
          props: { variant: 'film-span' },
          style: {
            display: 'block'
          }
        },
        {
          props: { variant: 'order-total' },
          style: {
            color: colors.orange[700]
          }
        }
      ]
    }
  }
});

export default historyPageTheme;
