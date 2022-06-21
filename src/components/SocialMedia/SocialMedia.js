import { random } from 'lodash';
import { Box, Link, List, ListItem, ThemeProvider } from '@mui/material';
import { Facebook, Google, Twitter, Pinterest, LinkedIn } from '@mui/icons-material';
import Proptypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import socialMediaTheme from './SocialMedia.styles';

function IconItems({ cssIcon }) {
  const icons = [Facebook, Google, Twitter, Pinterest, LinkedIn];

  return icons.map((Icon) => {
    return (
      <ListItem key={random(true)}>
        <Link component={RouterLink} to='/'>
          <Icon sx={{ ...cssIcon }} />
        </Link>
      </ListItem>
    );
  });
}

function SocialMedia({ cssUl, cssIcon }) {
  return (
    <ThemeProvider theme={socialMediaTheme}>
      <List sx={{ ...cssUl }}>
        <IconItems cssIcon={cssIcon} />
      </List>
    </ThemeProvider>
  );
}

SocialMedia.propTypes = {
  cssUl: Proptypes.oneOfType([Proptypes.object]),
  cssIcon: Proptypes.oneOfType([Proptypes.object])
};

export default SocialMedia;
