import { actionsTypes } from "../actions-types/actionsTypes";

const initialState = { products: [] };

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
      break;

    default:
      return state;
  }
};

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
      break;
    case actionsTypes.REMOVE_SELECTED_PRODUCT:
      return {};
      break;

    default:
      return state;
  }
};
