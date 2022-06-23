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
        },
        {
          props: { variant: 'btnCombo' },
          style: {
            background: globalTheme.palette.primary.main,
            color: globalTheme.otherColors.white,
            padding: '0.5rem 1rem',
            fontWeight: 600,
            borderRadius: '5px'
          }
        },
        {
          props: { variant: 'btnConfirm' },
          style: {
            background: globalTheme.otherColors.white,
            color: globalTheme.otherColors.black,
            padding: '0.5rem 1rem',
            borderRadius: '1rem',
            '&:hover': {
              opacity: 0.7
            }
          }
        },
        {
          props: { variant: 'btnConfirm2' },
          style: {
            background: globalTheme.palette.primary.main,
            color: globalTheme.otherColors.white,
            padding: '1rem 0',
            width: '48%',
            '&:hover': {
              opacity: 0.7
            }
          }
        }
      ]
    }
  }
});

export default buttonTheme;
