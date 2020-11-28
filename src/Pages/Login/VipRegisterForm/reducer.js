import { initialState } from "./constants";
import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.toggleEnterprise:
      return {
        ...state,
        register: {
          ...state.register,
          isEnterprise: !state.register.isEnterprise,
        },
      };
    default:
      return state;
  }
};
