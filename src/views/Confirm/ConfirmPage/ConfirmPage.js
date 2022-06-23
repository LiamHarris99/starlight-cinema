import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, colors, Snackbar, Alert } from '@mui/material';
import { MainBookingLayout } from '../../../components/layout/MainLayout/MainLayout';
import ConfirmInfo from '../ConfirmInfo/ConfirmInfo';
import theme from './ConfirmPage.styles';
import useMuiStatusError from '../../../hooks/useMuiStatusError';

function ConfirmPage() {
  const { blueGrey } = colors;

  const { ticket, combos, user } = useSelector((state) => ({
    ticket: state.ticket,
    combos: state.combos,
    user: state.user
  }));

  const [status, { handleClose, setStatus }] = useMuiStatusError();

  const { error, open } = status;

  const { error: errorUser } = user;

  useEffect(() => {
    if (errorUser) setStatus({ error: errorUser, open: true });
  }, [errorUser, setStatus]);

  if (!ticket.film) return <Navigate to='/' replace />;

  return (
    <MainBookingLayout
      config={{ bgcolor: blueGrey[900], pb: '2rem' }}
      title={{ text: 'Xác nhận thông tin', variant: 'main-title' }}
    >
      {error && (
        <Snackbar onClose={handleClose} open={open}>
          <Alert onClose={handleClose} severity='error'>
            {error}
          </Alert>
        </Snackbar>
      )}
      <ThemeProvider theme={theme}>
        <ConfirmInfo ticket={ticket} combos={combos} user={user} />
      </ThemeProvider>
    </MainBookingLayout>
  );
}

export default ConfirmPage;
