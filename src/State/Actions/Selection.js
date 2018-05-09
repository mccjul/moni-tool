import { SET_CLIENT, SET_SYSTEM } from "../Constants";

export const setClient = client => {
  return dispatch => {
    dispatch({ type: SET_CLIENT, payload: client });
  };
};

export const setSystem = system => {
  return dispatch => {
    dispatch({ type: SET_SYSTEM, payload: system });
  };
};
