import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setProduct:
      return {
        ...state,
        product: {
          ...state.product,
          [action.name]: action.payload,
        },
      };
    default:
      return state;
  }
};
