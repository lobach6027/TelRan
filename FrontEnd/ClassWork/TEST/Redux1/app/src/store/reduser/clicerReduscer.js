export const clicerReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "CLEAR") {
    return state = 0
  } 
  else if (action.type === "INPUTVALUE") {
    return state + action.payload
  } 
  else if (action.type === "INPUTVALUEMINUS") {
    return state - action.payload
  } 
  else {
    return state;
  }
};
