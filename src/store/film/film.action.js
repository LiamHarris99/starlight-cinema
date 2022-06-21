/* eslint-disable import/prefer-default-export */
export function handleChangeDate(state, { payload: dateSelected }) {
  const dateTimeSelected = state.dateTimes.find((dateTime) => dateTime.date === dateSelected);

  const { times } = dateTimeSelected;
  state.times = [...times];
  state.dateSelected = dateSelected;
}
