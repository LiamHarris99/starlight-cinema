import { Link as RouterLink } from 'react-router-dom';
import { random } from 'lodash';
import { List, Box, Link, ThemeProvider, ListItem } from '@mui/material';
import { menuUser } from '../../../utils/constants';
import theme from './NavUser.styles';

function getBgcolor(url, color1, color2) {
  return url === '/FAQ' ? color1 : color2;
}

function MenuItems() {
  return menuUser.map(({ text, url }) => {
    return (
      <ListItem key={random(true)}>
        <Link
          component={RouterLink}
          to={url}
          bgcolor={getBgcolor(url, theme.otherColors.black, theme.palette.primary.light)}
        >
          {text}
        </Link>
      </ListItem>
    );
  });
}

function NavUser() {
  return (
    <ThemeProvider theme={theme}>
      <Box component='nav' pr='1rem'>
        <List>
          <MenuItems />
        </List>
      </Box>
    </ThemeProvider>
  );
}

export default NavUser;
