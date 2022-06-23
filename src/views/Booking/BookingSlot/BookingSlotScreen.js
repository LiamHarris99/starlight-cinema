import PropTypes from 'prop-types';
import { Box, Stack, colors, Paper, Typography } from '@mui/material';

const { green, yellow, red, grey } = colors;

function SlotGuide({ text, paperProps, boxProps }) {
  return (
    <Paper variant='guide' {...paperProps}>
      <Box sx={{ height: '1.5rem', width: '1.5rem', borderRadius: '5px' }} {...boxProps} />
      {text && (
        <Typography component='span' fontSize='0.8rem' color='inherit'>
          {text}
        </Typography>
      )}
    </Paper>
  );
}

SlotGuide.propTypes = {
  text: PropTypes.string,
  boxProps: PropTypes.oneOfType([PropTypes.object]),
  paperProps: PropTypes.oneOfType([PropTypes.object])
};

function BookingSlotScreen() {
  return (
    <Box>
      <Stack direction='row' spacing='1.5rem' justifyContent='space-evenly' py='1.5rem'>
        <SlotGuide text='Ghế trống' boxProps={{ bgcolor: grey[500] }} />
        <SlotGuide text='Đã bán' boxProps={{ bgcolor: yellow[800] }} />
        <SlotGuide text='Ghế bạn chọn' boxProps={{ bgcolor: green[500] }} />
        <SlotGuide text='Ghế không thể chọn' boxProps={{ bgcolor: red[500] }} />
      </Stack>

      <Box textAlign='center' mt='2rem'>
        <Box
          component='img'
          src='http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png'
          alt='18'
        />
      </Box>
    </Box>
  );
}

export default BookingSlotScreen;
