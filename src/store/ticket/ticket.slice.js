import { createSlice } from '@reduxjs/toolkit';
import { handleSetTicket, handleInitTicket } from './ticket.actions';

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    film: {
      id: '',
      name: ''
    },
    dateTime: '',
    room: '',
    slots: [],
    quantity: 0,
    total: 0,
    error: null
  },
  reducers: {
    setTicket: handleSetTicket,
    init: handleInitTicket
  }
});

export const { setTicket, init } = ticketSlice.actions;

export default ticketSlice.reducer;
