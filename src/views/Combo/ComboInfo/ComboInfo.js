import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack, Typography } from '@mui/material';
import { Button } from '../../../components';
import { VND } from '../../../utils/common/common';
import { init } from '../../../store/combo/combo.slice';

function ComboInfo() {
  const combos = useSelector((state) => state.combos);

  const { combos: comboList, total } = combos;

  const [combosSelected, setCombosSelected] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  useEffect(() => {
    const combosId = comboList.map((order) => order.id);

    setCombosSelected([...combosId]);
  }, [comboList]);

  return (
    <Stack variant='combo-info'>
      <Box>
        <Typography component='span' variant='text-info-combo'>
          Combo đã chọn: {combosSelected.toString()}
        </Typography>
      </Box>
      <Box>
        <Typography component='span' variant='text-info-combo'>
          Thành tiền: {VND.format(total)}
        </Typography>
      </Box>
      <Box>
        <Button
          text='Xác nhận'
          config={{ variant: 'btnConfirm', onClick: () => navigate('/confirm') }}
        />
      </Box>
    </Stack>
  );
}

export default ComboInfo;
