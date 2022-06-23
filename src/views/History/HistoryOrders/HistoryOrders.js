import PropTypes from 'prop-types';
import { random } from 'lodash';
import { Typography, Box, Stack, colors } from '@mui/material';
import { VND } from '../../../utils/common/common';

function Order({ combos, ticket, payment, index }) {
  const { film, dateTime, room, slots, quantity, total: totalTicket } = ticket;
  const { total: totalCombo, combos: comboObj } = combos;
  return (
    <Box
      color={colors.grey[50]}
      borderTop={index > 0 && `1px solid ${colors.orange[700]}`}
      py='1.5rem'
    >
      <Stack variant='order'>
        <Box>
          <Typography component='h1' variant='film-name'>
            {film.name}
          </Typography>
          <Typography variant='film-span'>Thời gian chiếu: {dateTime}</Typography>
          <Typography variant='film-span'>Phòng: {room}</Typography>
          <Typography variant='film-span'>Vị trí Chỗ ngồi: {slots.toString()}</Typography>
          <Typography variant='film-span'>Số lượng chỗ ngồi: {quantity}</Typography>
          <Typography mt='0.5rem'>Tổng: {VND.format(totalTicket)}</Typography>
        </Box>
        <Box borderLeft={`1px dashed ${colors.grey[50]}`} pl='2rem'>
          {comboObj.map(({ name, price, quantity: quantityCombo }, i) => {
            return (
              <Box key={random(true)} pt={i > 0 && '1rem'}>
                <Typography>Combo: {name}</Typography>
                <Typography>Số lượng: {quantityCombo}</Typography>
                <Typography>Giá: {price}</Typography>
              </Box>
            );
          })}
          <Typography mt='0.5rem'>Tổng: {VND.format(totalCombo)}</Typography>
        </Box>
      </Stack>
      <Box pt='1.5rem'>
        <Typography variant='order-total'>
          Tổng cộng: ${VND.format(totalCombo + totalTicket)}
        </Typography>
        <Typography>
          Phương thức thanh toán: {payment === 'atm' ? 'Banking' : 'Tại quầy'}
        </Typography>
      </Box>
    </Box>
  );
}

Order.propTypes = {
  combos: PropTypes.oneOfType([PropTypes.object]),
  ticket: PropTypes.oneOfType([PropTypes.object]),
  payment: PropTypes.string,
  index: PropTypes.number
};
function HistoryOrders({ orders = [] }) {
  return (
    <Box px='2rem'>
      {orders.map(({ combos, ticket, payment, id }, index) => (
        <Order key={id} combos={combos} ticket={ticket} payment={payment} index={index} />
      ))}
    </Box>
  );
}

HistoryOrders.propTypes = {
  orders: PropTypes.oneOfType([PropTypes.array])
};

export default HistoryOrders;
