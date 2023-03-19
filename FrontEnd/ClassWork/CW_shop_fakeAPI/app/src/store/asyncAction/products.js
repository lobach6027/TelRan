import {productsLoadAction } from "../reducer/productsReducer";

export const asyncloadProductsAction = async (dispatch) => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();
  dispatch(productsLoadAction(data))
  console.log(data);
};
