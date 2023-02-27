const defaultState = [];

export const productsReducer = (state = defaultState, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "DELETE") {
    return state.filter((item) => item.id !== action.payload);
  } else {
    return state;
  }
};
