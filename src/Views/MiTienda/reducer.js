import { actions } from "./actions";
import { initialState } from "./constants";

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
    case actions.getProducts:
      return {
        ...state,
        myProducts: [],
        loading: true,
      };
    case actions.getProductsSuccess:
      return {
        ...state,
        myProducts: action.payload,
        loading: false,
      };
    case actions.getProductsError:
      return {
        ...state,
        myProducts: [],
        loading: false,
      };
    case actions.saveProduct:
      return {
        ...state,
        loadingForm: true,
      };
    case actions.saveProductSuccess:
      return {
        ...state,
        loadingForm: false,
        reload: !state.reload,
        product: initialState.product,
        open: false,
      };
    case actions.saveProductError:
      return {
        ...state,
        loadingForm: false,
      };
    case actions.setOpen:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
