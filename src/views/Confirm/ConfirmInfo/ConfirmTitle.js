import PropTypes from 'prop-types';
import { ArrowRightAlt } from '@mui/icons-material';
import { Box, Typography, colors } from '@mui/material';

function ConfirmTitle({ title }) {
  return (
    <Box display='flex' alignItems='center' my='1rem'>
      <ArrowRightAlt variant='title-icon' />
      <Typography component='h4' variant='title-confirm'>
        {title}
      </Typography>
    </Box>
  );
}

ConfirmTitle.propTypes = {
  title: PropTypes.string
};

export default ConfirmTitle;
