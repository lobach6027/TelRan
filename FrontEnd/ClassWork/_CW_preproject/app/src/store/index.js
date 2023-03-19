import { createStore } from "redux";
import { categoriesReducer } from "./reducer/categoriesReducer";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
  categories: categoriesReducer,
 
});
export const store = createStore(rootReducer);
