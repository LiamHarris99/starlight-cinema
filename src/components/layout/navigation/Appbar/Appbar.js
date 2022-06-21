import { AppBar, ThemeProvider } from '@mui/material';
import { ToolbarMenu, ToolbarUser } from '../../../Toolbar';
import appBarTheme from './Appbar.styles';

function NavBar() {
  return (
    <ThemeProvider theme={appBarTheme}>
      <AppBar>
        <ToolbarUser />
        <ToolbarMenu />
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
