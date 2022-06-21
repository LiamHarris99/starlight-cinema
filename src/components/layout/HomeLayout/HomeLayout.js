import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function HomeLayout() {
  return (
    <Box
      sx={{
        background: `url('https://starlight.vn/Content/img/bgs6.jpg')`
      }}
    >
      <Container maxWidth='lg'>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </Box>
  );
}

export default HomeLayout;
