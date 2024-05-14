const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // calculate item price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc, item) => acc + (item.price * 100 * item.qty) / 100,
      0
    )
  );

  // calculate shipping price (if order is over 100$ ten free, else $10 shiiping price)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // calculate tax price (15 % tax)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  // calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  // saved to Local Storage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
