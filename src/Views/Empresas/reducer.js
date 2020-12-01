import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getEnterprises:
      return {
        ...state,
        enterprises: [],
        loading: true,
      };

    case actions.getEnterprisesSuccess:
      console.log(action.payload);
      return {
        ...state,
        enterprises: action.payload,
        loading: false,
      };
    case actions.getEnterprisesError:
      return {
        ...state,
        enterprises: [],
        loading: false,
      };
    default:
      return state;
  }
};
