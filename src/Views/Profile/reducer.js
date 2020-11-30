import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getUserData:
      return { ...state, loading: true };
    case actions.getUserDataSuccess:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case actions.getUserDataError:
      return { ...state, loading: false };
    case actions.setUserData:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.payload,
        },
      };
    case actions.setEnterpriseData:
      return {
        ...state,
        user: {
          ...state.user,
          enterprise: {
            ...state.user.enterprise,
            [action.name]: action.payload,
          },
        },
      };
    case actions.setImgChanged:
      return {
        ...state,
        imgChanged: true,
      };
    case actions.updateProfile:
      return {
        ...state,
        loading: true,
        buttonText: "Cargando...",
      };
    case actions.updateProfileSuccess:
      return {
        ...state,
        loading: false,
        buttonText: "Actualizar Perfil",
        reload: true,
      };
    case actions.updateProfileError:
      return {
        ...state,
        loading: false,
        reload: true,
        buttonText: "Actualizar Perfil",
      };
    default:
      return state;
  }
};
