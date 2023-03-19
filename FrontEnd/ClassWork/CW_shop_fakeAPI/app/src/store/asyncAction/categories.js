import { categoriesLoadAction } from "../reducer/categoriesReducer";

export const asyncloadCategoriesAction = async (dispatch) => {
  const resp = await fetch("https://fakestoreapi.com/products/categories");
  const data = await resp.json();
  dispatch(categoriesLoadAction(data))
  console.log(data);
};
