import { actionsTypes } from "../actions-types/actionsTypes";

const initialState = { products: [] };

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case actionsTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionsTypes.FETCH_PRODUCT:
      return {
        ...state,
        product: payload,
      };

    default:
      return state;
  }
};
