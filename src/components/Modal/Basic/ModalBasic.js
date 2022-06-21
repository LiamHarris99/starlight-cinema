import PropTypes from 'prop-types';
import { Box, Modal, ThemeProvider, Typography, Backdrop, Fade } from '@mui/material';
import theme from './ModalBasic.styles';

function ModalBasic({ children, title, rest }) {
  const { open, onClose } = rest;

  return (
    <ThemeProvider theme={theme}>
      <Modal
        keepMounted
        open={open}
        onClose={onClose}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        variant='modal-basic'
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Fade in={open}>
          <Box
            sx={{
              background: theme.otherColors.white,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '20rem',
              borderRadius: '1rem',
              boxShadow: '1rem',
              p: 4
            }}
          >
            {title && (
              <Typography component='h2' variant='title-modal-basic'>
                {title}
              </Typography>
            )}
            {children}
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}

ModalBasic.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf([PropTypes.node]), PropTypes.node]),
  title: PropTypes.string,
  rest: PropTypes.oneOfType([PropTypes.object])
};

export default ModalBasic;
