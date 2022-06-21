import { DoubleArrow, PlayArrow, Apple } from '@mui/icons-material';
import {
  Box,
  Stack,
  Link,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import { random } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';
import { logo, menuFooter as menuData } from '../../../utils/constants';
import SocialMedia from '../../SocialMedia/SocialMedia';
import { ButtonApp } from '../../Button/Button';
import theme from './Footer.styles';

function Logo() {
  return (
    <Box>
      <Link component={RouterLink} to='/' variant='logo'>
        <Box component='img' src={logo.second.url} alt={logo.second.alt} />
      </Link>
      <Box>
        Support:
        <Typography component='span' variant='underline'>
          Support@Starmovies.Vn
        </Typography>
      </Box>
      <Box>
        Hotline:
        <Typography component='span' variant='underline'>
          1900 1722
        </Typography>
      </Box>
      <Box mt='1rem'>
        <SocialMedia
          cssIcon={{
            color: theme.otherColors.white,
            bgcolor: theme.otherColors.black,
            fontSize: '1rem'
          }}
          cssUl={{ columnGap: '0.7rem' }}
        />
      </Box>
    </Box>
  );
}

function Menu() {
  return (
    <Box>
      <List disablePadding>
        {menuData.map(({ url, text }) => (
          <ListItem key={random(true)} disablePadding>
            <Link component={RouterLink} to={url} variant='footer-links'>
              <ListItemIcon sx={{ minWidth: 'auto', color: 'inherit', fontSize: 'inherit' }}>
                <DoubleArrow fontSize='inherit' />
              </ListItemIcon>
              <ListItemText disableTypography primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function LinkItems() {
  return (
    <Box>
      <Typography component='h5' variant='title-list'>
        Chính sách
      </Typography>
      <Menu />
    </Box>
  );
}

function AppItems({ items }) {
  return items.map((item) => {
    const { componentIcon: Icon, cssConfig } = item;
    return (
      <ButtonApp key={random(true)} cssConfig={cssConfig}>
        <Icon />
      </ButtonApp>
    );
  });
}

function DownloadApps() {
  const appIcons = [
    {
      componentIcon: PlayArrow,
      cssConfig: {
        cssListItemIcon: {
          sx: {
            color: theme.otherColors.cyan
          }
        },
        cssListItemButton: {
          component: 'button',
          sx: {
            bgcolor: theme.otherColors.white,
            color: 'primary',
            borderRadius: '5px',
            padding: 0,

            '&:hover': {
              border: `1px solid ${theme.otherColors.white}`
            }
          }
        },
        cssListItemText: {
          primary: 'Download on',
          secondary: 'Google play',
          variant: 'body2',
          sx: {
            fontSize: '1rem',
            color: theme.otherColors.black
          }
        }
      }
    },
    {
      componentIcon: Apple,
      cssConfig: {
        cssListItemButton: {
          component: 'button',
          sx: {
            bgcolor: theme.otherColors.white,
            borderRadius: '5px',
            padding: 0,

            '&:hover': {
              border: `1px solid ${theme.otherColors.white}`
            }
          }
        },
        cssListItemText: {
          primary: 'Download on the',
          secondary: 'Apple Store',
          variant: 'body2',
          sx: {
            color: theme.otherColors.black
          }
        }
      }
    }
  ];

  return (
    <Box>
      <Typography component='h5' variant='title-list'>
        DOWNLOAD APP
      </Typography>
      <Typography component='p' fontSize='inherit'>
        Tải Ngay Ứng Dụng Đặt Vé Online Cho Dế Yêu Của Bạn !
      </Typography>
      <ButtonGroup>
        <AppItems items={appIcons} />
      </ButtonGroup>
    </Box>
  );
}

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box component='footer'>
        <Stack variant='footer-content'>
          <Logo />
          <LinkItems />
          <DownloadApps />
        </Stack>
        <Box textAlign='center' paddingBottom='1rem'>
          2022 &copy; StarLight. All Rights Reserved - Design By
          <Typography component='span' variant='copyright'>
            &nbsp;VietDzNo1
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
