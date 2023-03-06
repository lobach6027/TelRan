const ADD_TO_BASKET = "ADDTOBASKET";
const INCREMENT = "INC";
const DECREMENT = "DEC";
const DELETE_ITEM = "DELETEITEM";

export const addToBasketAction = id => {
  return { type: ADD_TO_BASKET, payload: id };
};

export const incrementAction = id=> {
  return { type: INCREMENT, payload: id };
};
export const decrementtAction = id => {
  return { type: DECREMENT, payload: id };
};

export const deleteAction = id => {
  return { type: DELETE_ITEM, payload: id };
};

const defaultState = [];

export const basketReducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_BASKET) {
    const target = state.find((item) => item.id === action.payload);
    if (target === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else {
      target.count++;
      return [...state];
    }
  } else if (action.type === INCREMENT) {
    const target = state.find((item) => item.id === action.payload);
    target.count++;
    return [...state];
  } else if (action.type === DECREMENT) {
    const target = state.find((item) => item.id === action.payload);
    target.count--;
    if (target.count === 0) {
      state = state.filter((item) => item.id !== action.payload);
      return [...state];
    } else {
      return [...state];
    }
  } else if (action.type === DELETE_ITEM) {
    state = state.filter((item) => item.id !== action.payload);
    return [...state];
  } else {
    return state;
  }
};
