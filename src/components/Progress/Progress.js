import PropTypes from 'prop-types';
import { Backdrop, CircularProgress, ThemeProvider } from '@mui/material';
import theme from '../../theme';

function Progress({ open = false }) {
  return (
    <ThemeProvider theme={theme}>
      <Backdrop open={open}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </ThemeProvider>
  );
}

Progress.propTypes = {
  open: PropTypes.bool
};

export default Progress;
