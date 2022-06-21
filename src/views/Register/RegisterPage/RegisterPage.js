import { ThemeProvider, Snackbar, Alert } from '@mui/material';
import { FormLayout, AuthenLayout } from '../../../components/layout';
import { Logo } from '../../../components';
import Form from '../RegisterForm/RegisterForm';
import theme from './RegisterPage.styles';
import useMuiStatusError from '../../../hooks/useMuiStatusError';

function RegisterPage() {
  const [status, { handleClose, setStatus }] = useMuiStatusError();

  const { error, open } = status;

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
        <Logo text='Đăng ký thành viên và nhận ngay ưu đãi!' />
        <FormLayout>
          <Form />
        </FormLayout>
      </AuthenLayout>
    </ThemeProvider>
  );
}

export default RegisterPage;
