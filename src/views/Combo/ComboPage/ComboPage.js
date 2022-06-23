import { Box, ThemeProvider, colors, Snackbar, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ComboList from '../ComoboList/ComboList';
import theme from './ComboPage.styles';
import { getComobo } from '../../../services/api/combo';
import ComboInfo from '../ComboInfo/ComboInfo';
import { MainBookingLayout } from '../../../components/layout/MainLayout/MainLayout';

function ComboPage() {
  const { isLoggedIn } = useSelector((state) => state.user);

  const [data, setData] = useState({
    error: null,
    list: []
  });

  const { error, list } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listData = await getComobo();
        return setData((prevData) => ({ ...prevData, list: listData }));
      } catch (err) {
        const msg = err.response ? err.response.data : err;
        return setData((prevData) => ({ ...prevData, error: msg.toString() }));
      }
    };

    fetchData();
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) return <Navigate to='/login' replace />;

  if (error)
    return (
      <Snackbar onClose={!!error} open={!!error}>
        <Alert onClose={!!error} severity='error'>
          {error}
        </Alert>
      </Snackbar>
    );

  return (
    <MainBookingLayout
      config={{ bgcolor: colors.blueGrey[900], py: '1rem' }}
      title={{ text: 'Chọn bắp nước', variant: 'main-title' }}
    >
      <ThemeProvider theme={theme}>
        <Box p='2rem 2.5rem'>
          <ComboList list={list} />
          <ComboInfo />
        </Box>
      </ThemeProvider>
    </MainBookingLayout>
  );
}

export default ComboPage;
