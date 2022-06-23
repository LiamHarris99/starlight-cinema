/* eslint-disable no-param-reassign */
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import _ from 'lodash';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { Button } from '../../../components';
import Title from '../ConfirmInfo/ConfirmTitle';
import { addOrder } from '../../../store/orders/orders.thunk';
import { addSlots } from '../../../store/films/films.thunk';
import { get } from '../../../services/localStorage/localStorage';

function ConfirmForm({ user, ticket, combos }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { films, film } = useSelector((state) => ({
    films: state.films,
    film: state.film
  }));

  const { timeSelected, dateTimeSelected } = film;

  const { slots } = timeSelected.room;

  console.log(film, 'film');

  const formik = useFormik({
    initialValues: {
      payment: 'atm'
    },
    async onSubmit(values) {
      const userId = get('id');

      const order = { userId, ticket, combos, payment: values.payment };
      try {
        await dispatch(addOrder(order));

        // TODO: Add room sell to db
        // const dateTime = film.dateTimes.find(({ date }) => date === dateTimeSelected.date);
        // const time = dateTime.times.find(({ value }) => value === timeSelected.value);
        // time.room.slots.push([...ticket.slots]);

        console.log(film, 'film');
        // const resFilms = await dispatch(addSlots());
        navigate('/history', { replace: true });
      } catch (err) {
        console.log(err, 'err');
      }
    }
  });

  console.log(ticket, 'ticket');

  const clickHandle = () => navigate('/', { replace: true });

  return (
    <Box component='form' onSubmit={formik.handleSubmit}>
      <Title title='Hình thức thanh toán' />
      <FormControl>
        <RadioGroup
          aria-labelledby='radio-buttons-payment'
          defaultValue='atm'
          name='payment'
          onChange={formik.handleChange}
        >
          <FormControlLabel
            label='OnePay - ATM nội địa'
            value='atm'
            control={<Radio variant='payment' />}
          />
          <FormControlLabel
            label='Thanh toán trực tiếp tại quầy'
            value='cash'
            control={<Radio variant='payment' />}
          />
        </RadioGroup>
      </FormControl>
      <Stack variant='cta-confirm'>
        <Button text='Xác nhận' config={{ variant: 'btnConfirm2', type: 'submit' }} />
        <Button
          text='Hủy giao dịch'
          config={{ type: 'button', variant: 'btnConfirm2', onClick: clickHandle }}
        />
      </Stack>
    </Box>
  );
}

ConfirmForm.propTypes = {
  ticket: PropTypes.oneOfType([PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.object]),
  combos: PropTypes.oneOfType([PropTypes.object])
};

export default ConfirmForm;
