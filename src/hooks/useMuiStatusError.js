import { useState } from 'react';

function useStatusSnackbar() {
  const [status, setStatus] = useState({
    error: null,
    open: false
  });

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;

    setStatus({ error: null, open: false });
  };

  return [status, { setStatus, handleClose }];
}

export default useStatusSnackbar;
