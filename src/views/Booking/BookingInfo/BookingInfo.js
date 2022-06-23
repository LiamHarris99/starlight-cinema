import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, colors } from '@mui/material';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Button } from '../../../components';
import { init, setTicket } from '../../../store/ticket/ticket.slice';
import { VND } from '../../../utils/common/common';

const { green, yellow, red, grey } = colors;

function renderTime({ remainingTime }) {
  if (remainingTime === 0) return <Box>End Game !</Box>;

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <Typography textAlign='center'>
      {minutes}:{seconds}
    </Typography>
  );
}

function BookingInfo({ info }) {
  const { name: filmName, price = 0, id, timeSelected, dateSelected, room } = info;

  const ticket = useSelector((state) => state.ticket);

  const { total, slots } = ticket;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  const handleClick = () => {
    console.log(id, 'filmId');

    dispatch(
      setTicket({
        room,
        film: {
          id,
          name: filmName
        },
        dateTime: `${timeSelected} - ${dateSelected}`
      })
    );

    if (!total) return;

    navigate({
      pathname: '/login',
      search: '?isFromBooking=true'
    });
  };

  return (
    <Box width='25%' fontSize='0.85rem'>
      <Box color={grey[50]} bgcolor={grey[800]} borderRadius='5px' p='1rem'>
        <Typography component='h2' fontWeight={700}>
          {filmName}
        </Typography>
        <Typography>Rạp Starlight Đà Nẵng</Typography>
        <Typography>
          Suất: {timeSelected} ( {dateSelected} )
        </Typography>
        <Typography sx={{ wordWrap: 'break-word' }}>
          Phòng: {room} - Ghế: {slots.map(({ id: slotId }) => slotId).toString()}
        </Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        bgcolor={grey[800]}
        borderRadius='5px'
        mt='1rem'
        p='1rem'
        columnGap='1rem'
      >
        <Box>
          <Typography component='h3' variant='title-payment'>
            Tổng đơn hàng
          </Typography>
          <Typography component='strong' variant='price'>
            {VND.format(total)}
          </Typography>
        </Box>

        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          alignItems='center'
          pl='0.5rem'
        >
          <Typography component='h3' variant='title-payment'>
            Thời gian giữ ghế
          </Typography>
          <CountdownCircleTimer
            colors={[`${green[500]}`, `${yellow[500]}`, `${red[500]}`]}
            colorsTime={[900, 300, 0]}
            duration={900}
            size={100}
            isPlaying
          >
            {renderTime}
          </CountdownCircleTimer>
        </Box>
      </Box>
      <Box textAlign='center' mt='1.5rem'>
        <Button text='Xác nhận' config={{ variant: 'btnConfirm', onClick: handleClick }} />
      </Box>
    </Box>
  );
}

BookingInfo.propTypes = {
  info: PropTypes.oneOfType([PropTypes.object])
};

export default BookingInfo;
