import {
  SET_CLIENT,
  SET_SYSTEM,
  SET_OPTIONS,
  SET_TRANSACTIONS
} from "../Constants";
import { helloWorld, transactions, getConnectionData } from "../Utils";

export const setOptions = options => ({ type: SET_OPTIONS, payload: options });

export const setClient = client => ({ type: SET_CLIENT, payload: client });

export const setSystem = system => ({ type: SET_SYSTEM, payload: system });

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  payload: transactions
});

export const getOptions = () => {
  return async dispatch => {
    dispatch(setOptions(await getConnectionData()));
  };
};

export const connectSystem = (client, system) => {
  // let res = await helloWorld();
  // console.log(res);
  return async dispatch => {
    dispatch(setClient(client));
    dispatch(setSystem(system));
  };
};
