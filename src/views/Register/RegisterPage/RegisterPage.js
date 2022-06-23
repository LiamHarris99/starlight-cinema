import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider, Snackbar, Alert } from '@mui/material';
import { FormLayout, AuthenLayout } from '../../../components/layout';
import { Logo } from '../../../components';
import Form from '../RegisterForm/RegisterForm';
import theme from './RegisterPage.styles';
import useMuiStatusError from '../../../hooks/useMuiStatusError';

function RegisterPage() {
  const [status, { handleClose, setStatus: onSetStatus }] = useMuiStatusError();

  const { msg, error, open } = status;

  const { isLoggedIn } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleCloseSuccess = () => {
    onSetStatus({ msg: null, open: false });

    setInterval(() => {
      navigate('/login', { replace: true });
    }, 1000);
  };

  if (isLoggedIn) return <Navigate to='/' replace />;

  return (
    <ThemeProvider theme={theme}>
      {error && (
        <Snackbar onClose={handleClose} open={open}>
          <Alert onClose={handleClose} severity='error'>
            {error}
          </Alert>
        </Snackbar>
      )}
      {msg && (
        <Snackbar onClose={handleCloseSuccess} open={open}>
          <Alert onClose={handleCloseSuccess} severity='success'>
            {msg}
          </Alert>
        </Snackbar>
      )}
      <AuthenLayout>
        <Logo text='Đăng ký thành viên và nhận ngay ưu đãi!' />
        <FormLayout>
          <Form onSetStatus={onSetStatus} />
        </FormLayout>
      </AuthenLayout>
    </ThemeProvider>
  );
}

export default RegisterPage;
