import { ThemeProvider, Toolbar } from '@mui/material';
import SocialMedia from '../../SocialMedia/SocialMedia';
import { NavUser } from '../../Nav';
import theme from './ToolbarUser.styles';

function ToolbarUser() {
  return (
    <ThemeProvider theme={theme}>
      <Toolbar>
        <SocialMedia />
        <NavUser />
      </Toolbar>
    </ThemeProvider>
  );
}

export default ToolbarUser;
