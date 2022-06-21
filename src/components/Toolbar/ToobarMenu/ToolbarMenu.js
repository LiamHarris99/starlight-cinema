import { Link as RouterLink } from 'react-router-dom';
import { Toolbar, Link, Box, ThemeProvider } from '@mui/material';
import { logo } from '../../../utils/constants';
import { NavMenu } from '../../Nav';
import theme from './ToolbarMenu.styles';

function Logo() {
  return (
    <Link component={RouterLink} to='/'>
      <Box component='img' src={logo.first.url} alt={logo.first.alt} />
    </Link>
  );
}

function ToolbarMenu() {
  return (
    <ThemeProvider theme={theme}>
      <Toolbar>
        <Logo />
        <NavMenu />
      </Toolbar>
    </ThemeProvider>
  );
}

export default ToolbarMenu;
