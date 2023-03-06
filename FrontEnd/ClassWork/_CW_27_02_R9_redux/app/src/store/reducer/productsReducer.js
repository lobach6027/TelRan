const defaultState = [];
const ADD = "PRODUCTS_ADD"
const DELETE = "PRODUCT_DELETE"

export const addProductAction = (title, price, discount)=>{
  return {
    type: ADD,
    payload: {
      id: Date.now(),
      title,
      price,
      discount,
    }}
}

export const deleteProductAction = (id)=>{
  return {type:DELETE,payload:id}
}
export const productsReducer = (state = defaultState, action) => {
  if (action.type === ADD) {
    return [...state, action.payload];
  } else if (action.type === DELETE) {
    return state.filter((item) => item.id !== action.payload);
  } else {
    return state;
  }
};
