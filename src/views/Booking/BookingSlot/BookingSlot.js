import { Box } from '@mui/material';
import BookingSlotScreen from './BookingSlotScreen';
import BookingSlotMain from './BookingSlotMain';

function BookingSlot() {
  return (
    <Box width='70%'>
      <BookingSlotScreen />
      <BookingSlotMain />
    </Box>
  );
}

export default BookingSlot;
