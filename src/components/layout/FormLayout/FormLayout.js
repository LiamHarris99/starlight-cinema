import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import globalTheme from '../../../theme';

function FormLayout({ children }) {
  return (
    <Box
      sx={{
        bgcolor: `${globalTheme.otherColors.white}`,
        clipPath: `polygon(6% 0, 100% 0%, 100% 100%, 6% 100%, 0% 50%)`,
        p: '2rem 5rem',
        width: '70%'
      }}
    >
      {children}
    </Box>
  );
}

FormLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf([PropTypes.node])])
};

export default FormLayout;
