import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './film/film.slice';
import filmsReducer from './films/films.slice';
import authenReducer from './authentication/authentication.slice';
import sliderReducer from './slider/slider.slice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
    slider: sliderReducer,
    authen: authenReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

export default store;
