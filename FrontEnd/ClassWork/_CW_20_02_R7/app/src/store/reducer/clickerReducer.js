export const INC = "INC" 
export const sumAction = payload =>{
    return{
        type:INC,
        payload:+payload
    }
}

export const clickerReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "CLEAR") {
    return 0;
  } else if (action.type === INC) {
    return state + action.payload;
  } else if (action.type === "DEC") {
    return state - action.payload;
  } else {
    return state;
  }
};
