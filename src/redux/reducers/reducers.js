import { actionsTypes } from "../actions-types/actionsTypes";

const initialState = [];

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_PRODUCTS:
      return state;
      break;

    default:
      return state;
  }
};
