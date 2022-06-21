import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { getFilmByID } from '../../../store/film/film.thunk';
import { changeDate } from '../../../store/film/film.slice';
import { Progress } from '../../../components';

function HomeSearchFilm({ onSetStatus, films }) {
  const { isLoading, error, ...filmSelector } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeFilm = (evt) => {
    const id = evt.target.value;
    if (!id) return;

    dispatch(getFilmByID(id))
      .unwrap()
      .catch((err) => {
        const errorMsg = err.response ? err.response.data.toString() : err.toString();
        return onSetStatus({ error: errorMsg, open: true });
      });
  };

  const handleChangeDate = (evt) => {
    const dateSelected = evt.target.value;
    if (!dateSelected) return;

    dispatch(changeDate(dateSelected));
  };

  const handleChangeTime = (evt) => {
    const timeSelected = evt.target.value;
    if (timeSelected) {
      const { id, info, dateSelected } = filmSelector;
      navigate({
        pathname: '/booking',
        search: `?id=${id}&name=${info.title}&price=${info.price}&dateSelected=${dateSelected}&timeSelected=${timeSelected}`
      });
    }
  };

  console.log(filmSelector, 'filmSelector');

  if (isLoading) return <Progress />;

  if (error) return onSetStatus({ error, open: true });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        background: `url('https://starlight.vn/Content/img/bgs3.jpg')`,
        p: '1rem'
      }}
    >
      <FormControl>
        <Select
          value={filmSelector.id}
          onChange={handleChangeFilm}
          inputProps={{ 'aria-label': 'films' }}
          displayEmpty
        >
          <MenuItem value=''>
            <em>Phim</em>
          </MenuItem>
          {films.map((film) => {
            const { id, info } = film;

            return (
              <MenuItem key={id} value={id}>
                {info.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          value={filmSelector.dateSelected}
          onChange={handleChangeDate}
          inputProps={{ 'aria-label': 'ngày' }}
          displayEmpty
        >
          <MenuItem value=''>
            <em>Ngày</em>
          </MenuItem>
          {filmSelector.dateTimes.map((dateTime) => {
            const { date } = dateTime;

            return (
              <MenuItem key={date} value={date}>
                {date}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          value={filmSelector.timeSelected}
          onChange={handleChangeTime}
          inputProps={{ 'aria-label': 'time' }}
          displayEmpty
        >
          <MenuItem value=''>
            <em>Suất chiếu</em>
          </MenuItem>
          {filmSelector.times.map((time) => {
            return (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

HomeSearchFilm.propTypes = {
  onSetStatus: PropTypes.oneOfType([PropTypes.func]),
  films: PropTypes.oneOfType([PropTypes.array])
};

export default HomeSearchFilm;
