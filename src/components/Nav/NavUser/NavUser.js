import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { random, isEmpty } from 'lodash';
import { List, Box, Link, ThemeProvider, ListItem } from '@mui/material';
import { menuUser, menuLoggedIn } from '../../../utils/constants';
import { logout } from '../../../store/user/user.slice';
import theme from './NavUser.styles';
import { getById as getUserByID } from '../../../store/user/user.thunk';

function getBgcolor(url, color1, color2) {
  return url === '/FAQ' ? color1 : color2;
}

function MenuItems() {
  const { isLoggedIn, email, info } = useSelector((state) => state.user);

  const [menu, setMenu] = useState([...menuUser]);

  const dispatch = useDispatch();

  const handleLogout = (evt) => {
    evt.preventDefault();

    dispatch(logout());
  };

  useEffect(() => {
    if (!isLoggedIn) return setMenu([...menuUser]);

    if (isLoggedIn && !isEmpty(info)) return setMenu([...menuLoggedIn(info.name)]);

    dispatch(getUserByID())
      .unwrap()
      .catch((err) => {
        const error = err.response ? err.response.data : err;
        console.log(error.toString(), 'error');
      });

    return () => {};
  }, [dispatch, info, isLoggedIn]);

  console.log(isLoggedIn, email, 'isLoggedIn-email');

  return menu.map(({ text, url }) => {
    return (
      <ListItem key={random(true)}>
        <Link
          component={RouterLink}
          to={url}
          variant={url === '/profile' && 'userName'}
          bgcolor={getBgcolor(url, theme.otherColors.black, theme.palette.primary.light)}
          onClick={url === '/logout' ? handleLogout : null}
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
      <Box component='nav'>
        <List>
          <MenuItems />
        </List>
      </Box>
    </ThemeProvider>
  );
}

export default NavUser;
