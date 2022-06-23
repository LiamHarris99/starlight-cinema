import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './film/film.slice';
import filmsReducer from './films/films.slice';
import userReducer from './user/user.slice';
import sliderReducer from './slider/slider.slice';
import ticketReducer from './ticket/ticket.slice';
import combosReducer from './combo/combo.slice';
import ordersReducer from './orders/orders.slice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    film: filmReducer,
    slider: sliderReducer,
    ticket: ticketReducer,
    user: userReducer,
    combos: combosReducer,
    orders: ordersReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

export default store;
