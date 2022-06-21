import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { logo } from '../../utils/constants';
import globaltheme from '../../theme';

function AuthLogo({ text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        rowGap: '1rem'
      }}
    >
      <Box component='img' src={logo.second.url} alt={logo.second.alt} />
      <Typography fontSize='0.8rem' color={globaltheme.otherColors.white}>
        {text}
      </Typography>
    </Box>
  );
}

AuthLogo.propTypes = {
  text: PropTypes.string.isRequired
};

export default AuthLogo;
