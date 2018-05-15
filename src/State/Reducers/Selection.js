import {
  SET_CLIENT,
  SET_SYSTEM,
  SET_OPTIONS,
  SET_TRANSACTIONS
} from "../Constants";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CLIENT:
      return { ...state, client: action.payload };
    case SET_SYSTEM:
      return { ...state, system: action.payload };
    case SET_OPTIONS:
      return { ...state, options: action.payload };
    case SET_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};
