import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getUserData:
      return state;
    case actions.getUserDataSuccess:
      console.log(action.payload);
      return state;
    case actions.getUserDataError:
      return state;
    default:
      return state;
  }
};
