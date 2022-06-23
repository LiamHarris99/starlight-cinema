import { Box, Typography, colors, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../components';
import { VND } from '../../../utils/common/common';
import { setCombo } from '../../../store/combo/combo.slice';

function ComboItem({ item }) {
  const { orange, grey } = colors;

  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const { image, ...rest } = item;

  const { id: idItem, name, price } = rest;

  const handleClick = (evt) => {
    const { id } = evt.target;

    if (!quantity && id === '-') return;

    if (quantity === 5 && id === '+') return;

    let temp = quantity;

    if (quantity > 0 && id === '-') temp -= 1;
    else if ((quantity === 0 || quantity < 5) && id === '+') temp += 1;

    const newCombo = { ...rest, quantity: temp, type: id };

    setQuantity(temp);

    dispatch(setCombo(newCombo));
  };

  return (
    <Box width='30%'>
      <Box component='img' src={image} alt='combo' width='100%' display='block' />
      <Box color={orange[500]} bgcolor={grey[50]} p='0.5rem'>
        <Box>
          <Typography component='h2' variant='title-combo'>
            {name} ({idItem})
          </Typography>
          <Typography component='strong' variant='price'>
            {VND.format(price)}
          </Typography>
        </Box>
        <Stack variant='combo-cta'>
          <Button text='-' config={{ id: '-', variant: 'btnCombo', onClick: handleClick }} />
          <Typography component='span' variant='quantity'>
            {quantity}
          </Typography>
          <Button text='+' config={{ id: '+', variant: 'btnCombo', onClick: handleClick }} />
        </Stack>
      </Box>
    </Box>
  );
}

ComboItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object])
};

function ComboList({ list }) {
  return (
    <Stack variant='combo-list'>
      {list.map((item) => (
        <ComboItem key={item.id} item={item} />
      ))}
    </Stack>
  );
}

ComboList.propTypes = {
  list: PropTypes.oneOfType([PropTypes.array])
};

export default ComboList;
