import {
  ButtonBase,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider
} from '@mui/material';
import PropTypes from 'prop-types';
import theme from './Button.styles';

export function ButtonApp({ children, cssConfig }) {
  const { cssListItemButton, cssListItemIcon, cssListItemText } = cssConfig;

  return (
    <ListItemButton {...cssListItemButton}>
      <ListItemIcon {...cssListItemIcon}>{children}</ListItemIcon>
      <ListItemText {...cssListItemText} />
    </ListItemButton>
  );
}

ButtonApp.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  cssConfig: PropTypes.oneOfType([PropTypes.any])
};

export function Button({ text, config }) {
  return (
    <ThemeProvider theme={theme}>
      <ButtonBase {...config}>{text}</ButtonBase>
    </ThemeProvider>
  );
}

Button.propTypes = {
  config: PropTypes.oneOfType([PropTypes.object]),
  text: PropTypes.string
};
