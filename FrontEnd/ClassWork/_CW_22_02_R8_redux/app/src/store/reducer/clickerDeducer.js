const products = [
  { id: 1, title: "Apple", price: 125, discount: 10 },
  { id: 2, title: "Pear", price: 105, discount: 10 },
  { id: 3, title: "Orange", price: 145, discount: 10 },
];

export const clickerReducer = (state = products, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "DELETE") {
    return state.filter((item) => item.id !== action.payload);
  } else {
    return state;
  }
};
