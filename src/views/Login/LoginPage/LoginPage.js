import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, Alert, Snackbar } from '@mui/material';
import { AuthenLayout, FormLayout } from '../../../components/layout';
import { Logo } from '../../../components';
import Form from '../LoginForm/LoginForm';
import theme from './LoginPage.styles';
import useMuiStatusError from '../../../hooks/useMuiStatusError';

function LoginPage() {
  const [status, { handleClose, setStatus }] = useMuiStatusError();
  const { error, open } = status;
  const { isLoggedIn } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const isFromBooking = searchParams.get('isFromBooking');

    if (isLoggedIn && isFromBooking) return navigate('/combo', { replace: true });

    if (isLoggedIn && !isFromBooking) return navigate('/', { replace: true });

    return () => {};
  }, [isLoggedIn, navigate, searchParams]);

  return (
    <ThemeProvider theme={theme}>
      {error && (
        <Snackbar onClose={handleClose} open={open}>
          <Alert onClose={handleClose} severity='error'>
            {error}
          </Alert>
        </Snackbar>
      )}

      <AuthenLayout>
        <Logo text='Đăng nhập với tài khoản của bạn' />
        <FormLayout>
          <Form onSetStatus={setStatus} />
        </FormLayout>
      </AuthenLayout>
    </ThemeProvider>
  );
}

export default LoginPage;
