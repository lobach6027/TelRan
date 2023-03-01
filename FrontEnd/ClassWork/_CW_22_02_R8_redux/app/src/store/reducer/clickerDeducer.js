const ADD = "PRODUCTS_ADD"
const DEL = "PRODUCT_DELETE"
export const addProductAction = (title,price,discount)=>{
  return {
    type: ADD,
    payload: {id:Date.now(),title,price,discount}
  }
}
export const deleteProductAction = (id) =>{
return {
  type: DEL,
  payload:id
}
}
const products = [
  { id: 1, title: "Apple", price: 125, discount: 10 },
  { id: 2, title: "Pear", price: 105, discount: 10 },
  { id: 3, title: "Orange", price: 145, discount: 10 },
];

export const clickerReducer = (state = products, action) => {
  if (action.type === ADD) {
    return [...state, action.payload];
  } else if (action.type === DEL) {
    return state.filter((item) => item.id !== action.payload);
  } else {
    return state;
  }
};
