import { Box, Paper, Stack, colors } from '@mui/material';
import { Slot } from '../../../components';

const { green, yellow, red, grey } = colors;

function BookingSlotScreen() {
  return (
    <Box>
      <Stack direction='row' spacing='1.5rem'>
        <Slot text='Đã bán' sx={{ background: yellow[500] }} />
        <Slot text='Ghế bạn chọn' sx={{ background: green[500] }} />
        <Slot text='Ghế không thể chọn' sx={{ background: red[500] }} />
      </Stack>

      <Box sx={{ background: grey[400], textAlign: 'center', fontWeight: '600' }}>Màn hình</Box>
    </Box>
  );
}

export default BookingSlotScreen;
