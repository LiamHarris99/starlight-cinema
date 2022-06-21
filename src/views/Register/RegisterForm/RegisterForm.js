import {
  Box,
  RadioGroup,
  TextField,
  FormControlLabel,
  Radio,
  Typography,
  colors
} from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../../store/authentication/authentication.thunk';
import { Button } from '../../../components';

const stylesBox = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  m: '1rem 0 1rem 0'
};

function RegisterForm({ onSetStatus }) {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.authen);

  const formik = useFormik({
    initialValues: {
      name: '',
      ID: 0,
      email: '',
      address: '',
      phone: 0,
      gender: 'male',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nhập tên'),
      ID: Yup.number().required('Nhập chứng minh nhân dân').typeError('CMND không hợp lệ'),
      address: Yup.string().required('Nhập địa chỉ'),
      email: Yup.string().required('Nhập email').email('Nhập email hợp lệ'),
      phone: Yup.number().test('len', 'Đồ dài gồm 10 số', (value) => {
        return value ? value.toString().length === 10 : null;
      }),
      password: Yup.string()
        .required('Nhập mật khẩu')
        .min(6, 'Tối thiểu 6 kí tự')
        .max(10, 'Tối đa 10 ký tự')
    }),
    onSubmit(values) {
      const { email, password, ...rest } = values;
      const user = { email, password, info: rest };
      dispatch(register(user))
        .unwrap()
        .catch((err) => {
          if (!err.response) onSetStatus({ error: err.toString(), open: true });
          else onSetStatus({ error: err.response.data.toString(), open: true });
        });
    }
  });

  if (isLoggedIn) return <Typography component='h2'>Welcome !</Typography>;

  return (
    <Box component='form' minWidth='25rem' onSubmit={formik.handleSubmit}>
      <Box component='legend' textAlign='center' fontSize='2rem'>
        Thông tin tài khoản
      </Box>
      <Box sx={stylesBox}>
        <TextField
          type='text'
          name='name'
          label='Họ tên(*)'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          type='text'
          name='email'
          label='Email(*)'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <Box sx={stylesBox}>
        <TextField
          type='text'
          name='address'
          label='Địa chỉ(*)'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          type='text'
          name='ID'
          label='CMND(*)'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.ID && Boolean(formik.errors.ID)}
          helperText={formik.touched.ID && formik.errors.ID}
        />
      </Box>
      <Box sx={stylesBox}>
        <TextField
          type='password'
          name='password'
          label='Mật khẩu(*)'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          type='password'
          name='password'
          label='Nhập lại mật khẩu(*)'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>
      <Box sx={stylesBox}>
        <TextField
          type='text'
          name='phone'
          label='Điện thoại(*)'
          variant='outlined'
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <RadioGroup
          defaultValue='male'
          aria-labelledby='gender-radio-button-group'
          name='gender'
          onChange={formik.handleChange}
        >
          <FormControlLabel label='Nam' value='male' control={<Radio />} />
          <FormControlLabel label='Nữ' value='female' control={<Radio />} />
        </RadioGroup>
      </Box>
      <Button
        config={{ type: 'submit', variant: 'btnOrange', sx: { float: 'right', mb: '1rem' } }}
        text='Đăng ký'
      />
      <Typography component='p' variant='rules'>
        Vui lòng nhập đầy đủ thông tin vào các trường có đánh dấu
        <Typography component='span' color={colors.red[500]}>
          (*)
        </Typography>
      </Typography>
    </Box>
  );
}

RegisterForm.propTypes = {
  onSetStatus: PropTypes.oneOfType([PropTypes.func])
};

export default RegisterForm;
