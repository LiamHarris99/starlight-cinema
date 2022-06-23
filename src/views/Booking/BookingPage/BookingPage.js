import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Box, ThemeProvider, colors } from '@mui/material';
import BookingInfo from '../BookingInfo/BookingInfo';
import BookingSlot from '../BookingSlot/BookingSlot';
import theme from './BookingPage.styles';
import { init } from '../../../store/ticket/ticket.slice';

function BookingPage() {
  const [searchParams] = useSearchParams();

  const [info, setInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const id = searchParams.get('id');
    if (!id) return navigate('/');

    return setInfo({
      id,
      name: searchParams.get('name'),
      price: searchParams.get('price'),
      dateSelected: searchParams.get('dateSelected'),
      timeSelected: searchParams.get('timeSelected'),
      room: searchParams.get('room')
    });
  }, [navigate, searchParams]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        component='main'
        display='flex'
        justifyContent='space-between'
        color={colors.grey[50]}
        mb='1.5rem'
      >
        <BookingSlot />
        <BookingInfo info={info} />
      </Box>
    </ThemeProvider>
  );
}

export default BookingPage;
