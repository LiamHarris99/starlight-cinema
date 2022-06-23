import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, TextField, Link } from '@mui/material';
import { login } from '../../../store/user/user.thunk';
import { Button } from '../../../components';
import theme from '../LoginPage/LoginPage.styles';

function LoginForm({ onSetStatus }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Nhập email').email('Nhập email hợp lệ'),
      password: Yup.string().required('Nhập mất khẩu')
    }),
    onSubmit(values) {
      dispatch(login(values))
        .unwrap()
        .catch((err) => {
          const error = err.response ? err.response.data.toString() : err.toString();
          onSetStatus({ error, open: true });
        });
    }
  });

  return (
    <Box component='form' minWidth='25rem' onSubmit={formik.handleSubmit}>
      <Box component='legend' textAlign='center' fontSize='2rem' color={theme.otherColors.gray}>
        Đăng nhập
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '1rem',
          m: '1rem 0 1rem 0'
        }}
      >
        <TextField
          type='text'
          name='email'
          label='Email'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          type='password'
          name='password'
          label='Mật khẩu(*)'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>
      <Box>
        <Link
          component={RouterLink}
          to='/register'
          sx={{
            fontSize: '0.8rem',
            color: theme.otherColors.purple,
            fontWeight: 400,
            textDecoration: 'underline'
          }}
        >
          Đăng ký / Quên mật khẩu?
        </Link>
      </Box>
      <Button
        config={{
          type: 'submit',
          variant: 'btnOrange',
          sx: {
            mt: '2rem',
            p: '0.5rem 2rem',
            float: 'right'
          }
        }}
        text='Đăng nhập'
      />
    </Box>
  );
}

LoginForm.propTypes = {
  onSetStatus: PropTypes.oneOfType([PropTypes.func])
};

export default LoginForm;
