import { useState } from 'react';
import { Typography, Snackbar, Alert, colors } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setTicket } from '../../../store/ticket/ticket.slice';
import { isGreenColor, isGreyColor } from '../../../utils/common/common';
import useMuiStatusError from '../../../hooks/useMuiStatusError';

const { grey, green } = colors;

function Slot({ bgcolor: bgColorInit, slotId, price }) {
  const [statusSlot, setStatusSlot] = useState({
    visibility: isGreyColor(bgColorInit) ? 'hidden' : 'visible',
    bgcolor: bgColorInit,
    isActive: false
  });

  const [status, { handleClose, setStatus }] = useMuiStatusError();

  const { quantity } = useSelector((state) => state.ticket);

  const { error, open } = status;

  const { bgcolor, visibility, isActive } = statusSlot;

  const dispatch = useDispatch();

  const handleClick = (evt) => {
    const { id } = evt.target;
    if (!id) return;

    const isActiveStatus = !isActive;

    if (!isGreenColor(bgcolor) && !isGreyColor(bgcolor)) return;

    if (quantity === 10 && isActiveStatus) {
      // eslint-disable-next-line consistent-return
      return setStatus({ error: 'Đặt tối đa 10 chỗ', open: true });
    }

    setStatusSlot({
      bgcolor: isActiveStatus ? green[500] : grey[500],
      visibility: isActiveStatus ? 'visible' : 'hidden',
      isActive: isActiveStatus
    });

    dispatch(
      setTicket({
        type: isActiveStatus ? 'isActive' : 'notActive',
        slot: { id, type: 'cell' },
        price
      })
    );
  };

  return (
    <Typography component='span' variant='slot' bgcolor={bgcolor}>
      {error && (
        <Snackbar onClose={handleClose} open={open}>
          <Alert onClose={handleClose} severity='error'>
            {error}
          </Alert>
        </Snackbar>
      )}
      <Typography
        component='b'
        id={slotId}
        variant='slot-b'
        visibility={visibility}
        onClick={handleClick}
      >
        {slotId}
      </Typography>
    </Typography>
  );
}

Slot.propTypes = {
  bgcolor: PropTypes.string,
  slotId: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Slot;
