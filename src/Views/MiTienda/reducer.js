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
      console.log(action.payload);
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
        textButton: "Procesando...",
      };
    case actions.saveProductSuccess:
      return {
        ...state,
        loadingForm: false,
        reload: !state.reload,
        product: initialState.product,
        open: false,
        isImageChanged: false,
        edit: false,
        textButton: "Publicar",
      };
    case actions.saveProductError:
      return {
        ...state,
        loadingForm: false,
        textButton: "Publicar",
      };
    case actions.setOpen:
      return {
        ...state,
        open: !state.open,
        edit: false,
        isImageChanged: false,
        product: initialState.product,
      };
    case actions.editProduct:
      return {
        ...state,
        open: !state.open,
        product: action.payload,
        edit: true,
      };
    case actions.changeImage:
      return {
        ...state,
        isImageChanged: true,
      };
    default:
      return state;
  }
};
