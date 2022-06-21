import { ThemeProvider, Alert, Snackbar } from '@mui/material';
import { AuthenLayout, FormLayout } from '../../../components/layout';
import { Logo } from '../../../components';
import Form from '../LoginForm/LoginForm';
import theme from './LoginPage.styles';
import useMuiStatusError from '../../../hooks/useMuiStatusError';

function LoginPage() {
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
        <Logo text='Đăng nhập với tài khoản của bạn' />
        <FormLayout>
          <Form onSetStatus={setStatus} />
        </FormLayout>
      </AuthenLayout>
    </ThemeProvider>
  );
}

export default LoginPage;
