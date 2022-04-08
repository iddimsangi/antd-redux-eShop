import { productsReducer } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  allProducts: productsReducer,
});
export default rootReducer;
