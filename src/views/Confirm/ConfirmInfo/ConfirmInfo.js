import PropTypes from 'prop-types';
import { Box, colors, Typography, Stack } from '@mui/material';
import { VND } from '../../../utils/common/common';
import ConfirmForm from '../ConfirmForm/ConfirmForm';
import Title from './ConfirmTitle';

const { grey } = colors;

function ConfirmInfo({ ticket, combos, user }) {
  const { info } = user;

  return (
    <Box color={grey[50]} px='3.5rem'>
      <Box>
        <Title title='Thông tin người mua' />
        <Stack>
          <Typography component='span'>Người nhận: {info.name}</Typography>
          <Typography component='span'>Email: {user.email}</Typography>
          <Typography component='span'>Số điện thoại: {info.phone}</Typography>
        </Stack>
      </Box>
      <Box>
        <Title title='Thông tin vé' />
        <Stack>
          <Typography component='span'>Rạp: Starlight Đà Nẵng</Typography>
          <Typography component='span'>Tên phim: {ticket.film.name}</Typography>
          <Typography component='span'>Suât chiếu: {ticket.dateTime}</Typography>
          <Typography component='span' variant='room'>
            Phòng: {ticket.room}
          </Typography>
          <Typography component='span'>
            Ghế đã chọn: {ticket.slots.map(({ id }) => id).toString()}
          </Typography>
          <Typography component='span'>Số ghế: {ticket.quantity}</Typography>
          <Typography component='span'>Tổng tiền ghế: {VND.format(ticket.total)}</Typography>
        </Stack>
      </Box>
      <Box>
        <Title title='Thông tin combo' />
        <Stack>
          <Typography component='span'>Số lượng combo: {combos.combos.length}</Typography>
          <Typography component='span'>Tổng tiền combo: {VND.format(combos.total)} </Typography>
        </Stack>
      </Box>

      <Box display='inline-block' mt='0.5rem' pt='0.5rem' borderTop={`1px dashed ${grey[50]}`}>
        <Typography component='span' variant='title-total'>
          Tổng giá: {VND.format(combos.total + ticket.total)}
        </Typography>
      </Box>
      <Box>
        <ConfirmForm ticket={ticket} combos={combos} user={user} />
      </Box>
    </Box>
  );
}

ConfirmInfo.propTypes = {
  ticket: PropTypes.oneOfType([PropTypes.object]),
  combos: PropTypes.oneOfType([PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.object])
};

export default ConfirmInfo;
