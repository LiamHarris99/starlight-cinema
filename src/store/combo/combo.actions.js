export function handleSetCombo(state, { payload }) {
  const { type, ...restPayload } = payload;

  const { id: payloadId, price: payloadPrice, quantity: payloadQuantity } = restPayload;

  let isFound = false;

  const newCombo = [];
  let newTotal = 0;

  if (!state.combos.length && type === '+') {
    newCombo.push(restPayload);
    newTotal = payloadPrice * payloadQuantity;
    isFound = true;
  } else {
    state.combos.forEach((combo) => {
      const { id, price, quantity } = combo;

      let item = { ...combo };

      if (id === payloadId) {
        isFound = true;

        if (!payloadQuantity) return;

        newTotal += price * payloadQuantity;
        item = { ...restPayload };
      } else newTotal += price * quantity;

      newCombo.push(item);
    });
  }

  if (isFound) state.total = newTotal;
  else if (!isFound && payloadQuantity > 0) {
    newCombo.push(restPayload);
    state.total += payloadPrice * payloadQuantity;
  }

  state.combos = [...newCombo];
}

export function handleInitCombo(state) {
  state.total = 0;
  state.combos = [];
}
