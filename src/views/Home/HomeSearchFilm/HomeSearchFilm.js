import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { getFilmByID } from '../../../store/film/film.thunk';
import { changeDate, changeTime, init } from '../../../store/film/film.slice';
import { Progress } from '../../../components';

function HomeSearchFilm({ onSetStatus, films, filmSelect }) {
  const { isLoading, error, ...filmSelector } = filmSelect;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  const handleChangeFilm = (evt) => {
    const id = evt.target.value;
    if (!id) return;

    dispatch(getFilmByID(id))
      .unwrap()
      .catch((err) => {
        const errorMsg = err.response ? err.response.data : err;
        return onSetStatus({ error: errorMsg.toString(), open: true });
      });
  };

  const handleChangeDate = (evt) => {
    const dateSelected = evt.target.value;
    if (!dateSelected) return;

    dispatch(changeDate(dateSelected));
  };

  const handleChangeTime = async (evt) => {
    const timeSelectValue = evt.target.value;
    if (timeSelectValue) {
      const { id, info, dateTimeSelected, timeSelected } = filmSelector;

      const time = dateTimeSelected.times.find(({ value }) => value === timeSelectValue);

      await dispatch(changeTime(time));

      navigate({
        pathname: '/booking',
        search: `?id=${id}&name=${info.title}&price=${info.price}&dateSelected=${dateTimeSelected.date}&timeSelected=${timeSelectValue}&room=${time.room.name}`
      });
    }
  };

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
          value={filmSelector.dateTimeSelected.date}
          onChange={handleChangeDate}
          inputProps={{ 'aria-label': 'ngày' }}
          displayEmpty
        >
          <MenuItem value=''>
            <em>Ngày</em>
          </MenuItem>
          {filmSelector.dateTimes.map(({ date }) => {
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
          value={filmSelector.timeSelected.value}
          onChange={handleChangeTime}
          inputProps={{ 'aria-label': 'time' }}
          displayEmpty
        >
          <MenuItem value=''>
            <em>Suất chiếu</em>
          </MenuItem>
          {filmSelector.dateTimeSelected.times.map(({ value }) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
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
  films: PropTypes.oneOfType([PropTypes.array]),
  filmSelect: PropTypes.oneOfType([PropTypes.object])
};

export default HomeSearchFilm;
