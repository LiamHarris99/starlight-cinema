export function handleChangeDate(state, { payload: dateSelectedValue }) {
  const dateTimeSelected = state.dateTimes.find(({ date }) => date === dateSelectedValue);

  state.dateTimeSelected = dateTimeSelected;
}

export function handleChangeTime(state, { payload: timeSelected }) {
  state.timeSelected = timeSelected;
}

export function initSelector(state) {
  state.id = '';
  state.info = {};
  state.dateTimes = [];
  state.dateTimeSelected = {
    date: '',
    times: []
  };
  state.timeSelected = {
    value: '',
    room: {}
  };
  state.isLoading = false;
  state.error = null;
}
