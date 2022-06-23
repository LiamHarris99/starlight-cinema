import { createTheme, colors } from '@mui/material';

const { grey, orange, yellow } = colors;

const confirmPageTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'title-confirm' },
          style: {
            color: grey[50],
            textDecoration: 'underline',
            textTransform: 'uppercase',
            fontWeight: 300,
            fontSize: '1rem'
          }
        },
        {
          props: { variant: 'title-total' },
          style: {
            color: orange[600],
            textTransform: 'uppercase',
            fontSize: '1.5rem'
          }
        },
        {
          props: { variant: 'room' },
          style: {
            color: yellow[600]
          }
        }
      ]
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { variant: 'title-icon' },
          style: {
            color: orange[500]
          }
        }
      ]
    },
    MuiStack: {
      variants: [
        {
          props: { variant: 'cta-confirm' },
          style: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '1.5rem'
          }
        },
        {
          props: { variant: 'info-list' },
          style: {
            rowGap: '0.5rem'
          }
        }
      ]
    },
    MuiRadio: {
      variants: [
        {
          props: { variant: 'payment' },
          style: {
            color: orange[500],
            '&.Mui-checked': {
              color: orange[500]
            }
          }
        }
      ]
    }
  }
});

export default confirmPageTheme;
