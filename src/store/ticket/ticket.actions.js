import _ from 'lodash';

export function handleInitTicket(state) {
  state.film = {
    id: '',
    name: ''
  };
  state.dateTime = '';
  state.room = '';
  state.slots = [];
  state.quantity = 0;
  state.total = 0;
  state.error = null;
}

export function handleSetTicket(state, { payload }) {
  const { type = '', ...rest } = payload;

  if (type !== 'isActive' && type !== 'notActive') {
    const { dateTime, film, room } = rest;

    state.film = film;
    state.room = room;
    state.dateTime = dateTime;
  } else {
    const { slot = '', price = 0 } = rest;
    const newQuantity = type === 'isActive' ? state.quantity + 1 : state.quantity - 1;

    state.quantity = newQuantity;
    state.total = newQuantity * price;
    state.error = null;
    state.slots =
      type === 'isActive'
        ? [...state.slots, slot]
        : _.remove(state.slots, ({ id }) => id !== slot.id);
  }
}
