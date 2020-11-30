import { actions } from "./actions";
import {initialState} from './constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setUser:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.payload,
        },
      };
    case actions.saveUser:
      return {
        ...state,
        buttonText: "Cargando...",
        saveUserLoading: true,
        saveUserError: null,
      };
    case actions.saveUserSuccess:
      return {
        ...state,
        user: initialState.user,
        buttonText: "Registrarme",
        saveUserLoading: false,
        saveUserError: null,
      };
    case actions.saveUserError:
      return {
        ...state,
        buttonText: "Registrarme",
        saveUserLoading: false,
        saveUserError: action.payload,
      };
    default:
      return state;
  }
};
