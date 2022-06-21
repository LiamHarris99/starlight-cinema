import { createTheme } from '@mui/material';
import globalTheme from '../../theme';

const buttonTheme = createTheme(globalTheme, {
  components: {
    MuiButtonBase: {
      variants: [
        {
          props: { variant: 'btnOrange' },
          style: {
            background: globalTheme.palette.primary.main,
            color: globalTheme.otherColors.white,
            padding: '0.5rem 1rem',
            borderRadius: '1rem'
          }
        }
      ]
    }
  }
});

export default buttonTheme;
