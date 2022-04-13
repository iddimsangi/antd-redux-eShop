import { actionsTypes } from "../actions-types/actionsTypes";
import ProductsApi from "../../Apis/ProductsApi";
export const setProducts = (products) => {
  return {
    type: actionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await ProductsApi.get("/products");
    dispatch({ type: actionsTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchProduct = (productID) => {
  return async (dispatch) => {
    const responseProduct = await ProductsApi.get(`products/${productID}`);
    dispatch({
      type: actionsTypes.FETCH_PRODUCT,
      payload: responseProduct.data,
    });
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
