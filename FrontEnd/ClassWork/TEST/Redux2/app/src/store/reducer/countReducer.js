const defaultState = 0;

export const countReducer = (state = defaultState, action) => {
  if (action.type === "INC") {
    return state + action.payload;
  } else if (action.type === "DEC") {
    return state - action.payload;
  } else if (action.type === "RESET") {
    return (state = 0);
  } else {
    return state;
  }
};
