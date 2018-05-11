import { SET_CLIENT, SET_SYSTEM } from "../Constants";
import { helloWorld } from "../Utils";

export const setClient = client => ({ type: SET_CLIENT, payload: client });

export const setSystem = system => ({ type: SET_SYSTEM, payload: system });

export const connectSystem = async (client, system) => {
  let res = await helloWorld();
  console.log(res);
  return dispatch => {
    dispatch(setClient(client));
    dispatch(setSystem(system));
  };
};
