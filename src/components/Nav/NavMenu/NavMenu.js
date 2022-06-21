import { Link as RouterLink } from 'react-router-dom';
import { random } from 'lodash';
import { Box, Link, ThemeProvider, CssBaseline, List, ListItem } from '@mui/material';
import { menuNav } from '../../../utils/constants';
import theme from './NavMenu.styles';

function MenuItems() {
  return menuNav.map(({ text, url }) => {
    return (
      <ListItem key={random(true)}>
        <Link component={RouterLink} to={url} variant='menu-links'>
          {text}
        </Link>
      </ListItem>
    );
  });
}

function NavMenu() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component='nav'
        sx={{
          display: 'flex',
          alignSelf: 'stretch',
          width: '60%'
        }}
      >
        <List>
          <MenuItems />
        </List>
      </Box>
    </ThemeProvider>
  );
}

export default NavMenu;
