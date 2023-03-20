import {productsLoadAction } from "../reducer/productsReducer";

export const asyncloadProductsAction = async (dispatch) => {
  const resp = await fetch("https://dummyjson.com/products");
  const data = await resp.json();
  dispatch(productsLoadAction(data.products))
 
 
  console.log(data.products);
};
