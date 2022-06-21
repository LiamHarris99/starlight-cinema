import { createTheme } from '@mui/material';
import globalTheme from '../../../theme';

const modalBasicTheme = createTheme(globalTheme, {
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'title-modal-basic' },
          style: {
            fontWeight: 600,
            color: globalTheme.otherColors.gray,
            fontSize: '3rem',
            textAlign: 'center'
          }
        }
      ]
    }
  }
});

export default modalBasicTheme;
