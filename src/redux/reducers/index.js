import { productsReducer, productReducer } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: productReducer,
});
export default rootReducer;
