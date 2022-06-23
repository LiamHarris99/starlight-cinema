import { Box, colors, Typography } from '@mui/material';
import { random } from 'lodash';
import { useSelector } from 'react-redux';
import Slot from './Slot';
import { slots as slotsConstant } from '../../../utils/constants';

const { positions, totalEachRow } = slotsConstant;

const { grey, red, yellow } = colors;

function getColor(type) {
  if (type === 'cancel') return red[500];

  if (type === 'sell') return yellow[800];

  return grey[500];
}

function getSlot(slot, slots) {
  const slotFound = slots.find(({ id }) => slot.id === id);

  return slotFound || slot;
}

function displaySlots(slots, position, price) {
  const rows = [];

  for (let index = 0; index < totalEachRow; index += 1) {
    const slot = {
      type: 'normal',
      id: position + (index + 1)
    };

    const { type, id } = getSlot(slot, slots);

    const color = getColor(type);

    rows.push(<Slot key={id} slotId={id} bgcolor={color} price={price} />);
  }

  return rows;
}

function BookingSlotMain() {
  const { timeSelected, info } = useSelector((state) => state.film);

  const { room } = timeSelected;

  return (
    <Box>
      {positions.map((position, index) => {
        const mt = index === 0 ? '1.5rem' : '1rem';

        return (
          <Box key={random(true)} display='flex' justifyContent='space-between' mt={mt}>
            <Typography component='span' variant='position-flag'>
              {position}
            </Typography>
            <Box width='90%' display='flex' justifyContent='space-between'>
              {displaySlots(room.slots, position, info.price)}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default BookingSlotMain;
