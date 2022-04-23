import { actionsTypes } from "../actions-types/actionsTypes";

export const setProducts = (products) => {
  return {
    type: actionsTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const setSelectedProduct = (product) => {
  return {
    type: actionsTypes.SET_SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: actionsTypes.REMOVE_SELECTED_PRODUCT,
  };
};
