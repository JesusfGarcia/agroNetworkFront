import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getProducts:
      return {
        ...state,
        loading: true,
      };
    case actions.getProductsSuccess:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case actions.getProductsError:
      return {
        ...state,
        products: [],
        loading: false,
      };
    default:
      return state;
  }
};
