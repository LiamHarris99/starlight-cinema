import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, ThemeProvider, Snackbar, Alert } from '@mui/material';
import { getFilms } from '../../../store/films/films.thunk';
import theme from './HomePage.styles';
import HomeSearchFilm from '../HomeSearchFilm/HomeSearchFilm';
import { Progress } from '../../../components';
import useMuiStatusError from '../../../hooks/useMuiStatusError';
import HomeCarousel from '../HomeCarousel/HomeCarousel';

function HomePage() {
  const { film, films } = useSelector((state) => ({
    films: state.films,
    film: state.film
  }));

  const { isLoading, films: filmList } = films;

  const [status, { handleClose, setStatus }] = useMuiStatusError();

  const { error, open } = status;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms())
      .unwrap()
      .catch((err) => {
        const errorMsg = err.response ? err.response.data : err;
        return setStatus({ error: errorMsg.toString(), open: true });
      });
  }, [dispatch, setStatus]);

  if (isLoading) return <Progress open={isLoading} />;

  return (
    <ThemeProvider theme={theme}>
      {error && (
        <Snackbar onClose={handleClose} open={open}>
          <Alert onClose={handleClose} severity='error'>
            {error}
          </Alert>
        </Snackbar>
      )}

      <Box component='main'>
        <HomeCarousel onSetStatus={setStatus} />
        <HomeSearchFilm onSetStatus={setStatus} films={filmList} filmSelect={film} />
      </Box>
    </ThemeProvider>
  );
}

export default HomePage;
