import { createTheme, colors } from '@mui/material';

const { grey, blueGrey } = colors;

const mainLayoutTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'main-title' },
          style: {
            color: grey[50],
            fontWeight: 400,
            textTransform: 'uppercase',
            textAlign: 'center',
            borderBottom: `1px solid ${grey[50]}`,
            padding: '1rem 0'
          }
        }
      ]
    }
  }
});

export default mainLayoutTheme;
