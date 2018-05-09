import { SET_CLIENT, SET_SYSTEM } from "../Constants";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CLIENT:
      return { ...state, client: action.payload };
    case SET_SYSTEM:
      return { ...state, system: action.payload };
    default:
      return state;
  }
};
