import { Box, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import BookingInfo from '../BookingInfo/BookingInfo';
import BookingSlot from '../BookingSlot/BookingSlot';
import theme from './BookingPage.styles';

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [info, setInfo] = useState({});

  useEffect(() => {
    const id = searchParams.get('id');
    if (!id) return navigate('/');

    return setInfo({
      id,
      name: searchParams.get('name'),
      price: searchParams.get('price'),
      dateSelected: searchParams.get('dateSelected'),
      timeSelected: searchParams.get('timeSelected')
    });
  }, [navigate, searchParams]);

  console.log(info, 'info');

  return (
    <ThemeProvider theme={theme}>
      <Box component='main'>
        <BookingSlot />
        <BookingInfo />
      </Box>
    </ThemeProvider>
  );
}

export default BookingPage;
