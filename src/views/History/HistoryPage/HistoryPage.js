import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Snackbar, ThemeProvider, colors } from '@mui/material';
import { MainBookingLayout } from '../../../components/layout/MainLayout/MainLayout';
import theme from './HistoryPage.styles';
import useMuiStatusError from '../../../hooks/useMuiStatusError';
import { getOrdersByUserId } from '../../../store/orders/orders.thunk';
import { Progress } from '../../../components';
import { get } from '../../../services/localStorage/localStorage';
import HistoryOrders from '../HistoryOrders/HistoryOrders';

function HistoryPage() {
  const [status, { handleClose, setStatus }] = useMuiStatusError();

  const { error, open } = status;

  const { orders: orderObj, user } = useSelector((state) => ({
    orders: state.orders,
    user: state.user
  }));

  const { isLoading, error: errorOrders, orders } = orderObj;

  const dispatch = useDispatch();

  useEffect(() => {
    const id = get('id');
    dispatch(getOrdersByUserId(id));
    if (errorOrders) setStatus({ error: errorOrders, open: true });
  }, [dispatch, errorOrders, setStatus]);

  if (!user.isLoggedIn) return <Navigate to='/' replace />;

  if (isLoading) return <Progress open={isLoading} />;

  console.log(orders, 'orders');

  return (
    <MainBookingLayout
      config={{ bgcolor: colors.blueGrey[900], pb: '2rem' }}
      title={{ text: 'Lịch sử giao dịch Online', variant: 'main-title' }}
    >
      {error && (
        <Snackbar onClose={handleClose} open={open}>
          <Alert onClose={handleClose} severity='error'>
            {error}
          </Alert>
        </Snackbar>
      )}
      <ThemeProvider theme={theme}>
        <HistoryOrders orders={orders} />
      </ThemeProvider>
    </MainBookingLayout>
  );
}

export default HistoryPage;
