import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@mui/material';

function Slot({ text, sx }) {
  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
      <Box sx={{ height: '3rem', width: '3rem', ...sx }} />
      {text && (
        <Typography component='span' fontSize='0.8rem'>
          {text}
        </Typography>
      )}
    </Paper>
  );
}

Slot.propTypes = {
  text: PropTypes.string,
  sx: PropTypes.oneOfType([PropTypes.object])
};

export default Slot;
