import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import globalTheme from '../../../theme';

function AuthenLayout({ children }) {
  return (
    <Box
      sx={{
        background: `-webkit-linear-gradient(left, ${globalTheme.palette.primary.main}, ${globalTheme.otherColors.orangeLight})`,
        display: 'flex',
        padding: '1rem',
        justifyContent: 'space-between',
        pl: '2rem'
      }}
    >
      {children}
    </Box>
  );
}

AuthenLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])])
};

export default AuthenLayout;
