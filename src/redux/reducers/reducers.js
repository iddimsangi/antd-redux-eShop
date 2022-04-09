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
