/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';
import { Box, ThemeProvider, Typography } from '@mui/material';
import theme from './MainLayout.styles';

export function MainBookingLayout({ config, title, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box component='main' {...config}>
        {/* <Box py='1rem' borderBottom={`1px solid ${colors.grey[50]}`}> */}
        <Typography component='h1' variant={title.variant}>
          {title.text}
        </Typography>
        {children}
      </Box>
    </ThemeProvider>
  );
}

MainBookingLayout.propTypes = {
  config: PropTypes.oneOfType([PropTypes.object]),
  title: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
